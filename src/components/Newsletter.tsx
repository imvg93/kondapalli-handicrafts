import { motion } from "framer-motion";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="w-full relative overflow-hidden bg-surface-container-high rounded-DEFAULT p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <motion.div
        aria-hidden
        className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-primary-fixed/30 blur-3xl"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-secondary-fixed/30 blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col gap-3 max-w-md"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-primary">
          The Atelier Dispatch
        </span>
        <h2 className="font-headline text-2xl md:text-3xl text-on-surface tracking-tight leading-tight">
          Private previews of new works,{" "}
          <span className="italic text-primary">before the world sees them</span>.
        </h2>
      </motion.div>

      <motion.form
        onSubmit={(e) => {
          e.preventDefault();
          if (email) setSent(true);
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 flex flex-col gap-3 w-full md:w-auto md:min-w-[380px]"
      >
        <div className="relative flex items-center bg-surface-container-lowest rounded-DEFAULT overflow-hidden border border-outline-variant/40 focus-within:border-primary transition-colors">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@atelier.com"
            className="flex-1 px-5 py-4 bg-transparent text-sm text-on-surface placeholder:text-on-surface-variant/60 outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-on-primary text-xs tracking-widest uppercase px-5 py-4 hover:bg-primary-container transition-colors"
          >
            {sent ? "Subscribed" : "Subscribe"}
          </button>
        </div>
        <p className="text-[10px] tracking-wider text-on-surface-variant">
          Curated once a month. Unsubscribe with grace.
        </p>
      </motion.form>
    </section>
  );
}
