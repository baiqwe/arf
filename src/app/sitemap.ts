import type { MetadataRoute } from "next";

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://adoptmefont.com";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/adopt-me-names-generator`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/how-to-use-adopt-me-fonts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/styles`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/styles/bubble-fonts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/styles/cute-fonts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/styles/bold-fonts`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/styles/star-brackets`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/styles/small-caps`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/styles/double-struck`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/preppy-font-generator`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/symbols`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tag-filter-checker`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/pet-names`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/best-adopt-me-pet-names-2024`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/how-to-prevent-name-filtering-roblox`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}