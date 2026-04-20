import { motion } from "framer-motion";

const steps = [
  {
    no: "01",
    title: "Harvest",
    body: "Sustainable Tella Poniki softwood is hand-selected from the Kondapalli forests in Andhra Pradesh.",
  },
  {
    no: "02",
    title: "Carve",
    body: "Master artisans sculpt each form with chisels passed down through seven generations.",
  },
  {
    no: "03",
    title: "Pigment",
    body: "Natural dyes from tamarind, turmeric and indigo are hand-mixed for each unique batch.",
  },
  {
    no: "04",
    title: "Finish",
    body: "A final layer of organic lac lacquer seals the piece, preserving its soul for centuries.",
  },
];

export function Process() {
  return (
    <section className="w-full flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div className="flex flex-col gap-3 max-w-xl">
          <span className="text-[10px] tracking-[0.3em] uppercase text-secondary">
            The Making
          </span>
          <h2 className="font-headline text-3xl text-on-surface tracking-tight">
            Four hands. Four rituals.{" "}
            <span className="italic text-primary">One heirloom.</span>
          </h2>
        </div>
        <p className="font-body text-sm text-on-surface-variant max-w-sm leading-relaxed">
          Every Kondapalli piece travels through a 21-day slow process — a
          meditation in wood, pigment and patience.
        </p>
      </motion.div>

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="hidden md:block absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-primary/40 via-outline-variant to-transparent"
        />
        {steps.map((s, i) => (
          <motion.div
            key={s.no}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              delay: 0.2 + i * 0.15,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex flex-col gap-4 group"
          >
            <motion.div
              whileHover={{ scale: 1.15, backgroundColor: "var(--color-primary)" }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="w-3 h-3 rounded-full bg-primary-fixed-dim ring-4 ring-background z-10"
            />
            <span className="font-headline text-xs text-on-surface-variant tracking-widest">
              {s.no}
            </span>
            <h3 className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors">
              {s.title}
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              {s.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
