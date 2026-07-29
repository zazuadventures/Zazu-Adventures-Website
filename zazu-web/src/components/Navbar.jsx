import React, { useEffect, useState } from "react";
import { getSiteSettings } from "../services/siteSettings";
import { DEFAULT_LOGO_URL } from "../lib/branding";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { dayTours, getTourPath } from "../data/tourData";

const FALLBACK_MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Travel Services", href: "/travel-services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function normalizeNavigationItem(item) {
  const fields = item?.fields ?? item ?? {};

  return {
    label: fields.label ?? fields.title ?? "",
    href: fields.href ?? fields.path ?? "",
    order: fields.order ?? 0,
    openInNewTab: Boolean(fields.openInNewTab),
  };
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const [settings, setSettings] = useState(null);

  useEffect(() => {
    async function loadSettings() {
      try {
        const data = await getSiteSettings();
        setSettings(data?.fields ?? null);
      } catch (error) {
        console.warn("Unable to load Contentful site settings:", error);
        setSettings(null);
      }
    }

    loadSettings();
  }, []);

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

  const logo = settings?.logo?.fields?.file?.url
    ? `https:${settings.logo.fields.file.url}`
    : "";
  const logoSrc = logo || DEFAULT_LOGO_URL;

  const menuItems = (settings?.primaryNavigation?.length
    ? settings.primaryNavigation
    : FALLBACK_MENU_ITEMS
  )
    .map(normalizeNavigationItem)
    .filter((item) => item.label && item.href)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6);

  const featuredActivitySlugs = [
    "guided-tour-victoria-falls",
    "helicopter-flight",
    "zambezi-boat-cruise",
    "boma-dinner-drum-show",
    "chobe-day-trip",
  ];

  const featuredActivities = featuredActivitySlugs
    .map((slug) => dayTours.find((tour) => tour.slug === slug))
    .filter(Boolean)
    .map((tour) => ({
      label: tour.title,
      href: getTourPath(tour.slug),
    }));

  const toursDropdownItems = [
    { label: "All Tours", href: "/tours" },
    { label: "All Experiences", href: "/experiences" },
    ...featuredActivities,
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

  const closeMenus = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  };

  const isToursMenuItem = (item) => item.href === "/tours";

  const renderMenuLink = (item, key) => {
    const isExternal = /^https?:\/\//i.test(item.href);

    if (isToursMenuItem(item)) {
      const isOpenDropdown = openDropdown === key;

      return (
        <div
          key={key}
          className="relative"
          onMouseEnter={() => setOpenDropdown(key)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            type="button"
            onClick={() =>
              setOpenDropdown((current) => (current === key ? null : key))
            }
            className={`inline-flex items-center gap-2 ${desktopLinkClasses({ isActive: false })}`}
            aria-expanded={isOpenDropdown}
            aria-haspopup="menu"
          >
            <span>{item.label}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpenDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`absolute left-0 top-full z-50 pt-4 transition-all duration-200 ${
              isOpenDropdown
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <div className="w-72 overflow-hidden rounded-2xl border border-[#203A4A]/10 bg-white p-2 shadow-[0_20px_50px_rgba(32,58,74,0.12)]">
              {toursDropdownItems.map((dropdownItem) => (
                <NavLink
                  key={dropdownItem.href}
                  to={dropdownItem.href}
                  end={dropdownItem.href === "/"}
                  onClick={() => setOpenDropdown(null)}
                  className={({ isActive }) =>
                    [
                      "block rounded-xl px-4 py-3 text-sm transition-colors duration-200",
                      isActive
                        ? "bg-[#203A4A] text-white"
                        : "text-[#333333] hover:bg-[#F4EFE7] hover:text-[#203A4A]",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  {dropdownItem.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (isExternal || item.openInNewTab) {
      return (
        <a
          key={key}
          href={item.href}
          target={item.openInNewTab ? "_blank" : undefined}
          rel={item.openInNewTab ? "noreferrer" : undefined}
          onClick={() => setIsOpen(false)}
          className={desktopLinkClasses({ isActive: false })}
        >
          {item.label}
        </a>
      );
    }

    return (
      <NavLink
        key={key}
        to={item.href}
        end={item.href === "/"}
        onClick={() => setIsOpen(false)}
        className={desktopLinkClasses}
      >
        {item.label}
      </NavLink>
    );
  };

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
              src={logoSrc}
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
        {menuItems.map((item) => renderMenuLink(item, `${item.label}-${item.href}`))}
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
                  src={logoSrc}
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
                <span className="text-sm font-semibold uppercase">Close</span>
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 overflow-y-auto">
            <div className="mx-auto max-w-7xl px-6 py-10">
              {menuItems.map((item, index) => {
                const number = String(index + 1).padStart(2, "0");
                const isExternal = /^https?:\/\//i.test(item.href);

                if (isToursMenuItem(item)) {
                  const isOpenTours = openMobileDropdown === item.href;

                  return (
                    <div key={`${item.label}-${item.href}`} className="border-b border-[#333333]/10">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileDropdown((current) =>
                            current === item.href ? null : item.href,
                          )
                        }
                        className="group flex w-full items-center justify-between gap-5 py-6 text-left transition-all duration-300 hover:pl-3"
                      >
                        <div className="flex items-center gap-5">
                          <span className="text-xs font-semibold text-[#333333]/50">
                            {number}
                          </span>
                          <span className="text-2xl font-semibold text-[#333333] transition-colors duration-300 group-hover:text-[#C29B5A] sm:text-4xl">
                            {item.label}
                          </span>
                        </div>

                        <ChevronDown
                          className={`h-6 w-6 text-[#333333] transition-transform duration-300 ${
                            isOpenTours ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`grid overflow-hidden transition-all duration-300 ${
                          isOpenTours
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden pl-10 pb-6">
                          <div className="mb-4 flex flex-col gap-2 border-l border-[#203A4A]/10 pl-5">
                            {toursDropdownItems.map((dropdownItem) => (
                              <NavLink
                                key={dropdownItem.href}
                                to={dropdownItem.href}
                                onClick={closeMenus}
                                className="text-sm font-medium text-[#333333] transition-colors duration-200 hover:text-[#C29B5A]"
                              >
                                {dropdownItem.label}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (isExternal || item.openInNewTab) {
                  return (
                    <a
                      key={`${item.label}-${item.href}`}
                      href={item.href}
                      target={item.openInNewTab ? "_blank" : undefined}
                      rel={item.openInNewTab ? "noreferrer" : undefined}
                      onClick={closeMenus}
                      className={mobileLinkClasses({ isActive: false })}
                      >
                        <span className="text-xs font-semibold text-[#333333]/50">
                          {number}
                        </span>

                      <span className="text-2xl font-semibold text-[#333333] transition-colors duration-300 group-hover:text-[#C29B5A] sm:text-4xl">
                        {item.label}
                      </span>
                    </a>
                  );
                }

                return (
                  <NavLink
                    key={`${item.label}-${item.href}`}
                    to={item.href}
                    end={item.href === "/"}
                    onClick={closeMenus}
                    className={mobileLinkClasses}
                  >
                    <span className="text-xs font-semibold text-[#333333]/50">
                      {number}
                    </span>

                    <span className="text-2xl font-semibold text-[#333333] transition-colors duration-300 group-hover:text-[#C29B5A] sm:text-4xl">
                      {item.label}
                    </span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
