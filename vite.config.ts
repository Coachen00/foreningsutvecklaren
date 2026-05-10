import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/**
 * Lägger in CSP via <meta> i prod-bygget.
 *
 * GitHub Pages stöder INTE `public/_headers` (Netlify-format). Det är
 * varför vi måste injicera CSP via meta-tag istället. HSTS, X-Frame-Options
 * m.fl. går inte via meta — de tillkommer först om sajten flyttas till
 * Netlify/Cloudflare Pages där `_headers`-filen tolkas.
 *
 * Direktiven här ska matcha det som finns i `public/_headers` så att en
 * framtida flytt blir noll-arbete.
 */
const PROD_CSP = [
  "default-src 'self'",
  "script-src 'self'",
  // 'unsafe-inline' krävs för Tailwind-genererade inline-styles via React
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data:",
  "media-src 'self'",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const injectCspMeta = (): Plugin => ({
  name: "inject-csp-meta",
  apply: "build",
  transformIndexHtml(html) {
    return html.replace(
      '<meta name="referrer"',
      `<meta http-equiv="Content-Security-Policy" content="${PROD_CSP}" />\n    <meta name="referrer"`,
    );
  },
});

/**
 * Kopierar index.html till 404.html i prod-bygget.
 *
 * GitHub Pages serverar 404.html för okända paths. Genom att låta den
 * vara en kopia av index.html får vi SPA-routing att fungera vid F5
 * och direktlänkning till /uppdrag, /foreningsutveckling osv —
 * React Router tar över så snart appen mountar.
 */
const spa404Fallback = (): Plugin => ({
  name: "spa-404-fallback",
  apply: "build",
  closeBundle: async () => {
    const { copyFile } = await import("fs/promises");
    await copyFile("dist/index.html", "dist/404.html");
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)),
  },
  plugins: [react(), injectCspMeta(), spa404Fallback()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("@supabase")) return "vendor-supabase";
          if (id.includes("@radix-ui") || id.includes("cmdk") || id.includes("vaul")) {
            return "vendor-radix";
          }
          if (
            id.includes("react-router") ||
            id.includes("/react-dom/") ||
            id.includes("/react/") ||
            id.includes("scheduler")
          ) {
            return "vendor-react";
          }
          if (id.includes("recharts") || id.includes("d3-")) return "vendor-charts";
          if (id.includes("@tanstack")) return "vendor-tanstack";
          if (id.includes("lucide-react")) return "vendor-icons";
          return undefined;
        },
      },
    },
  },
});
