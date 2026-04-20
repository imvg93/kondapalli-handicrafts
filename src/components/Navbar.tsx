import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "Collection", to: "/collection" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const socials: { label: string; href: string; path: string }[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/kondapallihandicrafts",
    path: "M17.5 6.5a1 1 0 1 0 0-.001M12 7.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/kondapallihandicrafts",
    path: "M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.6-1.5H16.6V4.4c-.3 0-1.4-.1-2.6-.1c-2.6 0-4.4 1.6-4.4 4.5v2.5H7v3h2.6V21h3.9z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@kondapallihandicrafts",
    path: "M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.1 5 12 5 12 5s-6.1 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.9 2 12 2 12s0 3.1.4 4.8c.2.9.9 1.6 1.8 1.8C5.9 19 12 19 12 19s6.1 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.1V8.9L15.4 12L10 15.1z",
  },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const shadowOpacity = useTransform(scrollY, [0, 200], [0, 0.06]);
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isLinkActive = (to: string) =>
    to === "/"
      ? location.pathname === "/"
      : to === "/collection"
        ? location.pathname.startsWith("/collection") ||
          location.pathname.startsWith("/product")
        : location.pathname === to;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          boxShadow: useTransform(
            shadowOpacity,
            (o) => `0 8px 24px rgba(0,0,0,${o})`,
          ),
        }}
        className="fixed top-0 w-full z-40 bg-background/85 backdrop-blur-md border-b border-outline-variant/10"
      >
        <div className="flex justify-between items-center px-5 md:px-8 py-4 md:py-5 w-full max-w-screen-2xl mx-auto">
          <Link
            to="/"
            className="font-headline not-italic font-bold text-lg md:text-2xl text-primary tracking-tight hover:text-primary-container transition-colors duration-300"
          >
            Kondapalli Handicrafts
          </Link>

          <div className="hidden md:flex items-center gap-8 font-body">
            {links.map(({ label, to }) => {
              const active = isLinkActive(to);
              return (
                <Link
                  key={label}
                  to={to}
                  className={`relative text-sm tracking-wide pb-1 transition-colors duration-300 ${
                    active
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-on-primary px-5 py-2 text-[11px] tracking-widest uppercase font-semibold hover:bg-primary-container transition-colors rounded-DEFAULT"
          >
            Inquire
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-primary -mr-2"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <MobileDrawer
            close={() => setOpen(false)}
            isActive={isLinkActive}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function MobileDrawer({
  close,
  isActive,
}: {
  close: () => void;
  isActive: (to: string) => boolean;
}) {
  return (
    <>
      <motion.button
        type="button"
        aria-label="Close menu"
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={close}
        className="fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-sm md:hidden cursor-default"
      />
      <motion.aside
        key="drawer"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 right-0 bottom-0 z-50 w-[88%] max-w-[360px] bg-background flex flex-col md:hidden shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant/20">
          <Link
            to="/"
            onClick={close}
            className="font-headline not-italic font-bold text-lg text-primary tracking-tight"
          >
            Kondapalli
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors -mr-2"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <nav className="flex-1 flex flex-col px-5 pt-6">
          <span className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant mb-4">
            Menu
          </span>
          {links.map(({ label, to }, i) => {
            const active = isActive(to);
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 + i * 0.06,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  to={to}
                  onClick={close}
                  className={`group flex items-center justify-between py-4 border-b border-outline-variant/15 transition-colors ${
                    active ? "text-primary" : "text-on-surface"
                  }`}
                >
                  <span className="font-headline text-2xl tracking-tight">
                    {label}
                  </span>
                  <span
                    className={`material-symbols-outlined text-base transition-all ${
                      active
                        ? "text-primary"
                        : "text-on-surface-variant group-hover:text-primary"
                    }`}
                  >
                    arrow_forward
                  </span>
                </Link>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8"
          >
            <Link
              to="/contact"
              onClick={close}
              className="flex items-center justify-center gap-2 w-full bg-primary text-on-primary px-5 py-3.5 text-xs tracking-widest uppercase font-semibold rounded-DEFAULT hover:bg-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              Inquire Now
            </Link>
          </motion.div>
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="px-5 py-6 border-t border-outline-variant/20 flex flex-col gap-4"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant">
            Follow Us
          </span>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-on-primary hover:bg-primary hover:border-primary transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={s.label === "Instagram" ? 1.6 : 0}
                  fillRule="evenodd"
                  className="w-4 h-4"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
          <p className="text-[10px] tracking-widest uppercase text-on-surface-variant/70 mt-1">
            © 2024 Kondapalli Handicrafts
          </p>
        </motion.div>
      </motion.aside>
    </>
  );
}
