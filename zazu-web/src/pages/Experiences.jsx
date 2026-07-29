import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import TourCatalog from "../components/TourCatalog";
import { allTours } from "../data/tourData";

function Experiences() {
  return (
    <>
      <SEO
        title="Safari Experiences & Day Trips"
        description="Browse all Zazu Adventures safari experiences, day trips, and curated adventure packages in one place."
        keywords="Zazu Adventures, experiences, tours, safari, Victoria Falls"
      />

      <main className="w-full">
        <PageHero
          eyebrow="Experiences"
          title="Discover Zimbabwe one adventure at a time"
          description="From thrilling adventures and wildlife encounters to sunset cruises and cultural journeys, find the perfect experience for your next trip."
          image="https://zazuadventures.com/wp-content/uploads/2026/07/ChobeGallery5.png"
          minHeightClassName="min-h-[72vh]"
        />

        <TourCatalog
          items={allTours}
          showSections
          sectionTitle="Experience Filters"
          intro="Filter by day trips, multi-day adventures, or packaged combinations."
        />
      </main>
    </>
  );
}

export default Experiences;
