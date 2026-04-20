import { motion } from "framer-motion";

const reviews = [
  {
    quote:
      "A Kondapalli piece on my console is a daily reminder that true luxury is time — centuries of it, poured into wood.",
    name: "Aarav Mehta",
    role: "Curator, Mumbai",
    avatar: "https://i.pravatar.cc/96?img=12",
  },
  {
    quote:
      "Unmatched storytelling. Each artisan's signature is palpable — the atelier of the future is the atelier of the past.",
    name: "Isabelle Rousseau",
    role: "Interior Designer, Paris",
    avatar: "https://i.pravatar.cc/96?img=45",
  },
  {
    quote:
      "I bought the Ambari for my gallery; guests won't stop asking about it. This is heritage, not merchandise.",
    name: "Daniel Osei",
    role: "Collector, London",
    avatar: "https://i.pravatar.cc/96?img=68",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Testimonials() {
  return (
    <section className="w-full flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-secondary">
          In Their Words
        </span>
        <h2 className="font-headline text-3xl text-on-surface tracking-tight max-w-2xl">
          From collectors who understand{" "}
          <span className="italic text-primary">quiet luxury</span>.
        </h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {reviews.map((r) => (
          <motion.article
            key={r.name}
            variants={card}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="bg-surface-container-lowest p-6 rounded-DEFAULT flex flex-col gap-4 hover:ambient-shadow transition-shadow"
          >
            <span className="font-headline italic text-4xl text-primary leading-none">
              "
            </span>
            <p className="font-body text-sm text-on-surface leading-relaxed -mt-3">
              {r.quote}
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/30 mt-auto">
              <img
                src={r.avatar}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="font-headline text-base text-on-surface">
                  {r.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-on-surface-variant">
                  {r.role}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
