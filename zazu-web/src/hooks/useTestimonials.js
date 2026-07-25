import { useEffect, useState } from "react";
import { getTestimonials } from "../lib/testimonials";

function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    const loadTestimonials = async () => {
      try {
        setLoading(true);
        setError("");

        const items = await getTestimonials();

        if (!isActive) {
          return;
        }

        setTestimonials(items);
      } catch (err) {
        if (!isActive) {
          return;
        }

        setError(err instanceof Error ? err.message : "Failed to load testimonials");
        setTestimonials([]);
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    loadTestimonials();

    return () => {
      isActive = false;
    };
  }, []);

  return { testimonials, loading, error };
}

export default useTestimonials;
