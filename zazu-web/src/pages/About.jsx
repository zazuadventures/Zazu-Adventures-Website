import SimplePage from "../components/SimplePage";
import TestimonialsSection from "../components/TestimonialsSection";
import useTestimonials from "../hooks/useTestimonials";

function About() {
  const { testimonials, loading, error } = useTestimonials();

  return (
    <>
      <SimplePage
        title="About Zazu Adventures"
        heading="About"
        description="Meet Zazu Adventures and learn how we plan tailored Zimbabwe safari experiences, tours, and cross-border adventures."
        keywords="Zazu Adventures, about"
        image="https://images.ctfassets.net/ht2d038ql6u5/2YtkiP0TBLd3j0kccVhk80/2d8b481aed35b809a6ee1aa93170ff17/ToursHero.png"
        eyebrow="About Us"
      />

      <TestimonialsSection
        items={testimonials}
        loading={loading}
        error={error}
        heading="Testimonials"
        subtitle="More traveler feedback from recent trips."
        sectionClassName="py-10 md:py-14"
        maxCards={100}
        loadingCards={3}
      />
    </>
  );
}

export default About;
