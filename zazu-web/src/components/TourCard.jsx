import React from "react";
import { Link } from "react-router-dom";
import { Clock3, MapPin } from "lucide-react";

const tours = [
  {
    slug: "victoria-falls-day-trip",
    title: "Victoria Falls Day Tour",
    image:
      "https://zazuadventures.com/wp-content/uploads/2026/07/victoria-falls.jpg",
    price: 120,
    duration: "1 Day",
    location: "Victoria Falls",
    category: "Day Tour",
  },
  {
    slug: "hwange-safari",
    title: "Hwange National Park Safari",
    image: "https://zazuadventures.com/wp-content/uploads/2026/07/hwange.jpeg",
    price: 420,
    duration: "3 Days",
    location: "Hwange",
    category: "Safari",
  },
  {
    slug: "okavango-expedition",
    title: "Okavango Delta Expedition",
    image:
      "https://zazuadventures.com/wp-content/uploads/2026/07/okavango-scaled.jpg",
    price: 1350,
    duration: "6 Days",
    location: "Botswana",
    category: "Package",
  },
];

const TourCard = ({ tour }) => {
  const {
    slug = "",
    title = "Tour Name",
    image = "https://placehold.co/800x600?text=Zazu+Adventures",
    price,
    duration,
    location,
    category,
  } = tour || {};

  return (
    <Link
      to={`/tours/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Price Badge */}
      {price && (
        <div className="absolute left-0 top-5 z-20">
          <div className="relative bg-[#223441] px-5 py-2 text-white shadow-lg">
            <span className="text-lg font-semibold">From ${price}</span>

            {/* Ribbon */}
            <div className="absolute bottom-[-8px] left-0 h-0 w-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-[#223441]" />
          </div>
        </div>
      )}

      {/* Image */}
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {category && (
          <span className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B68D40]">
            {category}
          </span>
        )}

        <h3 className="text-lg font-bold text-[#223441] line-clamp-2">
          {title}
        </h3>

        {location && (
          <div className="mt-2 mb-4 flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={16} className="text-[#B68D40]" />
            <span>{location}</span>
          </div>
        )}

        <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="flex items-center gap-5">
            {duration && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock3 size={16} />
                <span>{duration}</span>
              </div>
            )}
          </div>

          <span className="text-sm font-semibold text-[#B68D40] transition group-hover:translate-x-1">
            View Tour →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
