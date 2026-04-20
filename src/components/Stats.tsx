import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 400, suffix: "+", label: "Years of Heritage" },
  { value: 120, suffix: "", label: "Master Artisans" },
  { value: 48, suffix: "", label: "Countries Shipped" },
  { value: 12, suffix: "k+", label: "Pieces Crafted" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/30 rounded-DEFAULT overflow-hidden border border-outline-variant/30">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface-container-lowest p-6 md:p-7 flex flex-col gap-1.5 items-start"
        >
          <span className="font-headline text-3xl md:text-4xl text-primary tracking-tight">
            <Counter to={s.value} suffix={s.suffix} />
          </span>
          <span className="text-[10px] md:text-xs tracking-widest uppercase text-on-surface-variant">
            {s.label}
          </span>
        </motion.div>
      ))}
    </section>
  );
}
