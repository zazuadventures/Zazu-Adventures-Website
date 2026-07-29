import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({
  title,
  description = "Zazu Adventures - simple travel experiences, tours, and trip planning.",
  keywords,
  canonical,
  robots = "index,follow",
  image = "https://www.zazuadventures.com/og-image.jpg",
  type = "website",
  breadcrumbs,
  structuredData,
}) => {
  const fullTitle = title ? `${title} | Zazu Adventures` : "Zazu Adventures";
  const location = useLocation();
  const defaultCanonical = `https://www.zazuadventures.com${location.pathname}`;
  const resolvedCanonical = canonical || defaultCanonical;
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zazu Adventures",
    url: "https://www.zazuadventures.com",
  };

  const breadcrumbSchema = breadcrumbs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: item.href ? `https://www.zazuadventures.com${item.href}` : resolvedCanonical,
        })),
      }
    : null;

  const extraSchemas = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content={robots}
      />

      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      <meta
        property="og:title"
        content={fullTitle}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={image}
      />
      <meta
        property="og:type"
        content={type}
      />
      <meta
        property="og:url"
        content={resolvedCanonical}
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={fullTitle}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={image}
      />

      <link
        rel="canonical"
        href={resolvedCanonical}
      />

      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>

      {breadcrumbSchema ? (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      ) : null}

      {extraSchemas.map((schema, index) => (
        <script
          key={`${schema["@type"] ?? "schema"}-${index}`}
          type="application/ld+json"
        >
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
