import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IMG = {
  workshop:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA2Q5H73wYe88t75zDL5PbDtSXgAce4ygdbQp0_Jyt7JMNtNe1-r-bLlIk44q4i8apPx_yQo1q4omnaCTeE_2TKrtfIk2QR1oYERMikGQQotDqZb41eQiF_20EstJs4orl3MDYVWxNBr2hUvhshw0ZgEX_1WYfkJ6vosM5j7xL7uMnB_Zbrhonss8tbHUtuSPS79vH89E1g-eoPyDrMFDartI8n8kFhudsPEgdbwuSivycJMZGuAdNhEZXASkDlrw2EliXk77X8l8k",
  village:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAifsTNsNzw4JgGYsA-hgmYZ7cDnV2YujTAhQ8nOZMHtVZpgFdlSIbbGjnmuEgfXH4oNytXi2uyf487raUvya8QWxDeOEargnWLL7ga5-4_BmWqorfUfQdowA9ijSI1HCegIbihKqc_CXfIyho5YUA8JsiLovAnyubTBnqAb6hVe7Q7HtHDuM3SFZ7Ti5qcl66IT8-OqD8pQSsE5XH0l34P8ilBIefNJDCicZbhPBJpQkqZ2zDCrSLetAuxeLq2Y6z1XuAuHCLkglU",
  master:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCewouM3ZPyX_xUtvoxmGjwwvWOgjf-FbBZkiSrXuBDCUhB7bcaMVRRHXunHSLlC76_PrBuRYBWdpX1DjeJ3wmhWettVilxLZv6XoMI8pJginB6_O422pOwKME0bO7KHHm6rPwZVspL9b4A3QdIf0qaJEZYLigiEcf-CH_bW7J9CKp9nQEOKnEvvs8oOg7D3KsWbKr4YYJPJzTUgB7aTDBiWK5KgYtlulTGvsXbTigXbolkofBI_FbWKJpJH0_B1IZaFmyPFY0Czfk",
};

const TEAM_IMG = (seed: number) => `https://i.pravatar.cc/320?img=${seed}`;

const ease = [0.22, 1, 0.36, 1] as const;

function Hero() {
  return (
    <section className="px-4 sm:px-6 md:px-10 max-w-6xl mx-auto pt-6 md:pt-10 pb-10 md:pb-14">
      <div className="flex flex-col items-center text-center gap-5">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.3em] uppercase text-primary"
        >
          About Us
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="font-headline text-3xl md:text-5xl text-on-surface tracking-tight leading-[1.1] max-w-3xl"
        >
          We preserve the soul of{" "}
          <span className="italic text-primary">Kondapalli</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-body text-sm md:text-base text-on-surface-variant max-w-xl leading-relaxed"
        >
          A small atelier supporting 120+ Nakashi artisans in Andhra Pradesh —
          bringing four centuries of wooden storytelling to modern homes.
        </motion.p>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="px-4 sm:px-6 md:px-10 max-w-6xl mx-auto py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col gap-5"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-secondary">
            Our Mission
          </span>
          <h2 className="font-headline text-2xl md:text-3xl text-on-surface tracking-tight leading-tight">
            Honest craft, paid fairly.
          </h2>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            Kondapalli Handicrafts works directly with master carvers in the Toy
            Colony of Kondapalli village. No middlemen, no outsourced
            assembly. Every piece is signed by its artisan and certified by
            the Nakashi Guild.
          </p>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            We invest 15% of every sale back into the colony — healthcare,
            apprenticeship grants, and sustainable wood stewardship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="relative"
        >
          <img
            src={IMG.workshop}
            alt="Artisan workshop"
            className="w-full aspect-[4/3] object-cover rounded-DEFAULT"
          />
        </motion.div>
      </div>
    </section>
  );
}

type Milestone = { year: string; title: string; body: string };

const milestones: Milestone[] = [
  {
    year: "1624",
    title: "The Origin",
    body: "Nakashi artisans settle in Kondapalli village under the Vijayanagara kings.",
  },
  {
    year: "1947",
    title: "GI Recognition",
    body: "Kondapalli toys are among India's earliest Geographic Indication crafts.",
  },
  {
    year: "1990",
    title: "First Exports",
    body: "Pieces find their way into European museums and private collections.",
  },
  {
    year: "2018",
    title: "The Atelier",
    body: "Kondapalli Handicrafts is founded to connect artisans directly to collectors.",
  },
  {
    year: "2024",
    title: "Global Reach",
    body: "3,400+ collectors across 48 countries own a signed Kondapalli piece.",
  },
];

