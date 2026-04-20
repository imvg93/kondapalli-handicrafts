import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const featured = [
  "royal-ambari-elephant",
  "dancing-doll",
  "dasavatara-set",
  "peacock",
]
  .map((s) => products.find((p) => p.slug === s)!)
  .filter(Boolean);

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function FeaturedCollection() {
  return (
    <section className="w-full flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row justify-between items-end gap-6"
      >
        <h2 className="font-headline text-3xl text-on-surface tracking-tight">
          Featured Collection
        </h2>
        <motion.div whileHover={{ x: 6 }}>
          <Link
            to="/collection"
            className="font-body text-sm font-semibold text-primary hover:text-primary-container border-b border-primary/30 hover:border-primary transition-all pb-1 tracking-widest uppercase"
          >
            View All Works
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {featured.map((p) => (
          <motion.article
            key={p.slug}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
          >
            <Link
              to={`/product/${p.slug}`}
              className="group flex flex-col gap-3 bg-surface-container-lowest p-3 rounded-DEFAULT transition-shadow duration-500 hover:ambient-shadow"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-DEFAULT bg-surface-container-low">
                <motion.img
                  alt={p.title}
                  src={p.image}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                {p.badge && (
                  <span className="absolute top-3 left-3 bg-tertiary-container text-on-tertiary-container font-body text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full">
                    {p.badge.label}
                  </span>
                )}
                <div className="absolute inset-0 bg-inverse-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
                  <span className="bg-surface text-on-surface font-body text-[11px] tracking-widest uppercase px-5 py-2.5 rounded-DEFAULT shadow-sm group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    Quick View
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-end mt-1 px-1">
                <h3 className="font-headline text-base text-on-surface">
                  {p.title}
                </h3>
                <span className="font-headline text-base text-primary italic">
                  {p.price}
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
