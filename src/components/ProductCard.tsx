import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../data/products";

export type { Product };

type Props = { product: Product; index: number };

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5 text-primary">
      {[0, 1, 2, 3, 4].map((i) => {
        const kind =
          i < full ? "star" : i === full && half ? "star_half" : "star_outline";
        return (
          <span
            key={i}
            className="material-symbols-outlined text-sm"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            {kind}
          </span>
        );
      })}
    </div>
  );
}

export function ProductCard({ product, index }: Props) {
  const [wish, setWish] = useState(false);

  const badgeTone =
    product.badge?.tone === "secondary"
      ? "bg-secondary-container text-on-secondary-container"
      : "bg-tertiary-container text-on-tertiary-container";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4 }}
      transition={{
        delay: index * 0.05,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/20 hover:border-primary/30 hover:ambient-shadow transition-all"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] bg-surface-container-high overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />

          {product.badge && (
            <span
              className={`${badgeTone} absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full`}
            >
              {product.badge.label}
            </span>
          )}

          <button
            aria-label="Add to wishlist"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setWish((w) => !w);
            }}
            className="absolute top-3 right-3 w-9 h-9 bg-surface-container-lowest/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:bg-surface-container-lowest transition-colors active:scale-90"
          >
            <motion.span
              key={wish ? "on" : "off"}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="material-symbols-outlined text-base"
              style={{
                color: wish
                  ? "var(--color-primary)"
                  : "var(--color-on-surface-variant)",
                fontVariationSettings: wish ? '"FILL" 1' : '"FILL" 0',
              }}
            >
              favorite
            </motion.span>
          </button>

          <motion.button
            aria-label="Quick Add"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="absolute bottom-3 right-3 w-10 h-10 bg-surface-container-lowest rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow hover:bg-primary hover:text-on-primary"
          >
            <span className="material-symbols-outlined text-base">
              add_shopping_bag
            </span>
          </motion.button>
        </div>

        <div className="p-4 flex flex-col gap-1.5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-headline text-base text-on-surface truncate">
              {product.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <Stars rating={product.rating} />
              <span className="text-[10px] text-on-surface-variant tracking-wide ml-1">
                ({product.reviews})
              </span>
            </div>
          </div>
          <p className="text-xs text-on-surface-variant tracking-wide">
            {product.subtitle}
          </p>
          <div className="flex justify-between items-end pt-2 mt-1 border-t border-outline-variant/20">
            <span className="font-headline italic text-primary text-base">
              {product.price}
            </span>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-on-surface-variant group-hover:text-primary transition-colors inline-flex items-center gap-1">
              View
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-0.5">
                arrow_forward
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
