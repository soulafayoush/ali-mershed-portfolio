import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ali-mershed-portfolio.vercel.app";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "en-US": baseUrl,
          "ar-SY": baseUrl,
        },
      },
    },
  ];
}
