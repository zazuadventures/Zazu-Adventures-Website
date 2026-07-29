import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import TourCatalog from "../components/TourCatalog";
import { allTours } from "../data/tourData";

function Tours() {
  return (
    <>
      <SEO
        title="Zimbabwe Tours & Safari Packages"
        description="Browse day trips, multi-day tours, and curated safari packages from Victoria Falls and beyond."
        keywords="Zazu Adventures, tours, day trips, multi-day tours, packages"
      />

      <main className="w-full">
        <PageHero
          eyebrow="Tours"
         title="Victoria Falls Safari Tours, Day Trips & Packages"
          description="Browse the full collection, then filter by day trips, multi-day adventures, or bundled packages."
          image="https://images.ctfassets.net/ht2d038ql6u5/7MWmzdSdFQVelsHSmoKx3m/27a8c83a868769d96453ddef7e8a1c80/TourHero2.jpg"
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
