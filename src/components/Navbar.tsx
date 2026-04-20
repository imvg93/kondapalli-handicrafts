import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "Collection", to: "/collection" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const shadowOpacity = useTransform(scrollY, [0, 200], [0, 0.06]);
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Close drawer on route change. Keep the effect narrow and guarded.
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
        className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-outline-variant/10"
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
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-primary"
          >
            <span className="material-symbols-outlined text-2xl">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-on-surface/30 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[78%] max-w-sm bg-background flex flex-col pt-20 pb-8 px-6 md:hidden border-l border-outline-variant/20 shadow-2xl"
            >
              <nav className="flex flex-col gap-1">
                {links.map(({ label, to }) => {
                  const active = isLinkActive(to);
                  return (
                    <Link
                      key={label}
                      to={to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-4 border-b border-outline-variant/20 font-headline text-xl transition-colors ${
                        active ? "text-primary" : "text-on-surface"
                      }`}
                    >
                      <span>{label}</span>
                      <span className="material-symbols-outlined text-lg text-on-surface-variant">
                        arrow_forward
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-5 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-primary-container transition-colors rounded-DEFAULT"
              >
                Inquire
              </Link>

              <p className="mt-auto text-[10px] tracking-widest uppercase text-on-surface-variant">
                © 2024 Kondapalli Handicrafts
              </p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
