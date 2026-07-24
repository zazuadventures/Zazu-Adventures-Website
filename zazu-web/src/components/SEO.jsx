import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description = "Zazu Adventures - simple travel experiences, tours, and trip planning.",
  keywords,
  canonical,
}) => {
  const fullTitle = title ? `${title} | Zazu Adventures` : "Zazu Adventures";

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index,follow"
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
        property="og:type"
        content="website"
      />

      {canonical ? (
        <link
          rel="canonical"
          href={canonical}
        />
      ) : null}
    </Helmet>
  );
};

export default SEO;
