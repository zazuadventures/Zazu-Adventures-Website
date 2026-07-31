import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { getHeroSlides } from "../services/heroSlides";

const FALLBACK_SLIDES = [
  {
    image:
      "https://images.ctfassets.net/ht2d038ql6u5/3r26FxsCBjhDY4C5Z9HOAM/f6a3d6d3d3adffc46ecb14864bf7ff93/VictoriaFallsHero.png",
    eyebrow: "The Smoke That Thunders",
    title: "Victoria Falls",
    description:
      "Witness one of the Seven Natural Wonders of the World through unforgettable tours, luxury stays, scenic flights, and authentic local experiences.",
    primaryAction: {
      label: "Explore Victoria Falls",
      href: "/destinations/victoria-falls",
    },
  },
  {
    image:
      "https://images.ctfassets.net/ht2d038ql6u5/eMdcuJW5MemcDYgugNzlg/93a1ed95234623df93f038eac9318b0f/HwangeHero.png",
    eyebrow: "Zimbabwe's Premier Safari Destination",
    title: "Hwange National Park",
    description:
      "Discover Zimbabwe's largest national park, home to vast elephant herds, iconic wildlife, and unforgettable guided safari experiences.",
    primaryAction: {
      label: "Explore Hwange",
      href: "/destinations/hwange-national-park",
    },
  },
  {
    image: "https://images.ctfassets.net/ht2d038ql6u5/6eE5F2BkGAbhfVzq1qUsOI/389884b398f2eaae08d5a6ffe735718c/ChobeHero.png",
    eyebrow: "Land of Giants",
    title: "Chobe National Park",
    description:
      "Experience Botswana's famous river safaris and encounter one of Africa's largest elephant populations along the Chobe River.",
    primaryAction: {
      label: "Explore Chobe",
      href: "/destinations/chobe-national-park",
    },
  },
  {
    image:
      "https://images.ctfassets.net/ht2d038ql6u5/1tAxUYLuP0SZ3Lqv8fWFpl/a03a5a40eb3104cce9af968d749822f5/OkavangoHero.png",
    eyebrow: "Africa's Untamed Oasis",
    title: "Okavango Delta",
    description:
      "Journey through the world's largest inland delta with luxury lodges, mokoro canoe safaris, and exceptional wildlife encounters.",
    primaryAction: {
      label: "Explore Okavango Delta",
      href: "/destinations/okavango-delta",
    },
  },
  {
    image:
      "https://images.ctfassets.net/ht2d038ql6u5/53vS6zl07B4Z68L4UVnAjU/1ba8a548c7becc4fac098ad8371ee3f5/SossusvleiHero.png",
    eyebrow: "The Iconic Red Dunes",
    title: "Sossusvlei Desert",
    description:
      "Explore Namibia's breathtaking desert landscapes, towering red dunes, ancient deadvlei, and spectacular sunrise adventures.",
    primaryAction: {
      label: "Explore Sossusvlei",
      href: "/destinations/sossusvlei",
    },
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState(FALLBACK_SLIDES);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    let isMounted = true;

    async function loadHeroSlides() {
      try {
        const contentfulSlides = await getHeroSlides();

        if (isMounted && contentfulSlides.length > 0) {
          setSlides(contentfulSlides);
          setCurrent(0);
          return;
        }
      } catch (error) {
        console.warn("Unable to load Contentful hero slides:", error);
      }

      if (isMounted) {
        setSlides(FALLBACK_SLIDES);
        setCurrent(0);
      }
    }

    loadHeroSlides();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!slides.length) {
      return undefined;
    }

    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides]);

  const scrollToContent = () => {
    const destinationsSection = document.getElementById("destinations");

    if (destinationsSection) {
      destinationsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.img
            key={`${slide.title}-${slide.image}`}
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={false}
            animate={{
              opacity: current === index ? 1 : 0,
              scale: current === index ? 1 : 1.05,
            }}
            transition={{
              opacity: {
                duration: 1.4,
                ease: "easeInOut",
              },
              scale: {
                duration: 6,
                ease: "linear",
              },
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-6xl justify-center px-6">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-center text-white"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
            {slides[current]?.eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {slides[current]?.title}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/90 lg:text-lg">
            {slides[current]?.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to={slides[current]?.primaryAction?.href || "/tours"}
              className="rounded-full border border-white bg-transparent px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#203A4A]"
            >
              {slides[current]?.primaryAction?.label || "Explore"}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <button
            type="button"
            onClick={scrollToContent}
            aria-label="Scroll down"
            className="group flex flex-col items-center gap-3"
          >
            <div className="flex h-12 w-8 justify-center rounded-full border-2 border-white/40">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                className="mt-2 h-2 w-2 rounded-full bg-white"
              />
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition group-hover:text-white">
              Scroll
            </span>
          </button>

          {/* Previous / Next */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center   text-white  transition hover:bg-white/80 rounded-full hover:text-black"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center   text-white  transition hover:bg-white/80 rounded-full  hover:text-black"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
