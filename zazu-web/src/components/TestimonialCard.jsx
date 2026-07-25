function TestimonialCard({ testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-[1.25rem] border border-[#203A4A]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center gap-4 border-b border-[#203A4A]/10 pb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          loading="lazy"
          className="h-14 w-14 rounded-full object-cover ring-2 ring-[#F3EEE6]"
        />

        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-[#223441]">
            {testimonial.name}
          </h3>
          <p className="mt-1 text-xs tracking-[0.18em] text-gray-500">
            {testimonial.date}
          </p>
        </div>
      </div>

      <div className="mt-4 flex-1">
        <div className="max-h-[6.5rem] overflow-y-auto pr-2 text-sm leading-7 text-gray-600">
          {testimonial.text}
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;
