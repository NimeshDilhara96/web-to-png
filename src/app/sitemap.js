export default function sitemap() {
  const baseUrl = "https://tools.mommentx.space";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
