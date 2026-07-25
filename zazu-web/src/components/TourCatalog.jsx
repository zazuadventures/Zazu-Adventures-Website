import { useMemo, useState } from "react";
import ActivityCard from "./ActivityCard";

function TourCatalog({ items = [], showSections = false }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterItems = [
    {
      key: "all",
      label: "All Tours",
    },
    {
      key: "day",
      label: "Day Tours",
    },
    {
      key: "multi-day",
      label: "Multi-Day",
    },
    {
      key: "package",
      label: "Packages",
    },
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return items;

    return items.filter((item) => item.type === activeFilter);
  }, [activeFilter, items]);

  const sections = useMemo(() => {
    return [
      {
        key: "day",
        label: "Day Tours",
      },
      {
        key: "multi-day",
        label: "Multi-Day Tours",
      },
      {
        key: "package",
        label: "Packages",
      },
    ].map((section) => ({
      ...section,
      items: items.filter((item) => item.type === section.key),
    }));
  }, [items]);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-20">
      <div className="space-y-10">
        {/* Navigation */}
        <div className="border-b border-[#203A4A]/10">
         <nav className="grid grid-cols-2 gap-8 md:flex md:flex-nowrap ">
            {filterItems.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveFilter(item.key)}
                className={`relative pb-4 text-sm font-medium transition-colors duration-200 ${
                  activeFilter === item.key
                    ? "text-[#203A4A]"
                    : "text-[#666666] hover:text-[#203A4A]"
                }`}
              >
                {item.label}

                {activeFilter === item.key && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#8A6A3D]" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Cards */}
        {showSections && activeFilter === "all" ? (
          <div className="space-y-16">
            {sections.map((section) => (
              <div key={section.key}>
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-[#333333]">
                      {section.label}
                    </h2>

                    <p className="mt-2 text-sm text-[#666666]">
                      {section.items.length} experiences available
                    </p>
                  </div>

                  <span className="rounded-full bg-[#F7F4EE] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8A6A3D]">
                    {section.items.length}
                  </span>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                  {section.items.map((activity) => (
                    <ActivityCard key={activity.slug} activity={activity} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : filteredItems.length ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((activity) => (
              <ActivityCard key={activity.slug} activity={activity} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-[#203A4A]/20 bg-[#FBFAF7] p-12 text-center">
            <h3 className="text-xl font-semibold text-[#111111]">
              No experiences found
            </h3>

            <p className="mt-3 text-[#666666]">
              Try selecting another category to discover more adventures.
            </p>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mt-12 flex flex-col gap-2 text-sm text-[#444444] sm:flex-row sm:items-center sm:justify-between">
        <span>
          Showing <strong>{filteredItems.length}</strong> of{" "}
          <strong>{items.length}</strong> experiences
        </span>

        <span className="hidden sm:block">
          Discover unforgettable adventures across Zimbabwe.
        </span>
      </div>
    </section>
  );
}

export default TourCatalog;
