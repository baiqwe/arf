import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://adoptmefont.com";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/adopt-me-names-generator`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/how-to-use-adopt-me-fonts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/styles/bubble-fonts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/styles/cute-fonts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/preppy-font-generator`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/symbols`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tag-filter-checker`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/pet-names`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pet-names/frost-dragon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/pet-names/shadow-dragon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/pet-names/cow`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}