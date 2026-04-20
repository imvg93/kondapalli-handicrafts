import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { products, type ProductCategory } from "../data/products";

type Category = "all" | ProductCategory;
type SortKey = "featured" | "price-low" | "price-high" | "newest";

const PAGE_SIZE = 8;

export default function Collection() {
  const [category, setCategory] = useState<Category>("all");
  const [sort, setSort] = useState<SortKey>("featured");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const items = useMemo(() => {
    const filtered =
      category === "all"
        ? products
        : products.filter((c) => c.category === category);
    const sorted = [...filtered].sort((a, b) => {
      if (sort === "price-low") return a.priceValue - b.priceValue;
      if (sort === "price-high") return b.priceValue - a.priceValue;
      if (sort === "newest") return a.addedAt - b.addedAt;
      return 0;
    });
    return sorted;
  }, [category, sort]);

  const shown = items.slice(0, visible);

  return (
    <main className="flex-grow w-full pb-16 md:pb-24 pt-20 md:pt-24">
      <header className="relative px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center text-center py-10 md:py-16">
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[380px] pointer-events-none z-0"
        >
          <motion.svg
            className="w-full h-full fill-primary-container"
            viewBox="0 0 200 200"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,97.2,-2.5C97.6,13.1,92.5,29,82.8,41.7C73.1,54.4,58.8,63.9,43.7,70.6C28.6,77.3,12.7,81.2,-2.7,85.6C-18.1,90,-34.1,94.9,-47.9,89.5C-61.7,84.1,-73.3,68.4,-82.1,51.8C-90.9,35.2,-96.9,17.6,-95.3,0.9C-93.7,-15.8,-84.5,-31.6,-73.6,-45.3C-62.7,-59,-50.1,-70.6,-35.8,-77.4C-21.5,-84.2,-5.5,-86.2,9.6,-84.4C24.7,-82.6,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </motion.svg>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-[10px] tracking-[0.3em] uppercase text-secondary mb-4"
        >
          The Atelier
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-on-surface tracking-tight"
        >
          Our <span className="italic text-primary">Collection</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="relative z-10 mt-4 font-body text-base md:text-lg text-on-surface-variant max-w-2xl"
        >
          Authentic handmade Kondapalli toys and crafts — a celebration of
          heritage, patience, and vibrant pigment.
        </motion.p>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8 md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="glass rounded-xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4 ambient-shadow border border-outline-variant/30 sticky top-20 z-30"
        >
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="material-symbols-outlined text-primary">
              filter_list
            </span>
            <div className="relative w-full sm:w-52">
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value as Category);
                  setVisible(PAGE_SIZE);
                }}
                className="w-full appearance-none bg-surface-container-lowest border border-outline-variant/40 rounded-DEFAULT py-2.5 pl-4 pr-10 font-body text-sm text-on-surface focus:ring-2 focus:ring-primary focus:outline-none cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="toys">Toys</option>
                <option value="figurines">Figurines</option>
                <option value="decorative">Decorative Items</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-lg">
                arrow_drop_down
              </span>
            </div>
          </div>

          <div className="text-xs tracking-widest uppercase text-on-surface-variant hidden md:block">
            {items.length} pieces
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="material-symbols-outlined text-primary">sort</span>
            <div className="relative w-full sm:w-52">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="w-full appearance-none bg-surface-container-lowest border border-outline-variant/40 rounded-DEFAULT py-2.5 pl-4 pr-10 font-body text-sm text-on-surface focus:ring-2 focus:ring-primary focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-lg">
                arrow_drop_down
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {shown.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>

        {visible < items.length && (
          <div className="mt-8 flex justify-center">
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-gradient-to-br from-primary to-primary-container text-on-primary font-body text-xs tracking-widest uppercase px-9 py-4 rounded-DEFAULT shadow-lg"
            >
              <span className="relative z-10">Load More Treasures</span>
              <span className="material-symbols-outlined relative z-10 text-base group-hover:translate-y-0.5 transition-transform">
                expand_more
              </span>
              <motion.span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 0.9 }}
              />
            </motion.button>
          </div>
        )}
      </div>
    </main>
  );
}
