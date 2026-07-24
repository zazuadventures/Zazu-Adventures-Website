import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PageHero({
  eyebrow,
  title,
  description,
  image,
  primaryAction,
  secondaryAction,
  align = "center",
  minHeightClassName = "min-h-[78vh]",
}) {
  const textAlignment =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <section
      className={`relative flex ${minHeightClassName} items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/45" />

      <div className={`relative z-20 mx-auto flex w-full max-w-6xl px-6 ${align === "left" ? "" : "justify-center"}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`flex max-w-4xl flex-col gap-4 text-white ${textAlignment}`}
        >
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="text-4xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {(primaryAction || secondaryAction) && (
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              {primaryAction ? (
                <Link
                  to={primaryAction.href}
                  className="inline-flex items-center justify-center rounded-full border border-white bg-white px-8 py-3 text-sm font-semibold text-[#203A4A] transition duration-300 hover:bg-transparent hover:text-white"
                >
                  {primaryAction.label}
                </Link>
              ) : null}

              {secondaryAction ? (
                <Link
                  to={secondaryAction.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/50 bg-transparent px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#203A4A]"
                >
                  {secondaryAction.label}
                </Link>
              ) : null}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default PageHero;
