"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cloud/90 backdrop-blur-md shadow-[0_1px_0_rgba(16,32,29,0.08)]"
          : "bg-cloud/0"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
           <img
              src="/imllogo.png"
              alt="Gia Property Talks"
              className="h-[120px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-ink-soft hover:text-teal-deep transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:5158097947"
            className="flex items-center gap-2 text-[15px] font-medium text-ink-soft hover:text-teal-deep transition-colors"
          >
            <Phone size={16} strokeWidth={2.4} />
            515.809.7947
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-teal-deep px-5 py-2.5 text-[14px] font-semibold text-cloud shadow-button hover:bg-teal-mid hover:-translate-y-0.5 transition-all"
          >
            Apply Now
            <ArrowUpRight size={16} strokeWidth={2.6} />
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-cloud">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink-soft hover:bg-teal-soft hover:text-teal-deep transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:5158097947"
              className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink-soft flex items-center gap-2"
            >
              <Phone size={16} /> 515.809.7947
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-teal-deep px-5 py-3 text-[15px] font-semibold text-cloud shadow-button"
            >
              Apply Now
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
