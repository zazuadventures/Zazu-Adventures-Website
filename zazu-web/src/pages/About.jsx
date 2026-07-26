import SimplePage from "../components/SimplePage";
import TestimonialsSection from "../components/TestimonialsSection";
import useTestimonials from "../hooks/useTestimonials";

function About() {
  const { testimonials, loading, error } = useTestimonials();

  return (
    <>
      <SimplePage
        title="About"
        heading="About"
        description="Zazu Adventures about page with a basic SEO foundation."
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
