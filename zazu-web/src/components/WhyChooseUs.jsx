import FeatureCard from "./FeatureCard";

const features = [
  { title: "100+", subtitle: "Travelers" },
  { title: "3 Years", subtitle: "of Experience" },
  { title: "150", subtitle: "Tours Completed" },
  { title: "5 Star", subtitle: "Reliable Support" },
];

function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="mx-auto max-w-6xl px-4 text-left">
        <h2 className="text-xl text-[#333333] text-left font-bold">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mt-12 divide-x divide-gray-300 ">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
