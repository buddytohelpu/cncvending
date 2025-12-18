import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const routes = [
    "",
    "/about",
    "/contact",
    "/service-area",
    ...siteConfig.solutions.map((solution) => solution.slug),
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));

  return routes;
}

