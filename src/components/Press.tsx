import { motion } from "framer-motion";

const outlets = [
  "VOGUE INDIA",
  "ARCHITECTURAL DIGEST",
  "THE NEW YORK TIMES",
  "CONDÉ NAST",
  "ELLE DECOR",
  "FORBES",
];

export function Press() {
  return (
    <section className="w-full py-12 flex flex-col items-center gap-8">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant"
      >
        As Featured In
      </motion.span>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
        className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5"
      >
        {outlets.map((o) => (
          <motion.span
            key={o}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 0.55, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ opacity: 1, scale: 1.04 }}
            className="font-headline italic text-lg md:text-xl text-on-surface tracking-wide cursor-default"
          >
            {o}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
