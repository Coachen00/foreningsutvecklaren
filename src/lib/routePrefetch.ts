type Importer = () => Promise<unknown>;

/**
 * Pre-fetch-mappning för de routes som finns i top-nav.
 * Vite duplicerar inte chunks — `import("...")` här returnerar samma
 * promise som `lazy(() => import("..."))` i App.tsx.
 */
const ROUTE_IMPORTERS: Record<string, Importer> = {
  "/foreningsutveckling": () => import("@/pages/areas/Foreningsutveckling"),
  "/en-battre-vag": () => import("@/pages/areas/EnBattreVag"),
  "/fu-skola": () => import("@/pages/areas/FUiSkola"),
  "/uppdrag": () => import("@/pages/areas/Uppdrag"),
};

const triggered = new Set<string>();

export const prefetchRoute = (path: string): void => {
  const importer = ROUTE_IMPORTERS[path];
  if (!importer || triggered.has(path)) return;
  triggered.add(path);
  importer().catch(() => {
    // Network/import-fel — låt riktig navigering hantera det
    triggered.delete(path);
  });
};
