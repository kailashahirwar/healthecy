"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  ["Home", "/"],
  ["Services & Care Programmes", "/services"],
  ["International Patients Support", "/international-patients"],
  ["How It Works", "/how-it-works"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-[76px] w-full max-w-[90rem] flex-nowrap items-center justify-between gap-2 px-5 lg:gap-2 lg:px-5 xl:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Healthecy home">
          <img src="/images/logo.png" alt="Healthecy" className="block h-11 w-auto max-w-[220px] object-contain object-left sm:h-12 sm:max-w-[260px]" />
        </Link>
        <nav className="hidden shrink-0 items-center lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`whitespace-nowrap rounded-full px-2 py-2 text-[13px] font-semibold transition-colors hover:bg-secondary hover:text-primary xl:px-2.5 xl:text-sm ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/contact"
            className="hidden whitespace-nowrap rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex xl:px-5"
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="rounded-full border border-border p-2.5 text-primary lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl px-4 py-3 text-lg font-semibold text-primary hover:bg-secondary"
              >
                {label}
              </Link>
            ))}
            <Link href="/faq" className="rounded-2xl px-4 py-3 text-lg font-semibold text-primary hover:bg-secondary">
              FAQs
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
