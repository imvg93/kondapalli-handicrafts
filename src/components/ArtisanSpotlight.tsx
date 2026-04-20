import { motion } from "framer-motion";

const ARTISAN_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD9oPYl-e6My2uOJhA-R_5BhjOPGAZKuRJ-hnA5gjexSA-KUbIY42VCtUjQdzW5RNU7NIaWfija51hzOx2E2fCs6wECteneKbGzyoq1kNxp01c3C_YvIU83LsqILOi4m0tbiLviFAhbnhFGHSxG9H8f-Fncvi2rledKKK9hOE_rn9xpybChP14G17R6OKBn_WtnDcpzgnMW9bN5165gZSweCypmRHsmLM9b0J_aUQsQjiNSibO4Ta7-uCpeEjEu0tM4Pqsy1JbC-jM";

export function ArtisanSpotlight() {
  return (
    <section className="w-full flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="flex items-end justify-between gap-4"
      >
        <div className="flex flex-col gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-secondary">
            Meet the Maker
          </span>
          <h2 className="font-headline text-3xl text-on-surface tracking-tight">
            Ravi Kumar.{" "}
            <span className="italic text-primary">7th generation.</span>
          </h2>
        </div>
        <motion.a
          whileHover={{ x: 4 }}
          href="#"
          className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors border-b border-outline-variant pb-1"
        >
          Read Story
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </motion.a>
      </motion.div>

      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-5 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2 relative h-[240px] sm:h-[320px] md:h-[380px] rounded-DEFAULT overflow-hidden"
        >
          <motion.img
            src={ARTISAN_IMAGE}
            alt="Artisan at work"
            className="w-full h-full object-cover"
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-3 bg-surface-container-lowest rounded-DEFAULT p-6 md:p-10 flex flex-col justify-between gap-6 md:gap-8"
        >
          <div className="flex flex-col gap-5">
            <span className="font-headline italic text-4xl text-primary/30 leading-none">
              "
            </span>
            <p className="font-body text-sm md:text-base text-on-surface leading-relaxed -mt-3">
              At 58, I have spent four decades carving the Ambari elephant — a
              form my great-great-grandfather first shaped for the courts of
              Vijayanagara. Each curve carries a family secret.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 pt-5 md:pt-6 border-t border-outline-variant/30">
            <div className="flex flex-col gap-1">
              <span className="font-headline italic text-xl md:text-2xl text-primary">
                42
              </span>
              <span className="text-[10px] tracking-widest uppercase text-on-surface-variant">
                Years Carving
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-headline italic text-xl md:text-2xl text-primary">
                7th
              </span>
              <span className="text-[10px] tracking-widest uppercase text-on-surface-variant">
                Generation
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-headline italic text-xl md:text-2xl text-primary">
                1,200+
              </span>
              <span className="text-[10px] tracking-widest uppercase text-on-surface-variant">
                Pieces Signed
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
