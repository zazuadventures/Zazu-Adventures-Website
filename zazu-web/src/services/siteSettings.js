import { getEntriesWithFallback } from "../lib/contentful";

export async function getSiteSettings() {
  const response = await getEntriesWithFallback({
    content_type: "siteSettings",
    limit: 1,
    include: 2,
  });

  return response.items[0];
}
