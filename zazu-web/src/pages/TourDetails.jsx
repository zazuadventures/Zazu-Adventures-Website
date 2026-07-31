import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import { getTourBySlug } from "../data/tourData";

function TourDetails() {
  const { slug } = useParams();
  const tour = getTourBySlug(slug);
  const showItinerary = tour?.type === "multi-day" || tour?.type === "package";

  const [activeSection, setActiveSection] = useState("overview");
  const [openFaq, setOpenFaq] = useState(null);

  const navItems = [
    { key: "overview", label: "Overview" },
    { key: "highlights", label: "Highlights" },
    { key: "includes", label: "Includes" },
    ...(showItinerary ? [{ key: "itinerary", label: "Itinerary" }] : []),
    { key: "gallery", label: "Gallery" },
    { key: "faq", label: "FAQ" },
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

  if (!tour) {
    return (
      <>
        <SEO
          title="Tour not found"
          description="The requested tour page could not be found."
          robots="noindex,nofollow"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Tours", href: "/tours" },
            { label: "Tour not found" },
          ]}
        />

        <main className="mx-auto w-full max-w-3xl px-6 pt-28 pb-16 sm:pt-32">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#203A4A]/65">
            Tour not found
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#111111]">
            That tour page does not exist yet.
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#444444]">
            Try browsing the tours page to pick a trip, or head back to the
            homepage to start from the featured cards.
          </p>

          <Link
            to="/tours"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#203A4A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#162733]"
          >
            Back to tours
          </Link>
        </main>
      </>
    );
  }

  const gallery = tour.gallery?.length
    ? tour.gallery
    : Array.from({ length: 8 }, () => tour.image);

  const formatItineraryItem = (item) => {
    const separatorIndex = item.indexOf(":");

    if (separatorIndex === -1) {
      return {
        label: "Itinerary",
        description: item,
      };
    }

    return {
      label: item.slice(0, separatorIndex).trim(),
      description: item.slice(separatorIndex + 1).trim(),
    };
  };

  const faqs = tour.faqs || [
    {
      question: `What is included in ${tour.title}?`,
      answer:
        tour.includes?.length > 0
          ? `This tour includes ${tour.includes.join(
              ", ",
            )}. We can also help with add-ons and transfers depending on your travel plans.`
          : "We can confirm the inclusions for this tour and tailor the experience around your needs.",
    },
    {
      question: "Can this tour be customized?",
      answer:
        "Yes. We can adjust the timing, transfers, and linked activities so the tour fits your itinerary and travel style.",
    },
    {
      question: "How do I book?",
      answer:
        "Use the enquiry button below and we'll confirm availability, pricing, and the best next steps for your trip.",
    },
  ];

  return (
    <>
      <SEO
        title={tour.title}
        description={tour.summary}
        keywords={`Zazu Adventures, ${tour.title}, ${tour.location}`}
        image={tour.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tours", href: "/tours" },
          { label: tour.title },
        ]}
      />

      <main className="w-full">
        <PageHero
          eyebrow={tour.category}
          title={tour.title}
          description={tour.summary}
          image={tour.image}
          minHeightClassName="min-h-[72vh]"
        />

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Tours", href: "/tours" },
            { label: tour.title },
          ]}
        />

        <section className="mx-auto w-full max-w-6xl px-6 pt-16">
          <nav className="grid grid-cols-2 gap-8 md:flex md:flex-nowrap">
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

        <section className="mx-auto w-full max-w-6xl px-6 pt-12">
          <div className="space-y-16">
            <section id="overview" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold text-[#111111]">
                Overview
              </h2>
              <p className="mt-6 leading-8 text-[#444444]">
                {tour.description || tour.summary}
              </p>
            </section>

            <section id="highlights" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold text-[#111111]">
                Highlights
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-1">
                {tour.highlights?.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <p className="text-[#444444]">{highlight}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="includes" className="scroll-mt-32">
              <h2 className="text-2xl font-semibold text-[#111111]">
                Includes
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-1">
                {tour.includes?.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <p className="text-[#444444]">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {showItinerary && tour.itinerary?.length ? (
              <section id="itinerary" className="scroll-mt-32">
                <h2 className="text-2xl font-semibold text-[#111111]">
                  Itinerary
                </h2>

                <div className="mt-8 space-y-4">
                  {tour.itinerary.map((item, index) => {
                    const itineraryItem = formatItineraryItem(item);

                    return (
                      <div
                        key={index}
                        className="rounded-3xl border border-[#203A4A]/10 bg-white p-6 shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <div>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#203A4A]">
                              {itineraryItem.label}
                            </h3>
                            <p className="mt-2 leading-7 text-[#444444]">
                              {itineraryItem.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ) : null}
          </div>
        </section>

        <section
          id="gallery"
          className="scroll-mt-32 mx-auto w-full max-w-6xl px-6 pt-16"
        >
          <h2 className="text-2xl font-semibold text-[#111111]">Gallery</h2>

          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3">
            {gallery.map((image, index) => (
              <figure
                key={index}
                className="overflow-hidden rounded-3xl aspect-[4/3]"
              >
                <img
                  src={image}
                  alt={`${tour.title} ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="scroll-mt-32 mx-auto w-full max-w-6xl px-6 py-16"
        >
          <h2 className="text-2xl font-semibold text-[#111111]">FAQ</h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-3xl border border-gray-100 bg-gray-50"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle size={20} className="mt-1 text-[#8A6A3D]" />
                      <h3 className="font-semibold text-[#111111]">
                        {faq.question}
                      </h3>
                    </div>

                    <span
                      className={`text-2xl transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pl-14 leading-7 text-[#444444]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Link
          to="/contact"
          className="fixed bottom-6 left-1/2 z-40 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#203A4A] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(32,58,74,0.28)] transition hover:bg-[#162733] sm:bottom-8"
        >
          Reach Out
          <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
    </>
  );
}

export default TourDetails;
