import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";

import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import { getSiteSettings } from "../services/siteSettings";

const CONTACT_IMAGE =
  "https://images.ctfassets.net/ht2d038ql6u5/5dLLV8SSReyy4LUVkbIgPX/19a4006f42bbbf9fd7a47b1da39e3544/GalleryGameDrive4.jpg";

const FALLBACK_CONTACT = {
  contactEmail: "hello@zazuadventures.com",
  contactPhone: "+263 00 000 0000",
  whatsappNumber: "+263 00 000 0000",
  locationLabel: "Victoria Falls, Zimbabwe",
  socialLinks: [
    { label: "Facebook", url: "https://facebook.com", iconKey: "facebook" },
    { label: "Instagram", url: "https://instagram.com", iconKey: "instagram" },
    { label: "YouTube", url: "https://youtube.com", iconKey: "youtube" },
    { label: "LinkedIn", url: "https://linkedin.com", iconKey: "linkedin" },
  ],
};

function normalizeSocialLink(link) {
  const fields = link?.fields ?? link ?? {};

  return {
    label: fields.label ?? "",
    url: fields.url ?? fields.href ?? "",
    iconKey: (fields.iconKey ?? fields.label ?? "").toString().toLowerCase(),
  };
}

function getSocialIcon(iconKey) {
  if (iconKey.includes("facebook")) return FaFacebookF;
  if (iconKey.includes("instagram")) return FaInstagram;
  if (iconKey.includes("youtube")) return FaYoutube;
  if (iconKey.includes("linkedin")) return FaLinkedinIn;
  if (iconKey.includes("whatsapp")) return FaWhatsapp;
  return FaEnvelope;
}

