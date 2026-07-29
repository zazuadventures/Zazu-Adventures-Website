import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ActivitySection from "../components/ActivitySection";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialsSection from "../components/TestimonialsSection";
import useTestimonials from "../hooks/useTestimonials";
import { dayTours, multiDayTours, packages } from "../data/tourData";

function Homepage() {
  const { testimonials, loading, error } = useTestimonials();

  return (
    <>
      <SEO
        title="Zimbabwe Tours, Safari Packages & Travel Experiences"
        description="Plan Victoria Falls safaris, day trips, and custom Zimbabwe adventures with Zazu Adventures."
        keywords="Zazu Adventures, home, Victoria Falls, Mosi Oa Tunya"
        image="https://www.zazuadventures.com/og-image.jpg"
      />

      <Hero />
      <ActivitySection
        items={dayTours.slice(0, 4)}
        sectionClassName="py-8 md:py-10"
        heading="Top Selling"
        subtitle="Our most booked experiences, picked for quick and memorable adventures."
        id="top-selling"
      />
      <ActivitySection
        items={packages.slice(0, 4)}
        sectionClassName="py-8 md:py-10"
        heading="Popular Packages"
        subtitle="Ready-made combinations that bundle the best highlights into one trip."
        id="popular-packages"
      />
      <ActivitySection
        items={multiDayTours.slice(0, 4)}
        sectionClassName="py-8 md:py-10"
        heading="Multiday Packages"
        subtitle="Longer escapes for travelers who want more time, more sights, and more safari."
        id="multi-day-packages"
      />
      <TestimonialsSection
        items={testimonials}
        loading={loading}
        error={error}
        heading="Testimonials"
        subtitle="What travelers are saying about Zazu Adventures."
        showMoreHref="/about"
      />
    </>
  );
}

export default Homepage;
