import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import { destinations, getDestinationPath } from "../lib/destinationData";

function Destinations() {
  return (
    <>
      <SEO
        title="Zimbabwe Destinations"
        description="Browse the Zimbabwe and Southern Africa destinations that shape each Zazu Adventures itinerary."
        keywords="Zazu Adventures, destinations, Victoria Falls, Hwange, Chobe, Okavango"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Destinations" },
        ]}
      />

      <main className="w-full">
        <PageHero
          eyebrow="Destinations"
          title="Choose the place, then build the trip around it"
          description="Each destination is structured as a relationship hub for the tours that actually belong there, so the page stays useful for browsing and booking."
          image="https://zazuadventures.com/wp-content/uploads/2026/07/VictoriaFallsGallery1.png"
          minHeightClassName="min-h-[72vh]"
        />

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Destinations" },
          ]}
        />

        <section className="mx-auto w-full max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A6A3D]">
              Browse Destinations
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111]">
              Every destination can lead to a different kind of journey
            </h2>
            <p className="mt-4 text-base leading-8 text-[#444444]">
              We keep the structure simple: destination records describe the
              place, and the linked tours are pulled from the tour data itself.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.id}
                className="group overflow-hidden rounded-[2rem] border border-[#203A4A]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Link to={getDestinationPath(destination.id)} className="block">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={destination.heroImage || destination.image}
                      alt={destination.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#203A4A] backdrop-blur">
                      <MapPin className="mr-2 inline h-4 w-4 text-[#8A6A3D]" />
                      {destination.region}
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {(destination.highlights || []).slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-[#203A4A]/10 bg-[#FBFAF7] px-3 py-2 text-xs font-medium text-[#203A4A]"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-[#8A6A3D]" />
                        {item}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#111111]">
                    {destination.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#444444]">
                    {destination.summary}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#203A4A]/10 pt-5">
                    <span className="text-sm font-semibold text-[#8A6A3D]">
                      View destination
                    </span>

                    <ArrowRight className="h-4 w-4 text-[#8A6A3D] transition group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Destinations;
