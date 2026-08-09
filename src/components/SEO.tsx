import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

function upsertMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function SEO({ title, description, image, structuredData }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    const absoluteImage = image ? new URL(image, window.location.origin).href : undefined;

    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    if (absoluteImage) {
      upsertMeta('meta[property="og:image"]', "property", "og:image", absoluteImage);
    }

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const schemaId = "site-structured-data";
    let schema = document.head.querySelector<HTMLScriptElement>(`script#${schemaId}`);
    if (structuredData) {
      if (!schema) {
        schema = document.createElement("script");
        schema.id = schemaId;
        schema.type = "application/ld+json";
        document.head.appendChild(schema);
      }
      schema.textContent = JSON.stringify(structuredData);
    } else if (schema) {
      schema.remove();
    }
  }, [description, image, location.pathname, structuredData, title]);

  return null;
}
