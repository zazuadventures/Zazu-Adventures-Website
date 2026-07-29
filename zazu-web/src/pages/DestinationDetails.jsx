import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import ActivityCard from "../components/ActivityCard";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import { getDestinationById } from "../lib/destinationData";
import { getToursByDestination } from "../data/tourData";

function DestinationDetails() {
  const { id } = useParams();
  const destination = getDestinationById(id);
  const relatedTours = getToursByDestination(id);

  const [activeSection, setActiveSection] = useState("overview");

  const navItems = [
    { key: "overview", label: "Overview" },
    { key: "things-to-do", label: "Things To Do" },
  ];

  const handleScroll = (sectionId) => {
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (!destination) {
    return (
      <>
        <SEO
          title="Destination not found"
          description="The requested destination page could not be found."
          robots="noindex,nofollow"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Destinations", href: "/destinations" },
            { label: "Destination not found" },
          ]}
        />

        <main className="mx-auto w-full max-w-3xl px-6 pt-28 pb-16 sm:pt-32">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#203A4A]/65">
            Destination not found
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#111111]">
            That destination page does not exist yet.
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#444444]">
            Try another destination or browse all available destinations.
          </p>

          <Link
            to="/destinations"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#203A4A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#162733]"
          >
            Back to destinations
          </Link>
        </main>
      </>
    );
  }

  const coverImage = destination.heroImage || destination.image;

  return (
    <>
      <SEO
        title={destination.title}
        description={destination.summary}
        keywords={`Zazu Adventures, ${destination.title}, ${destination.region}`}
        image={coverImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: destination.title },
        ]}
      />

      <main className="w-full">
        <PageHero
          eyebrow={destination.region}
          title={destination.title}
          description={destination.summary}
          image={coverImage}
          minHeightClassName="min-h-[72vh]"
        />

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Destinations", href: "/destinations" },
            { label: destination.title },
          ]}
        />

        {/* Section Navigation */}
        <section className="mx-auto w-full max-w-6xl px-6 pt-16">
          <nav className="flex gap-10">
            {navItems.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => handleScroll(item.key)}
                className={`relative pb-4 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.key
                    ? "text-[#203A4A]"
                    : "text-[#666666] hover:text-[#203A4A]"
                }`}
              >
                {item.label}

                {activeSection === item.key && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#8A6A3D]" />
                )}
              </button>
            ))}
          </nav>
        </section>

        {/* Overview */}
        <section
          id="overview"
          className="scroll-mt-32 mx-auto w-full max-w-6xl px-6 pt-12"
        >
          <h2 className="text-2xl font-semibold text-[#111111]">Overview</h2>

          <p className="mt-5 text-base leading-8 text-[#444444]">
            {destination.about || destination.overview || destination.summary}
          </p>
        </section>

        {/* Things To Do */}
        <section
          id="things-to-do"
          className="scroll-mt-32 mx-auto mt-16 w-full max-w-6xl px-6 pb-20"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#8A6A3D]">
              Things To Do
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#111111]">
              Explore activities in {destination.title}
            </h2>
          </div>

          {relatedTours.length ? (
            <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {relatedTours.map((tour) => (
                <ActivityCard key={tour.slug} activity={tour} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-[2rem] border border-dashed border-[#203A4A]/20 bg-[#FBFAF7] p-10 text-center">
              <h3 className="text-xl font-semibold text-[#111111]">
                Activities coming soon
              </h3>

              <p className="mt-3 text-[#666666]">
                We are preparing exciting experiences for this destination.
              </p>

              <Link
                to="/tours"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#203A4A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#162733]"
              >
                Browse all tours
              </Link>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default DestinationDetails;
