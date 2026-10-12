import type { MetadataRoute } from "next";
import { links } from "@/lib/data/profile";

export default function robots(): MetadataRoute.Robots {
  const base = links.siteUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
