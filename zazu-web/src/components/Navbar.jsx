import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuItems = [
    { number: "01", title: "Home", path: "/" },
    { number: "02", title: "Tours", path: "/tours" },
    { number: "03", title: "Travel Services", path: "/travel-services" },
    { number: "04", title: "Blog", path: "/travel-guide" },
    { number: "05", title: "About", path: "/about" },
    { number: "06", title: "Contact", path: "/contact" },
  ];

  const desktopLinkClasses = ({ isActive }) =>
    [
      "relative pb-1 text-sm font-medium transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100",
      scrolled
        ? "text-[#333333] after:bg-[#C29B5A]"
        : "text-white after:bg-white",
      isActive ? "after:scale-x-100" : "",
    ]
      .filter(Boolean)
      .join(" ");

  const mobileLinkClasses = ({ isActive }) =>
    [
      "group flex items-center gap-5 border-b border-[#333333]/10 py-6 transition-all duration-300 hover:pl-3",
      isActive ? "pl-3" : "",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <>
      {/* ===================== NAVBAR ===================== */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0"
            aria-label="Zazu Adventures Home"
          >
            <img
              src="https://zazuadventures.com/wp-content/uploads/2026/07/zazulogo.png"
              alt="Zazu Adventures"
              width={180}
              height={70}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-12 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <NavLink to="/" end className={desktopLinkClasses}>
              Home
            </NavLink>

            <NavLink to="/tours" className={desktopLinkClasses}>
              Tours
            </NavLink>

            <NavLink to="/travel-services" className={desktopLinkClasses}>
              Travel Services
            </NavLink>

            <NavLink to="/travel-guide" className={desktopLinkClasses}>
              Blog
            </NavLink>

            <NavLink to="/about" className={desktopLinkClasses}>
              About
            </NavLink>

            <NavLink to="/contact" className={desktopLinkClasses}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className={`lg:hidden rounded-md p-2 transition ${
              scrolled ? "text-[#333333]" : "text-white"
            }`}
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </nav>

      {/* ===================== MOBILE MENU ===================== */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[100] bg-white transition-all duration-500 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-screen flex-col">
          {/* Mobile Header */}
          <div className="border-b border-gray-200 px-6 py-5">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center"
                aria-label="Zazu Adventures Home"
              >
                <img
                  src="https://zazuadventures.com/wp-content/uploads/2026/07/zazulogo.png"
                  alt="Zazu Adventures"
                  width={150}
                  height={55}
                  loading="eager"
                  decoding="async"
                  className="h-10 w-auto object-contain"
                />
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-[#333333]"
              >
                <span className="text-sm font-semibold uppercase">
                  Close
                </span>
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-7xl px-6 py-10">
              {menuItems.map((item) => (
                <NavLink
                  key={item.number}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setIsOpen(false)}
                  className={mobileLinkClasses}
                >
                  <span className="text-xs font-semibold text-[#333333]/50">
                    {item.number}
                  </span>

                  <span className="text-2xl font-semibold text-[#333333] transition-colors duration-300 group-hover:text-[#C29B5A] sm:text-4xl">
                    {item.title}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;