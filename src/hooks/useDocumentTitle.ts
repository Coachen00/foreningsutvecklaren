import { useEffect } from "react";

const BASE = "Föreningsutvecklaren";
const SITE_ORIGIN = "https://foreningsutvecklaren.se";

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

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const upsertOgUrl = (href: string) => upsertMeta("property", "og:url", href);

/**
 * Synkar dokumenttitel + meta description + og + twitter + canonical + og:url.
 *
 * - Vid `title === undefined` används BASE som titel (lämpligt för startsidan).
 * - `canonical` byggs av `SITE_ORIGIN + window.location.pathname` (utan query/hash)
 *   så sökmotorer ser en kanonisk version.
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

    if (typeof window !== "undefined") {
      const canonical = SITE_ORIGIN + window.location.pathname;
      upsertCanonical(canonical);
      upsertOgUrl(canonical);
    }
  }, [title, description]);
};