function Contact() {
  const [siteSettings, setSiteSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    preferredContact: "email",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    let isActive = true;

    async function loadSettings() {
      try {
        const data = await getSiteSettings();

        if (!isActive) {
          return;
        }

        setSiteSettings(data?.fields ?? null);
      } catch (error) {
        if (isActive) {
          console.warn("Unable to load site settings for contact page:", error);
          setSiteSettings(null);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    loadSettings();

    return () => {
      isActive = false;
    };
  }, []);

  const resolvedContact = useMemo(() => {
    const settings = siteSettings ?? {};
    const socialLinks = Array.isArray(settings.socialLinks) && settings.socialLinks.length
      ? settings.socialLinks.map(normalizeSocialLink).filter((link) => link.label && link.url)
      : FALLBACK_CONTACT.socialLinks;

    return {
      contactEmail: settings.contactEmail || FALLBACK_CONTACT.contactEmail,
      contactPhone: settings.contactPhone || FALLBACK_CONTACT.contactPhone,
      whatsappNumber: settings.whatsappNumber || FALLBACK_CONTACT.whatsappNumber,
      locationLabel: settings.locationLabel || FALLBACK_CONTACT.locationLabel,
      socialLinks,
    };
  }, [siteSettings]);

  const socialCards = resolvedContact.socialLinks.map((social) => ({
    ...social,
    Icon: getSocialIcon(social.iconKey),
  }));

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact" },
  ];

  const updateField = (field) => (event) => {
    setFormState((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = formState.subject.trim() || "Website enquiry";
    const messageLines = [
      `Name: ${formState.fullName}`,
      `Email: ${formState.email}`,
      `Phone: ${formState.phone || "Not provided"}`,
      `Preferred contact method: ${formState.preferredContact}`,
      "",
      formState.message,
    ];

    const mailtoUrl = new URL(`mailto:${resolvedContact.contactEmail}`);
    mailtoUrl.searchParams.set("subject", subject);
    mailtoUrl.searchParams.set("body", messageLines.join("\n"));

    window.location.href = mailtoUrl.toString();
    setSubmitStatus("Your email draft is opening now. If it does not open, use the contact details beside the form.");
  };

  return (
    <>
      <SEO
        title="Contact Zazu Adventures"
        description="Send Zazu Adventures a message to plan your Victoria Falls safari, request a custom itinerary, or ask about tour availability."
        keywords="Zazu Adventures, contact, message, safari enquiry"
        image={CONTACT_IMAGE}
        breadcrumbs={breadcrumbs}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Zazu Adventures",
          url: "https://www.zazuadventures.com/contact",
        }}
      />

      <main className="w-full">
        <PageHero
          eyebrow="Get In Touch"
          title="Plan your next adventure with us"
          description="Tell us where you want to go, how many travelers are in your group, and what kind of safari or travel experience you want. We’ll help shape the details."
          image={CONTACT_IMAGE}
          align="left"
          minHeightClassName="min-h-[74vh]"
          primaryAction={{ label: "Send a Message", href: "#contact-form" }}
          secondaryAction={{ label: "Explore Tours", href: "/tours" }}
        />

        <Breadcrumbs items={breadcrumbs} />

        <section className="relative overflow-hidden bg-[#F7F4EE] py-16">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
          <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
             <motion.div
              id="contact-form"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2.25rem] border border-[#203A4A]/10 bg-white p-6 shadow-[0_24px_80px_rgba(32,58,74,0.12)] md:p-8"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A6A3D]">
                  Leave a Message
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#203A4A]">
                  Tell us about your trip
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#5F5F5F]">
                  Fill in the form below and we’ll open an email draft with your details
                  prefilled so you can send it quickly.
                </p>
              </div>

              {submitStatus ? (
                <div className="mt-6 rounded-2xl border border-[#1F8A4C]/20 bg-[#EAF7EF] px-4 py-3 text-sm font-medium text-[#146C3A]">
                  {submitStatus}
                </div>
              ) : null}

              {loading ? (
                <p className="mt-6 text-sm text-[#666666]">Loading contact details...</p>
              ) : null}

              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#203A4A]">
                      Full Name
                    </span>
                    <input
                      type="text"
                      value={formState.fullName}
                      onChange={updateField("fullName")}
                      required
                      placeholder="Your full name"
                      className="w-full rounded-2xl border border-[#203A4A]/15 bg-[#FCFBF8] px-4 py-3 text-sm text-[#203A4A] outline-none transition focus:border-[#C29B5A] focus:ring-2 focus:ring-[#C29B5A]/15"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#203A4A]">
                      Email Address
                    </span>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={updateField("email")}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-[#203A4A]/15 bg-[#FCFBF8] px-4 py-3 text-sm text-[#203A4A] outline-none transition focus:border-[#C29B5A] focus:ring-2 focus:ring-[#C29B5A]/15"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#203A4A]">
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={updateField("phone")}
                      placeholder="Optional"
                      className="w-full rounded-2xl border border-[#203A4A]/15 bg-[#FCFBF8] px-4 py-3 text-sm text-[#203A4A] outline-none transition focus:border-[#C29B5A] focus:ring-2 focus:ring-[#C29B5A]/15"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#203A4A]">
                      Subject
                    </span>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={updateField("subject")}
                      placeholder="Safari enquiry"
                      className="w-full rounded-2xl border border-[#203A4A]/15 bg-[#FCFBF8] px-4 py-3 text-sm text-[#203A4A] outline-none transition focus:border-[#C29B5A] focus:ring-2 focus:ring-[#C29B5A]/15"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#203A4A]">
                    Preferred Contact Method
                  </span>
                  <select
                    value={formState.preferredContact}
                    onChange={updateField("preferredContact")}
                    className="w-full rounded-2xl border border-[#203A4A]/15 bg-[#FCFBF8] px-4 py-3 text-sm text-[#203A4A] outline-none transition focus:border-[#C29B5A] focus:ring-2 focus:ring-[#C29B5A]/15"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#203A4A]">
                    Message
                  </span>
                  <textarea
                    value={formState.message}
                    onChange={updateField("message")}
                    required
                    rows={7}
                    placeholder="Tell us where you'd like to go, the dates you have in mind, and anything else we should know."
                    className="w-full rounded-3xl border border-[#203A4A]/15 bg-[#FCFBF8] px-4 py-3 text-sm text-[#203A4A] outline-none transition focus:border-[#C29B5A] focus:ring-2 focus:ring-[#C29B5A]/15"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#203A4A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#162936] sm:w-auto"
                >
                  Open Email Draft
                </button>
              </form>
            </motion.div>
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8A6A3D]">
                  Contact Details
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#203A4A]">
                  Reach us directly
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#5F5F5F]">
                  Whether you want a quick quote, a custom itinerary, or help choosing the
                  right safari, these are the best ways to reach the team.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href={`mailto:${resolvedContact.contactEmail}`}
                  className="group rounded-[1.75rem] border border-[#203A4A]/10 bg-white p-5 shadow-[0_18px_50px_rgba(32,58,74,0.08)] transition hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#203A4A] text-white">
                      <FaEnvelope className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8A6A3D]">
                        Email
                      </p>
                      <p className="mt-2 text-lg font-semibold text-[#203A4A]">
                        {resolvedContact.contactEmail}
                      </p>
                      <p className="mt-1 text-sm text-[#666666]">
                        Send us your dates, group size, and destination ideas.
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${resolvedContact.contactPhone}`}
                  className="group rounded-[1.75rem] border border-[#203A4A]/10 bg-white p-5 shadow-[0_18px_50px_rgba(32,58,74,0.08)] transition hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C29B5A] text-white">
                      <FaPhoneAlt className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8A6A3D]">
                        Phone
                      </p>
                      <p className="mt-2 text-lg font-semibold text-[#203A4A]">
                        {resolvedContact.contactPhone}
                      </p>
                      <p className="mt-1 text-sm text-[#666666]">
                        Best for fast questions and travel updates.
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${String(resolvedContact.whatsappNumber).replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[1.75rem] border border-[#203A4A]/10 bg-white p-5 shadow-[0_18px_50px_rgba(32,58,74,0.08)] transition hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F8A4C] text-white">
                      <FaWhatsapp className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8A6A3D]">
                        WhatsApp
                      </p>
                      <p className="mt-2 text-lg font-semibold text-[#203A4A]">
                        {resolvedContact.whatsappNumber}
                      </p>
                      <p className="mt-1 text-sm text-[#666666]">
                        Ideal for quick back-and-forth planning.
                      </p>
                    </div>
                  </div>
                </a>

                <div className="rounded-[1.75rem] border border-[#203A4A]/10 bg-white p-5 shadow-[0_18px_50px_rgba(32,58,74,0.08)]">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#203A4A]/10 text-[#203A4A]">
                      <FaMapMarkerAlt className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8A6A3D]">
                        Location
                      </p>
                      <p className="mt-2 text-lg font-semibold text-[#203A4A]">
                        {resolvedContact.locationLabel}
                      </p>
                      <p className="mt-1 text-sm text-[#666666]">
                        We can arrange trips across Victoria Falls and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#203A4A]/10 bg-white p-6 shadow-[0_18px_50px_rgba(32,58,74,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8A6A3D]">
                  Social Pages
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socialCards.map((social) => {
                    const Icon = social.Icon;

                    return (
                      <a
                        key={`${social.label}-${social.url}`}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-full border border-[#203A4A]/10 bg-[#F7F4EE] px-4 py-3 text-sm font-semibold text-[#203A4A] transition hover:border-[#C29B5A] hover:bg-white"
                      >
                        <Icon className="h-4 w-4" />
                        {social.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

           
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
