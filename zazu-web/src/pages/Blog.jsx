import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { blogPosts } from "../data/blogPosts";
import blogHeroImage from "../assets/images/VictoriaFallsGallery1.png";

function Blog() {
  const heading = "Featured Articles";
  const subtitle =
    "Practical travel advice, packing tips, and destination ideas for Victoria Falls and Southern Africa.";

  return (
    <>
      <SEO
        title="Travel Guides & Planning Tips"
        description="Helpful travel guides, packing tips, and planning advice for Victoria Falls, Zimbabwe, and Southern Africa."
        keywords="Victoria Falls travel guide, Zimbabwe safari tips, Zazu Adventures blog"
      />

      <main className="bg-[#F7F4EE]">
        <PageHero
          eyebrow="Travel Guide"
          title="Travel advice, planning tips, and destination ideas"
          description="A simple guide hub for travelers planning Victoria Falls, Botswana, Zambia, and wider Southern Africa adventures."
          image={blogHeroImage}
          align="center"
          minHeightClassName="min-h-[72vh]"
        />

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 max-w-2xl text-left">
            <h2 className="mt-2 text-xl font-semibold text-[#333333]">
              {heading}
            </h2>
            {subtitle && (
              <p className="mt-2 text-gray-600 text-sm leading-relaxed max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="overflow-hidden rounded-[1.5rem] border border-[#203A4A]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#203A4A]">
                    {post.category}
                  </div>
                </div>

                <div className="flex h-full flex-col p-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#203A4A]">
                    {post.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {post.excerpt}
                  </p>

                  <div className="mt-6">
                    <Link
                      to={post.href}
                      className="inline-flex items-center rounded-full border border-[#203A4A] bg-[#203A4A] px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-transparent hover:text-[#203A4A]"
                    >
                      Start Planning
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[#203A4A]/10 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C29B5A]">
                Need Help Planning?
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#203A4A] sm:text-4xl">
                Let us build the trip around the advice
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                If you want tailored advice, the fastest way to get a useful
                answer is to tell us your travel dates, group size, and the
                places you want to cover.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[#203A4A] p-8 text-white shadow-lg">
              <h3 className="text-2xl font-semibold">Best next steps</h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-white/85">
                <li>- Ask for a custom itinerary</li>
                <li>- Compare day tours and multi-day packages</li>
                <li>- Get help with cross-border planning</li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#203A4A] transition duration-300 hover:bg-[#F3EEE6]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Blog;
