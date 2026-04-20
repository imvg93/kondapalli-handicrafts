import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const HERITAGE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD9oPYl-e6My2uOJhA-R_5BhjOPGAZKuRJ-hnA5gjexSA-KUbIY42VCtUjQdzW5RNU7NIaWfija51hzOx2E2fCs6wECteneKbGzyoq1kNxp01c3C_YvIU83LsqILOi4m0tbiLviFAhbnhFGHSxG9H8f-Fncvi2rledKKK9hOE_rn9xpybChP14G17R6OKBn_WtnDcpzgnMW9bN5165gZSweCypmRHsmLM9b0J_aUQsQjiNSibO4Ta7-uCpeEjEu0tM4Pqsy1JbC-jM";

export function Heritage() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="w-full flex flex-col lg:flex-row items-center bg-surface-container-high rounded-DEFAULT overflow-hidden"
    >
      <div className="relative w-full lg:w-1/2 h-[260px] md:h-[360px] lg:h-[520px] overflow-hidden">
        <motion.img
          alt="Artisan Hands"
          src={HERITAGE_IMAGE}
          style={{ scale: imgScale, y: imgY }}
          className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80"
        />
      </div>

      <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-16 flex flex-col gap-5 md:gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-headline text-3xl md:text-4xl text-on-surface tracking-tight leading-tight"
        >
          A 400-Year Legacy.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="w-12 h-px bg-primary/40"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-sm text-on-surface-variant leading-relaxed"
        >
          Born in the artisan village of Kondapalli, our craft has been passed
          down through generations. We source sustainable Tella Poniki wood,
          shaping it into narratives of mythology, rural life, and royal
          heritage. Each piece is a testament to the enduring spirit of Indian
          craftsmanship, curated for the modern connoisseur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-4"
        >
          <motion.div whileHover={{ x: 6 }} className="w-fit">
            <Link
              to="/about"
              className="font-body text-sm font-semibold text-secondary hover:text-secondary-container border-b border-secondary/30 hover:border-secondary transition-all pb-1 tracking-widest uppercase"
            >
              Read Our Story
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
