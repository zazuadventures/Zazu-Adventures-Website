import { images } from "./images";

export function getProductCoverImage(activity) {
  return (
    activity?.coverImage ||
    activity?.image ||
    activity?.media?.cover ||
    activity?.media?.image ||
    images.vicFalls ||
    "https://placehold.co/800x600?text=Zazu+Adventures"
  );
}
