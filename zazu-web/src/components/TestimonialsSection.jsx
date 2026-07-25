import { Link } from "react-router-dom";
import TestimonialCard from "./TestimonialCard";

function TestimonialsSection({
  id = "testimonials",
  heading = "Testimonials",
  subtitle = "What travelers are saying about Zazu Adventures.",
  items = [],
  loading = false,
  error = "",
  sectionClassName = "py-8 md:py-10",
  containerClassName = "max-w-6xl mx-auto px-6",
  maxCards = 3,
  loadingCards = 3,
  showMoreHref = "",
}) {
  const visibleItems = items.slice(0, maxCards);
  const skeletonCards = Array.from({ length: loadingCards }, (_, index) => index);

  return (
    <section className={sectionClassName} id={id}>
      <div className={containerClassName}>
        <div className="mb-8 max-w-2xl text-left">
          <h2 className="mt-2 text-xl font-semibold text-[#333333]">
            {heading}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        {error ? (
          <div className="rounded-2xl border border-[#203A4A]/10 bg-white px-5 py-6 text-sm text-gray-600">
            {error}
          </div>
        ) : loading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skeletonCards.map((card) => (
              <div
                key={card}
                className="h-[220px] animate-pulse rounded-[1.25rem] border border-[#203A4A]/10 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-4 border-b border-[#203A4A]/10 pb-4">
                  <div className="h-14 w-14 rounded-full bg-gray-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-1/2 rounded bg-gray-200" />
                    <div className="h-3 w-2/5 rounded bg-gray-200" />
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-3 w-full rounded bg-gray-200" />
                  <div className="h-3 w-11/12 rounded bg-gray-200" />
                  <div className="h-3 w-4/5 rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        ) : visibleItems.length ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleItems.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-[#203A4A]/10 bg-white px-5 py-6 text-sm text-gray-600">
            No testimonials available right now.
          </div>
        )}
      </div>
    </section>
  );
}

export default TestimonialsSection;
