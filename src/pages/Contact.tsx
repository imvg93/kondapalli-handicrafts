import { motion } from "framer-motion";
import { useState } from "react";

const MAP_EMBED =
  "https://www.google.com/maps?q=Kondapalli,Krishna+District,Andhra+Pradesh+521228,India&t=&z=14&ie=UTF8&iwloc=&output=embed";
const MAP_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Kondapalli,Krishna+District,Andhra+Pradesh+521228,India";

const ease = [0.22, 1, 0.36, 1] as const;

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-4 md:pt-6 pb-8 md:pb-10">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3 block"
      >
        Contact
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="font-headline text-3xl md:text-5xl text-on-surface tracking-tight leading-tight mb-4"
      >
        Contact Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed max-w-lg"
      >
        We're here to help with orders and queries. Every piece tells a story
        — we'd love to help you find yours.
      </motion.p>
    </section>
  );
}

function Details() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <h3 className="font-body uppercase tracking-[0.2em] text-[10px] text-on-surface-variant">
          Get in Touch
        </h3>

        <div className="flex flex-col gap-6">
          <div>
            <p className="font-headline text-lg text-on-surface mb-1">
              General Inquiry
            </p>
            <a
              href="mailto:hello@kondapalli-handicrafts.com"
              className="text-sm text-on-surface-variant hover:text-primary transition-colors border-b border-outline-variant/30 pb-0.5"
            >
              hello@kondapalli-handicrafts.com
            </a>
          </div>

          <div>
            <p className="font-headline text-lg text-on-surface mb-1">
              Visit the Studio
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Artisan Row, 4th Street
              <br />
              Kondapalli, Andhra Pradesh 521225
            </p>
          </div>

          <div>
            <p className="font-headline text-lg text-on-surface mb-1">Voice</p>
            <a
              href="tel:+919876543210"
              className="text-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              +91 987 654 3210
            </a>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-low p-6 rounded-DEFAULT flex flex-col gap-3 border border-outline-variant/20">
        <h4 className="font-headline text-base text-on-surface">
          Chat with us on WhatsApp
        </h4>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          Immediate assistance or bespoke orders — our curators are on
          message, Mon–Sat.
        </p>
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="mt-1 w-full py-3 px-5 bg-primary text-on-primary font-body uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 hover:bg-primary-container transition-colors rounded-DEFAULT"
        >
          <span className="material-symbols-outlined text-base">chat</span>
          Order via WhatsApp
        </motion.button>
      </div>

      <FollowUs />
    </div>
  );
}

const socials: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/kondapallihandicrafts",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/kondapallihandicrafts",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.6-1.5H16.6V4.4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.5H7v3h2.6V21h3.9z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@kondapallihandicrafts",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.1 5 12 5 12 5s-6.1 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.9 2 12 2 12s0 3.1.4 4.8c.2.9.9 1.6 1.8 1.8C5.9 19 12 19 12 19s6.1 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.1V8.9L15.4 12 10 15.1z" />
      </svg>
    ),
  },
];

function FollowUs() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-body uppercase tracking-[0.2em] text-[10px] text-on-surface-variant">
        Follow Us
      </h3>
      <div className="flex flex-col gap-2">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 bg-surface-container-lowest border border-outline-variant/25 rounded-DEFAULT px-4 py-3 hover:border-primary/40 hover:bg-surface-container-low transition-all"
          >
            <span className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                {s.icon}
              </span>
              <span className="text-sm text-on-surface group-hover:text-primary transition-colors">
                {s.label}
              </span>
            </span>
            <span className="material-symbols-outlined text-on-surface-variant text-base group-hover:translate-x-0.5 group-hover:text-primary transition-all">
              north_east
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", phone: "", message: "" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface-container-lowest p-6 md:p-10 rounded-DEFAULT border border-outline-variant/20 flex flex-col gap-7"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="font-body uppercase tracking-widest text-[10px] text-on-surface-variant mb-1.5 block">
            Name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your full name"
            className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-2.5 px-0 text-sm focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/40 outline-none"
          />
        </div>
        <div>
          <label className="font-body uppercase tracking-widest text-[10px] text-on-surface-variant mb-1.5 block">
            Phone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 0000 000000"
            className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-2.5 px-0 text-sm focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/40 outline-none"
          />
        </div>
      </div>

      <div>
        <label className="font-body uppercase tracking-widest text-[10px] text-on-surface-variant mb-1.5 block">
          Message
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="How can we assist you today?"
          className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-2.5 px-0 text-sm focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/40 outline-none resize-none"
        />
      </div>

      <div className="pt-2 flex items-center justify-between gap-4">
        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="group flex items-center gap-3 text-primary font-body uppercase tracking-widest text-[11px] font-semibold"
        >
          {sent ? "Sent. Thank you." : "Send Message"}
          <span className="h-px w-10 bg-primary group-hover:w-16 transition-all duration-300" />
        </motion.button>
        <span className="text-[10px] text-on-surface-variant tracking-wide">
          Typical reply within 1 business day.
        </span>
      </div>
    </form>
  );
}

function Map() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
        className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden rounded-DEFAULT border border-outline-variant/25 bg-surface-container-high"
      >
        <iframe
          src={MAP_EMBED}
          title="Kondapalli Handicrafts studio location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="w-full h-full border-0"
        />

        <div className="absolute top-4 left-4 bg-surface-container-lowest/95 backdrop-blur-sm px-4 py-3 rounded-DEFAULT ambient-shadow flex items-center gap-3">
          <span
            className="material-symbols-outlined text-primary text-lg"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            location_on
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] tracking-widest uppercase text-on-surface-variant">
              Studio &amp; Workshop
            </span>
            <span className="font-headline text-sm text-on-surface">
              Kondapalli, Andhra Pradesh
            </span>
          </div>
        </div>

        <a
          href={MAP_DIRECTIONS}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-DEFAULT text-[11px] tracking-widest uppercase font-semibold hover:bg-primary-container transition-colors ambient-shadow"
        >
          Get Directions
          <span className="material-symbols-outlined text-sm">north_east</span>
        </a>
      </motion.div>
    </section>
  );
}

export default function Contact() {
  return (
    <main className="flex-grow pt-20 pb-10">
      <Hero />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 py-4 md:py-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="lg:col-span-5"
        >
          <Details />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="lg:col-span-7"
        >
          <ContactForm />
        </motion.div>
      </section>

      <Map />
    </main>
  );
}
