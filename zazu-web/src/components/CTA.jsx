import { Link } from "react-router-dom";

const CTA = ({
  eyebrow = "Book Now",
  title = "Build your Victoria Falls itinerary today",
  description = "From scenic flights to sunset cruises and safari add-ons, we can turn this destination into a full experience.",
  buttonText = "Enquire Now",
  buttonLink = "/contact",
}) => {
  return (
    <section className="mt-16 border px-8 py-10 text-white shadow-[0_30px_80px_rgba(32,58,74,0.18)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 bg-[#203A4A] rounded-[2rem] p-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
              {eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              {title}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
              {description}
            </p>
          </div>

          <Link
            to={buttonLink}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#203A4A] transition hover:bg-[#F7F4EE]"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;