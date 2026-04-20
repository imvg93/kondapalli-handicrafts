import { motion } from "framer-motion";
import { Icon } from "./Icon";

const items = [
  {
    icon: "handyman",
    title: "Heritage Craftsmanship",
    body: "Preserving ancient techniques through meticulous hand-carving and natural dye applications.",
  },
  {
    icon: "forest",
    title: "Sustainable Materials",
    body: "Responsibly sourced softwoods and eco-friendly pigments that honor the earth.",
  },
  {
    icon: "diversity_1",
    title: "Artisan Impact",
    body: "Direct partnerships ensuring fair wages and community development in Kondapalli.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Commitments() {
  return (
    <section className="w-full py-12 bg-surface-container-low rounded-DEFAULT flex flex-col items-center gap-10 px-8">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-headline text-2xl md:text-3xl text-on-surface text-center"
      >
        Our Commitments
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl"
      >
        {items.map((c) => (
          <motion.div
            key={c.title}
            variants={item}
            className="flex flex-col items-center text-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary ring-0 hover:ring-4 ring-primary/10 transition"
            >
              <Icon name={c.icon} className="text-2xl" />
            </motion.div>
            <h3 className="font-headline text-lg text-on-surface">{c.title}</h3>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              {c.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
