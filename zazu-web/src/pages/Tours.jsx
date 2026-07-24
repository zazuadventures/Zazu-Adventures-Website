import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import TourCatalog from "../components/TourCatalog";
import { allTours } from "../data/tourData";

function Tours() {
  return (
    <>
      <SEO
        title="Tours"
        description="Browse day trips, multi-day tours, and curated packages with filters."
        keywords="Zazu Adventures, tours, day trips, multi-day tours, packages"
      />

      <main className="w-full">
        <PageHero
          eyebrow="Tours"
          title="Find the right trip for the time you have"
          description="Browse the full collection, then filter by day trips, multi-day adventures, or bundled packages."
          image="https://zazuadventures.com/wp-content/uploads/2026/07/VictoriaFallsGallery1.png"
          minHeightClassName="min-h-[72vh]"
        />

        <TourCatalog
          items={allTours}
          showSections
          sectionTitle="Tour Filters"
          intro="The data is split into clean categories so it is easy to present each trip type as cards, sections, or filtered views anywhere in the site."
        />
      </main>
    </>
  );
}

export default Tours;
