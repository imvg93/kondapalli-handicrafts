import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getProductBySlug,
  getRelated,
  WORKSHOP_IMAGE,
} from "../data/products";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [wish, setWish] = useState(false);

  if (!product) {
    return (
      <main className="flex-grow pt-32 pb-24 px-6 max-w-3xl mx-auto text-center flex flex-col gap-6">
        <h1 className="font-headline text-4xl text-on-surface">
          Piece not found.
        </h1>
        <p className="text-on-surface-variant">
          This treasure may have found its collector.
        </p>
        <Link
          to="/collection"
          className="self-center inline-flex items-center gap-2 text-primary border-b border-primary/40 pb-1 text-xs tracking-widest uppercase"
        >
          Back to Collection
        </Link>
      </main>
    );
  }

  const gallery = product.gallery ?? [product.image];
  const related = getRelated(product, 4);

  return (
    <main className="flex-grow pt-20 md:pt-24 pb-12 md:pb-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto w-full">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[10px] md:text-[11px] tracking-widest uppercase text-on-surface-variant flex items-center gap-2 mb-6 md:mb-10 flex-wrap"
      >
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span className="opacity-40">/</span>
        <Link to="/collection" className="hover:text-primary transition-colors">
          Collection
        </Link>
        <span className="opacity-40">/</span>
        <span className="text-on-surface">{product.title}</span>
      </motion.nav>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative group bg-surface-container-low rounded-xl overflow-hidden aspect-square"
          >
            <motion.div
              aria-hidden
              className="absolute -top-10 -left-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                src={gallery[active]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <button
              aria-label="Wishlist"
              onClick={() => setWish((w) => !w)}
              className="absolute top-4 right-4 w-10 h-10 bg-surface-container-lowest/95 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-transform"
            >
              <motion.span
                key={wish ? "on" : "off"}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 16 }}
                className="material-symbols-outlined text-lg"
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

            {product.discount && (
              <span className="absolute bottom-4 left-4 bg-primary text-on-primary text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                {product.discount}
              </span>
            )}
          </motion.div>

          {gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {gallery.map((src, i) => (
                <motion.button
                  key={src + i}
                  onClick={() => setActive(i)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative bg-surface-container-high rounded-lg overflow-hidden aspect-square transition-all ${
                    i === active
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "ring-1 ring-outline-variant/30 hover:ring-primary/40"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-7"
        >
          <div className="flex flex-col gap-3">
            <span className="font-headline italic text-primary text-base">
              {product.tagline}
            </span>
            <h1 className="font-headline text-3xl md:text-4xl text-on-surface tracking-tight leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center text-primary">
                {[0, 1, 2, 3, 4].map((i) => {
                  const full = Math.floor(product.rating);
                  const half = product.rating - full >= 0.5;
                  const kind =
                    i < full
                      ? "star"
                      : i === full && half
                        ? "star_half"
                        : "star_outline";
                  return (
                    <span
                      key={i}
                      className="material-symbols-outlined text-base"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      {kind}
                    </span>
                  );
                })}
              </div>
              <span className="text-xs text-on-surface-variant tracking-wide">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <span className="font-headline text-2xl md:text-3xl text-primary">
                {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-outline line-through">
                  {product.oldPrice}
                </span>
              )}
              {product.discount && (
                <span className="bg-secondary-container text-on-secondary-container px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {product.discount}
                </span>
              )}
            </div>
          </div>

          <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface-container-low p-3.5 rounded-lg flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-lg"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                verified_user
              </span>
              <span className="text-xs font-semibold text-on-surface">
                GI Tagged Authenticity
              </span>
            </div>
            <div className="bg-surface-container-low p-3.5 rounded-lg flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary text-lg"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                volunteer_activism
              </span>
              <span className="text-xs font-semibold text-on-surface">
                Direct from Artisans
              </span>
            </div>
          </div>

          <ul className="flex flex-col gap-2.5">
            {product.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-secondary text-base mt-0.5">
                  check_circle
                </span>
                <span className="text-sm text-on-surface-variant">{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center bg-surface-container-low rounded-DEFAULT overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-11 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
                aria-label="Decrease quantity"
              >
                <span className="material-symbols-outlined text-base">
                  remove
                </span>
              </button>
              <span className="w-10 text-center font-headline text-base text-on-surface">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-11 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center"
                aria-label="Increase quantity"
              >
                <span className="material-symbols-outlined text-base">add</span>
              </button>
            </div>
            <span className="text-xs tracking-widest uppercase text-on-surface-variant">
              In stock · ships in 3 days
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-secondary text-on-secondary py-3.5 px-6 rounded-DEFAULT flex items-center justify-center gap-2 text-xs tracking-widest uppercase font-bold shadow-lg shadow-secondary/20 hover:bg-secondary-dim transition-colors"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Order via WhatsApp</span>
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden bg-gradient-to-br from-primary to-primary-container text-on-primary py-3.5 px-6 rounded-DEFAULT flex items-center justify-center gap-2 text-xs tracking-widest uppercase font-bold shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-base relative z-10">
                shopping_bag
              </span>
              <span className="relative z-10">Add to Cart</span>
              <motion.span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 0.9 }}
              />
            </motion.button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-5 border-t border-outline-variant/30">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] tracking-widest uppercase text-on-surface-variant">
                Dimensions
              </span>
              <span className="font-headline italic text-primary text-base">
                {product.dimensions}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] tracking-widest uppercase text-on-surface-variant">
                Wood
              </span>
              <span className="font-headline italic text-primary text-base">
                {product.wood}
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-14 md:mt-20 relative overflow-hidden rounded-xl bg-inverse-surface">
        <div className="absolute inset-0 opacity-40">
          <img
            src={WORKSHOP_IMAGE}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#110e06] via-[#110e06]/70 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 px-6 py-12 md:px-14 md:py-24 max-w-2xl text-inverse-on-surface"
        >
          <h2 className="font-headline text-2xl md:text-4xl text-white mb-5 leading-tight">
            The Soul of Kondapalli
          </h2>
          <p className="font-headline italic text-lg md:text-xl text-primary-fixed-dim mb-6">
            A 400-year legacy carved into every piece.
          </p>
          <div className="flex flex-col gap-4 text-stone-300 font-body text-sm md:text-base leading-relaxed">
            <p>
              The journey of a Kondapalli toy begins in the Tella Poniki hills.
              Our artisans, known as <em>Aryakhastriyas</em>, treat the wood
              with natural pastes of tamarind seed and sawdust, creating a
              smooth canvas for the intricate Nakashi process.
            </p>
            <p>
              Every "Ambari" — the royal elephant seat — is hand-painted with
              brushes made from fine squirrel hair. It is not just a toy; it is
              a piece of history that survived empires to find a place in your
              home.
            </p>
          </div>
          <Link
            to="/"
            className="mt-8 group inline-flex items-center gap-2 text-white font-bold tracking-widest uppercase text-[11px] border-b border-primary-fixed-dim pb-1 hover:text-primary-fixed-dim transition-colors"
          >
            <span>Explore Our Heritage</span>
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </motion.div>
      </section>

      <section className="mt-14 md:mt-20 flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-3"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-secondary">
              Curated Treasures
            </span>
            <h2 className="font-headline text-2xl md:text-3xl text-on-surface tracking-tight">
              Hand-picked additions for your collection
            </h2>
          </div>
          <Link
            to="/collection"
            className="text-primary text-[11px] tracking-widest uppercase font-semibold border-b border-primary/40 pb-1 w-fit hover:border-primary transition-colors"
          >
            View All Products
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {related.map((r, i) => (
            <motion.div
              key={r.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <Link
                to={`/product/${r.slug}`}
                className="group block bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/20 hover:border-primary/30 hover:ambient-shadow transition-all"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-surface-container-low">
                  <motion.img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <h3 className="font-headline text-base text-on-surface px-1">
                  {r.title}
                </h3>
                <div className="flex items-end justify-between px-1 pt-2">
                  <span className="font-headline italic text-primary">
                    {r.price}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-on-surface-variant group-hover:text-primary transition-colors">
                    View
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
