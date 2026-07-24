import { Link } from "react-router-dom";
import { Clock3, MapPin } from "lucide-react";
import { getTripLabel } from "../lib/tripLabel";
import { getProductCoverImage } from "../lib/productMedia";
import { getTourPath } from "../data/tourData";

function ActivityCard({ activity }) {
  const price = activity?.priceFrom ?? activity?.price ?? null;
  const tripLabel = getTripLabel(activity);
  const showDuration = Boolean(activity?.duration);
  const slug = activity?.slug ?? activity?.id ?? "";
  const tourPath = getTourPath(slug);

  return (
    <article className="group relative z-10 flex flex-col overflow-visible rounded-sm bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="relative">
        {price != null && (
          <div className="absolute -left-2 top-6 z-20 rounded-br-sm rounded-t-sm bg-[#223441] px-4 py-1 shadow-lg">
            <span className="text-lg font-semibold text-white">${price}</span>
            <div className="absolute -bottom-2 left-0 h-0 w-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-[#223441]" />
          </div>
        )}

        <Link
          to={tourPath}
          className="block overflow-hidden rounded-t-sm"
        >
          <div className="h-60 w-full overflow-hidden rounded-t-sm">
            <img
              src={getProductCoverImage(activity)}
              alt={activity?.title ?? "Activity"}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        </Link>
      </div>

      <div className="flex flex-1 flex-col px-4 py-4">
        <Link to={tourPath} className="block">
          <h3 className="mb-2 line-clamp-2 text-md font-bold text-[#223441]">
            {activity?.title ?? "Activity"}
          </h3>
        </Link>
        {tripLabel && (
          <span className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            {tripLabel}
          </span>
        )}
        
        {showDuration ? (
          <div className="mt-auto border-t border-gray-300 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock3 size={16} />
                <span className="text-xs">{activity.duration}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-auto" />
        )}
      </div>
    </article>
  );
}

export default ActivityCard;
