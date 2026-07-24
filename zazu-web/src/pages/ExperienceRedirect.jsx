import { Navigate, useParams } from "react-router-dom";
import { getDestinationById } from "../lib/destinationData";
import { getTourBySlug } from "../data/tourData";

function ExperienceRedirect() {
  const { slug } = useParams();
  const destination = getDestinationById(slug);
  const tour = getTourBySlug(slug);

  if (destination) {
    return <Navigate to={`/destinations/${destination.id}`} replace />;
  }

  if (tour) {
    return <Navigate to={`/tours/${tour.slug}`} replace />;
  }

  return <Navigate to="/experiences" replace />;
}

export default ExperienceRedirect;
