import { getEntriesWithFallback } from "../lib/contentful";

function resolveAssetUrl(asset) {
  const url = asset?.fields?.file?.url || asset?.file?.url || asset?.url;

  if (!url) {
    return "";
  }

  return url.startsWith("//") ? `https:${url}` : url;
}

function normalizeHeroSlide(entry) {
  const fields = entry?.fields ?? entry ?? {};
  const image = resolveAssetUrl(fields.image || fields.heroImage);

  return {
    image,
    eyebrow: fields.eyebrow ?? "",
    title: fields.title ?? "",
    description: fields.description ?? "",
    primaryAction: {
      label: fields.primaryActionLabel ?? "Explore",
      href: fields.primaryActionHref ?? "/tours",
    },
    order: fields.order ?? 0,
  };
}

async function fetchStandaloneHeroSlides() {
  const response = await getEntriesWithFallback({
    content_type: "heroSlide",
    limit: 10,
    include: 2,
    order: "fields.order",
  });

  return (response.items ?? [])
    .map(normalizeHeroSlide)
    .filter((slide) => slide.image && slide.title);
}

async function fetchHomepageHeroSlides() {
  const response = await getEntriesWithFallback({
    content_type: "homePage",
    limit: 1,
    include: 2,
  });

  const homePage = response.items?.[0];
  const fields = homePage?.fields ?? {};
  const candidates = [
    fields.heroSlides,
    fields.heroSlide,
    fields.slides,
    fields.heroCarousel,
  ];
  const heroSlides = candidates.find(Array.isArray) ?? [];

  return heroSlides
    .map(normalizeHeroSlide)
    .filter((slide) => slide.image && slide.title)
    .sort((a, b) => a.order - b.order);
}

export async function getHeroSlides() {
  const standaloneSlides = await fetchStandaloneHeroSlides();

  if (standaloneSlides.length > 0) {
    return standaloneSlides;
  }

  return fetchHomepageHeroSlides();
}
