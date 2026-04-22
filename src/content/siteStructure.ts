export type AreaSlug = "uppdrag" | "foreningsutveckling" | "skola-samverkan";

export interface NavItem {
  slug: AreaSlug;
  path: string;
  navLabel: string;
}

export const NAV_ITEMS: NavItem[] = [
  { slug: "uppdrag", path: "/uppdrag", navLabel: "Uppdrag" },
  { slug: "foreningsutveckling", path: "/foreningsutveckling", navLabel: "Föreningsutveckling" },
  { slug: "skola-samverkan", path: "/skola-samverkan", navLabel: "Skola & samverkan" },
];
