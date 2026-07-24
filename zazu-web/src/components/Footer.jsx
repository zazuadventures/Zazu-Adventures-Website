import { Link } from "react-router-dom";

function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Experiences", path: "/experiences" },
    { name: "Tours", path: "/tours" },
    { name: "Travel Guide", path: "/travel-guide" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#203A4A] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold">
            Zazu Adventures
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-300">
            Creating unforgettable safari, tour and travel experiences
            in Victoria Falls and beyond.
          </p>
        </div>


        {/* Navigation */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
            Explore
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="transition hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
            Contact
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              Victoria Falls, Zimbabwe
            </li>

            <li>
              +263 77 123 4567
            </li>

            <li>
              info@zazuadventures.com
            </li>
          </ul>
        </div>


        {/* Newsletter / CTA */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
            Plan Your Trip
          </h3>

          <p className="text-sm text-gray-300">
            Ready for your next adventure?
          </p>

          <Link
            to="/contact"
            className="
              mt-5 inline-flex rounded-full
              bg-white px-5 py-3
              text-sm font-semibold
              text-[#203A4A]
              transition
              hover:bg-gray-200
            "
          >
            Book Now
          </Link>
        </div>

      </div>


      {/* Bottom */}
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/20 pt-6 text-center text-xs text-gray-300">
        <p>
          ©2026 Zazu Adventures. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;