import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDfygq3tfjCvIgV8TQJj0_tBylZlXfSpv8W2hMv549zCiAsL6it9iaOsncAa0iYK7jOYh7eStKJP23k347NSUujYwoXAviesrmB9DxiLTpJ2bfuXQTwQhMvypQ24m-rqxY6ulRPo4GTzru6QfbpIPJZo9qCLT-gv7YSSeTQMjJYXjUQoFXF_tINgu4_kleuYt2HlIvZwIPsX5RlSz5G_NUb8B2ea_tp_VruULR0Y4f48-Tb_TKPt0Y_hYU2f9p6jXaG5nt27GcwR8Q";

const lineOne = "The Soul of";
const lineTwo = "Indian Craft.";
const lineThree = "Reimagined for the World.";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const word = {
  hidden: { y: 60, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-0 md:min-h-[500px] flex flex-col md:flex-row items-center justify-between gap-8 bg-surface-container-low p-5 md:p-10 rounded-DEFAULT overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-primary-fixed/20 to-transparent pointer-events-none rounded-DEFAULT mix-blend-multiply"
      />

      <motion.div
        aria-hidden
        className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-primary-fixed/25 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-secondary-fixed/30 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 md:w-5/12 flex flex-col gap-6"
      >
        <motion.h1
          variants={stagger}
          initial="hidden"
          animate="show"
          className="font-headline text-3xl md:text-5xl font-light tracking-tight text-on-surface leading-[1.05]"
        >
          <span className="block overflow-hidden">
            <motion.span variants={word} className="block">
              {lineOne}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={word} className="block">
              {lineTwo}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={word} className="block italic text-primary">
              {lineThree}
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-body text-sm text-on-surface-variant max-w-md tracking-wide leading-relaxed"
        >
          Discover the vibrant legacy of Kondapalli toys. Handcrafted elegance
          for the modern luxury atelier.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="pt-2 flex flex-wrap gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.03, letterSpacing: "0.22em" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link
              to="/collection"
              className="group relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary-container text-on-primary font-body text-[11px] tracking-widest uppercase px-6 py-3 rounded-DEFAULT"
            >
              <span className="relative z-10">Explore the Collection</span>
              <motion.span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </Link>
          </motion.div>
          <motion.a
            whileHover={{ x: 4 }}
            href="#"
            className="inline-flex items-center gap-2 text-on-surface-variant font-body text-[11px] tracking-widest uppercase px-2 py-3 border-b border-outline-variant hover:text-primary transition-colors"
          >
            Watch Craft Film
            <span className="material-symbols-outlined font-light text-base">
              play_circle
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex items-center gap-4 pt-3 border-t border-outline-variant/40 mt-1"
        >
          <div className="flex -space-x-2">
            {[
              "https://i.pravatar.cc/48?img=15",
              "https://i.pravatar.cc/48?img=32",
              "https://i.pravatar.cc/48?img=47",
            ].map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="w-7 h-7 rounded-full border-2 border-surface-container-low object-cover"
              />
            ))}
          </div>
          <p className="text-xs text-on-surface-variant tracking-wide">
            Loved by <span className="text-on-surface font-semibold">3,400+</span>{" "}
            connoisseurs worldwide
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: imageY, scale: imageScale }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 md:w-7/12 h-[280px] sm:h-[340px] md:h-[440px] w-full"
      >
        <img
          alt="Editorial image of traditional craft"
          className="w-full h-full object-cover rounded-DEFAULT ambient-shadow"
          src={HERO_IMAGE}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
          className="absolute bottom-4 left-4 bg-surface-container-lowest/95 backdrop-blur px-3 py-2 rounded-DEFAULT ambient-shadow flex items-center gap-2.5"
        >
          <span className="material-symbols-outlined text-primary text-lg">
            verified
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-[9px] tracking-widest uppercase text-on-surface-variant">
              GI Certified
            </span>
            <span className="font-headline text-xs text-on-surface italic">
              Since 1624
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
