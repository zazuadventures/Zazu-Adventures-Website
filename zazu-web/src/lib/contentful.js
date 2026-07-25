import { createClient } from "contentful";

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const configuredEnvironment =
  import.meta.env.VITE_CONTENTFUL_ENVIRONMENT?.trim() || "master";

function createContentfulClient(environment) {
  return createClient({
    space,
    accessToken,
    environment,
  });
}

const client = createContentfulClient(configuredEnvironment);
const fallbackClient =
  configuredEnvironment === "master"
    ? client
    : createContentfulClient("master");

export const contentfulClient = client;
export default client;

export async function getEntriesWithFallback(query) {
  try {
    return await client.getEntries(query);
  } catch (error) {
    if (error?.status === 404 && configuredEnvironment !== "master") {
      return await fallbackClient.getEntries(query);
    }

    throw error;
  }
}
