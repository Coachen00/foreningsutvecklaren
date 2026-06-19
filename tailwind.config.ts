import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      /* ─── Fluid type scale ───────────────────────────── */
      fontSize: {
        /* Display — H1, hero only, Lora */
        display: [
          "clamp(2.75rem, 4.2vw + 1rem, 4.85rem)",
          { lineHeight: "1.02", letterSpacing: "0" },
        ],
        /* Headline — H2, section titles, Work Sans */
        headline: [
          "clamp(1.75rem, 1.7vw + 1rem, 2.55rem)",
          { lineHeight: "1.1", letterSpacing: "0" },
        ],
        /* Subhead — H3, card titles, Work Sans */
        subhead: [
          "clamp(1.125rem, 0.8vw + 0.875rem, 1.45rem)",
          { lineHeight: "1.22", letterSpacing: "0" },
        ],
        /* Lead — ingress text */
        lead: [
          "clamp(1rem, 0.4vw + 0.875rem, 1.125rem)",
          { lineHeight: "1.68" },
        ],
        /* Body — default prose */
        body: ["1rem", { lineHeight: "1.65" }],
        /* Small — card body, meta */
        small: ["0.875rem", { lineHeight: "1.6" }],
        /* Micro — eyebrows, mono labels */
        micro: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.075em" }],
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          subtle: "hsl(var(--primary-subtle))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        signal: {
          green: "hsl(var(--signal-green))",
          blue: "hsl(var(--signal-blue))",
          gold: "hsl(var(--signal-gold))",
          coral: "hsl(var(--signal-coral))",
          ink: "hsl(var(--signal-ink))",
        },
        surface: {
          DEFAULT: "hsl(var(--card))",
          hover: "hsl(var(--surface-hover))",
        },
        swedish: {
          blue: "hsl(var(--swedish-blue))",
          yellow: "hsl(var(--swedish-yellow))",
        },
        zone: {
          attack: "hsl(var(--zone-attack))",
          midfield: "hsl(var(--zone-midfield))",
          defense: "hsl(var(--zone-defense))",
        },
        pitch: {
          DEFAULT: "hsl(var(--pitch))",
          lines: "hsl(var(--pitch-lines))",
          dark: "hsl(var(--pitch-dark))",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 1px)",
        sm: "calc(var(--radius) - 2px)",
      },

      boxShadow: {
        "2xs": "var(--shadow-2xs)",
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        "2xl": "var(--shadow-2xl)",
      },

      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        serif: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "IBM Plex Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
