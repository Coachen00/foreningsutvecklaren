import { useEffect } from "react";

const BASE = "Föreningsutvecklaren";

const upsertMeta = (
  attr: "name" | "property",
  key: string,
  content: string,
) => {
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

/**
 * Synkar dokumenttitel + meta description + og:title + twitter:title.
 *
 * Vid `title === undefined` används BASE som titel (lämpligt för startsidan).
 * Annars: `${title} – ${BASE}`.
 */
export const useDocumentTitle = (title?: string, description?: string) => {
  useEffect(() => {
    const fullTitle = title ? `${title} – ${BASE}` : BASE;
    document.title = fullTitle;
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("name", "twitter:title", fullTitle);

    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }
  }, [title, description]);
};
