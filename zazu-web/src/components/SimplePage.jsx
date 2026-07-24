import SEO from "./SEO";
import PageHero from "./PageHero";

function SimplePage({ title, heading, description, keywords, image, eyebrow }) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
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
      </main>
    </>
  );
}

export default SimplePage;
