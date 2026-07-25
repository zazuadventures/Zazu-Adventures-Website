import { getEntriesWithFallback } from "../lib/contentful";

export async function getHomePage() {
  const response = await getEntriesWithFallback({
    content_type: "homePage",
    limit: 1,
    include: 2,
  });

  return response.items[0];
}
