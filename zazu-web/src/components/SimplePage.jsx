import SEO from "./SEO";
import PageHero from "./PageHero";
import Breadcrumbs from "./Breadcrumbs";

function SimplePage({
  title,
  heading,
  description,
  keywords,
  image,
  eyebrow,
  breadcrumbs,
}) {
  const resolvedBreadcrumbs =
    breadcrumbs || [
      { label: "Home", href: "/" },
      { label: heading || title },
    ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        breadcrumbs={resolvedBreadcrumbs}
      />

      <main className="w-full">
        <PageHero
          eyebrow={eyebrow || title}
          title={heading}
          description={description}
          image={
            image ||
            "https://zazuadventures.com/wp-content/uploads/2026/07/VictoriaFallsGallery1.png"
          }
          align="center"
          minHeightClassName="min-h-[72vh]"
        />

        <Breadcrumbs items={resolvedBreadcrumbs} />
      </main>
    </>
  );
}

export default SimplePage;
