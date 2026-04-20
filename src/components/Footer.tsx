import { Link } from "react-router-dom";

const links: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "Collection", to: "/collection" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-low text-primary font-body text-sm tracking-widest uppercase w-full pt-12 md:pt-16 pb-8 px-5 sm:px-8 md:px-12 border-t border-outline-variant/20">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-4 flex flex-col gap-6 md:flex-row md:justify-between md:items-end border-b border-outline-variant/20 pb-10 mb-6">
          <Link
            to="/"
            className="font-headline not-italic font-bold text-2xl text-primary normal-case tracking-tight hover:text-primary-container transition-colors duration-300"
          >
            Kondapalli Handicrafts
          </Link>
          <nav className="flex flex-wrap gap-5 md:gap-10">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-xs"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="col-span-1 md:col-span-4 text-center md:text-left text-on-surface-variant font-body normal-case tracking-normal text-xs">
          © 2024 Kondapalli Handicrafts. Preserving heritage through handicraft.
        </div>
      </div>
    </footer>
  );
}
