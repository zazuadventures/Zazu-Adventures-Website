import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { DEFAULT_LOGO_URL } from "../lib/branding";

function Footer() {
  const socialLinks = [
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: FaFacebookF,
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: FaInstagram,
    },
    {
      label: "YouTube",
      href: "https://youtube.com",
      icon: FaYoutube,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: FaLinkedinIn,
    },
  ];

  return (
    <footer className="bg-[#203A4A] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Link
          to="/"
          className="flex items-center justify-center md:justify-start"
          aria-label="Zazu Adventures Home"
        >
          <img
            src={DEFAULT_LOGO_URL}
            alt="Zazu Adventures"
            width={180}
            height={70}
            loading="eager"
            decoding="async"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="text-center">
          <p className="text-sm text-gray-200">
            Copyright © 2026 Zazu Adventures. All rights reserved.
          </p>
          <p className="mt-2 text-xs font-medium text-gray-300">
            Built by codewithdaviess
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 md:justify-end">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#203A4A]"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
