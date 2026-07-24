export function getTripLabel(activity) {
  return (
    activity?.tripLabel ||
    activity?.category ||
    activity?.type ||
    activity?.location ||
    ""
  );
}