function Timeline() {
  return (
    <section className="px-4 sm:px-6 md:px-10 max-w-6xl mx-auto py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        className="flex flex-col items-center text-center gap-3 mb-10"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-secondary">
          Our Journey
        </span>
        <h2 className="font-headline text-2xl md:text-3xl text-on-surface tracking-tight">
          Four centuries, carved in wood
        </h2>
      </motion.div>

      <div className="relative">
        <div className="hidden md:block absolute top-4 left-0 right-0 h-px bg-outline-variant/40" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-4">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease }}
              className="relative flex flex-col gap-3 bg-surface-container-lowest border border-outline-variant/25 rounded-DEFAULT p-5 hover:border-primary/40 hover:ambient-shadow transition-all"
            >
              <span className="hidden md:block absolute -top-[5px] left-5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
              <span className="font-headline italic text-2xl text-primary">
                {m.year}
              </span>
              <h3 className="font-headline text-base text-on-surface">
                {m.title}
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {m.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Value = { icon: string; title: string; body: string };

const values: Value[] = [
  {
    icon: "handyman",
    title: "Heritage Craft",
    body: "Hand-carving techniques preserved through seven generations of master artisans.",
  },
  {
    icon: "forest",
    title: "Sustainable Wood",
    body: "Only responsibly harvested Tella Poniki, paired with organic vegetable dyes.",
  },
  {
    icon: "payments",
    title: "Fair Trade",
    body: "Artisans earn 3× the regional average, paid per piece — never by quota.",
  },
  {
    icon: "diversity_1",
    title: "Community First",
    body: "15% of every sale funds healthcare, schooling, and apprenticeships in Kondapalli.",
  },
];

function Values() {
  return (
    <section className="px-4 sm:px-6 md:px-10 max-w-6xl mx-auto py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
      >
        <div className="flex flex-col gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-secondary">
            What We Stand For
          </span>
          <h2 className="font-headline text-2xl md:text-3xl text-on-surface tracking-tight">
            Four quiet commitments
          </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease }}
            whileHover={{ y: -3 }}
            className="group bg-surface-container-lowest border border-outline-variant/25 rounded-DEFAULT p-5 flex flex-col gap-3 hover:border-primary/40 hover:ambient-shadow transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined text-lg">
                {v.icon}
              </span>
            </div>
            <h3 className="font-headline text-base text-on-surface">
              {v.title}
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              {v.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: "400+", label: "Years of heritage" },
  { value: "120", label: "Master artisans" },
  { value: "48", label: "Countries shipped" },
  { value: "15%", label: "Reinvested locally" },
];

function Stats() {
  return (
    <section className="px-4 sm:px-6 md:px-10 max-w-6xl mx-auto py-10 md:py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/30 rounded-DEFAULT overflow-hidden border border-outline-variant/30">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease }}
            className="bg-surface-container-lowest p-6 flex flex-col gap-1.5 items-start"
          >
            <span className="font-headline text-2xl md:text-3xl text-primary tracking-tight">
              {s.value}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-on-surface-variant">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

type Person = { name: string; role: string; img: string };

const team: Person[] = [
  { name: "Sanjeeva Rao", role: "Master Carver · 44 yrs", img: IMG.master },
  { name: "Ravi Kumar", role: "Head of Atelier", img: TEAM_IMG(12) },
  { name: "Lakshmi Devi", role: "Lead Pigment Artist", img: TEAM_IMG(45) },
  { name: "Arun Shetty", role: "Sourcing & Stewardship", img: TEAM_IMG(68) },
];

function Team() {
  return (
    <section className="px-4 sm:px-6 md:px-10 max-w-6xl mx-auto py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
      >
        <div className="flex flex-col gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-secondary">
            The Team
          </span>
          <h2 className="font-headline text-2xl md:text-3xl text-on-surface tracking-tight">
            The hands behind the archive
          </h2>
        </div>
        <Link
          to="/collection"
          className="text-[11px] tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors border-b border-outline-variant pb-1 w-fit"
        >
          See Their Work
        </Link>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {team.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease }}
            whileHover={{ y: -3 }}
            className="group bg-surface-container-lowest border border-outline-variant/25 rounded-DEFAULT overflow-hidden hover:border-primary/40 hover:ambient-shadow transition-all"
          >
            <div className="aspect-square overflow-hidden bg-surface-container">
              <motion.img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 1.2, ease }}
              />
            </div>
            <div className="p-4 flex flex-col gap-0.5">
              <h3 className="font-headline text-base text-on-surface">
                {p.name}
              </h3>
              <span className="text-[10px] tracking-widest uppercase text-on-surface-variant">
                {p.role}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="px-4 sm:px-6 md:px-10 max-w-6xl mx-auto py-10 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="bg-surface-container-low rounded-DEFAULT p-6 md:p-8 flex flex-col gap-4"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary">
            Visit the Atelier
          </span>
          <h3 className="font-headline text-xl md:text-2xl text-on-surface tracking-tight leading-tight">
            Kondapalli Toy Colony
          </h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Artisan Lane, Kondapalli Village,
            <br />
            Krishna District, Andhra Pradesh 521228
            <br />
            India
          </p>
          <p className="text-xs text-on-surface-variant tracking-wide">
            Workshop tours by appointment · Tuesday to Saturday, 10am–4pm IST.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="bg-surface-container-low rounded-DEFAULT p-6 md:p-8 flex flex-col gap-4"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary">
            Get in Touch
          </span>
          <h3 className="font-headline text-xl md:text-2xl text-on-surface tracking-tight leading-tight">
            Speak with a curator
          </h3>
          <div className="flex flex-col gap-2 text-sm text-on-surface-variant">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-base">
                mail
              </span>
              <a
                href="mailto:atelier@kondapalli-handicrafts.com"
                className="hover:text-primary transition-colors"
              >
                atelier@kondapalli-handicrafts.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-base">
                call
              </span>
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-base">
                chat
              </span>
              <span>WhatsApp concierge · Mon–Sat</span>
            </div>
          </div>
          <Link
            to="/collection"
            className="mt-1 w-fit inline-flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-DEFAULT text-[11px] tracking-widest uppercase font-semibold hover:bg-primary-container transition-colors"
          >
            Explore Collection
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <main className="flex-grow pt-20 pb-10">
      <Hero />
      <Mission />
      <Timeline />
      <Values />
      <Stats />
      <Team />
      <Visit />
    </main>
  );
}
