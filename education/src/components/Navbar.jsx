import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, X, Menu } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors hover:text-wine ${
      isActive ? "text-wine" : "text-ink/70"
    }`;

  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3">
      <nav className="container-wide flex h-[68px] items-center justify-between rounded-full border border-black/[.06] bg-white/90 px-5 shadow-lg backdrop-blur-xl md:px-7">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-wine text-white">
            <span className="text-lg">🎓</span>
          </span>

          <span className="text-[15px] font-bold">
            edu<span className="text-wine">bloom</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-semibold text-white transition hover:bg-wine md:flex"
        >
          Get in touch
          <ArrowUpRight size={14} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full bg-blush md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="container-wide mt-2 rounded-3xl border border-black/5 bg-white p-5 shadow-soft md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block border-b border-black/5 py-3 text-sm font-semibold last:border-0 ${
                  isActive ? "text-wine" : "text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-wine px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}