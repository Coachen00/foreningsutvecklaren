import { useEffect } from "react";

const BASE = "Arbetsdetektiven";

export const useDocumentTitle = (title?: string, description?: string) => {
  useEffect(() => {
    document.title = title ? `${title} – ${BASE}` : BASE;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
};
