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
        image="https://zazuadventures.com/wp-content/uploads/2026/07/VictoriaFallsGallery2.png"
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
