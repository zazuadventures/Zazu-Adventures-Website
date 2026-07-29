import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { destinations } from "../src/lib/destinationData.js";
import { allTours } from "../src/data/tourData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, "..");
const publicDir = join(projectRoot, "public");
const siteUrl = "https://www.zazuadventures.com";
const lastMod = new Date().toISOString().slice(0, 10);

const staticRoutes = [
  "/",
  "/about",
  "/blog",
  "/contact",
  "/destinations",
  "/experiences",
  "/travel-services",
  "/tours",
];

const dynamicRoutes = [
  ...destinations.map((destination) => `/destinations/${destination.id}`),
  ...allTours.map((tour) => `/tours/${tour.slug}`),
];

const uniqueRoutes = Array.from(new Set([...staticRoutes, ...dynamicRoutes]));

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildSitemapXml(routes) {
  const entries = routes
    .map((route) => {
      const priority = route === "/" ? "1.0" : route.includes("/tours/") ? "0.8" : "0.7";
      const changefreq = route === "/" ? "weekly" : "monthly";

      return `  <url>
    <loc>${escapeXml(`${siteUrl}${route}`)}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

await mkdir(publicDir, { recursive: true });
await writeFile(join(publicDir, "sitemap.xml"), buildSitemapXml(uniqueRoutes), "utf8");
await writeFile(join(publicDir, "robots.txt"), buildRobotsTxt(), "utf8");
