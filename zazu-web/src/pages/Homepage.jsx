import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ActivitySection from "../components/ActivitySection";
import CTA from "../components/CTA";
import { homepageActivities } from "../data/tourData";

function Homepage() {
  return (
    <>
      <SEO
        title="Home"
        description="Zazu Adventures home page featuring Victoria Falls."
        keywords="Zazu Adventures, home, Victoria Falls, Mosi Oa Tunya"
      />

      <Hero />
      <ActivitySection
        items={homepageActivities}
        sectionClassName="py-10 pb-20"
        heading="Zazu Adventures"
        subtitle="Creating memories that last a lifetime.
"
      />
      <CTA />
    </>
  );
}

export default Homepage;
