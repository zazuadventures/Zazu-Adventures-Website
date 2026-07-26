import { testimonials as fallbackTestimonials } from "../data/testimonialData";

const API =
  "https://zazuadventures.com/wp-json/wp/v2/comments?post=760&per_page=100";

function stripHtml(html = "") {
  if (typeof window !== "undefined" && typeof DOMParser !== "undefined") {
    const parsed = new DOMParser().parseFromString(html, "text/html");
    return parsed.body.textContent?.trim() || "";
  }

  return html.replace(/<[^>]*>/g, "").trim();
}

function formatDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function buildFallbackAvatar(name = "") {
  const initials = getInitials(name) || "Z";
  return `https://placehold.co/96x96/png?text=${encodeURIComponent(initials)}`;
}

function normalizeTestimonial(comment) {
  const name = comment?.author_name?.trim() || "Guest";
  const text = stripHtml(comment?.content?.rendered || "");
  const avatar =
    comment?.author_avatar_urls?.[96] ||
    comment?.author_avatar_urls?.[48] ||
    buildFallbackAvatar(name);
  const date = formatDate(comment?.date_gmt || comment?.date);

  return {
    id: comment?.id ?? `${name}-${date}`,
    name,
    date,
    image: avatar,
    text,
  };
}

export const getTestimonials = async () => {
  try {
    const response = await fetch(API);

    if (!response.ok) {
      return fallbackTestimonials;
    }

    const data = await response.json();
    const normalized = data.map(normalizeTestimonial).filter((item) => item.text);

    return normalized.length ? normalized : fallbackTestimonials;
  } catch (error) {
    console.warn("Falling back to local testimonials:", error);
    return fallbackTestimonials;
  }
};
