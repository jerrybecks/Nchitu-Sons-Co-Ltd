"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "./theme-provider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", opacity: 0.97 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl" style={{ color: "var(--color-primary)" }}>
            <span className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ background: "var(--color-primary)" }}>
              N&S
            </span>
            <span className="hidden sm:inline">Nchitu & Sons</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:opacity-70 transition">Home</Link>
            <Link href="/products" className="text-sm font-medium hover:opacity-70 transition">Products</Link>
            <Link href="/about" className="text-sm font-medium hover:opacity-70 transition">About Us</Link>
            <Link href="/faq" className="text-sm font-medium hover:opacity-70 transition">FAQ</Link>
            <Link href="/contact" className="text-sm font-medium hover:opacity-70 transition">Contact</Link>
            <button onClick={toggle} className="p-2 rounded-lg hover:opacity-70 transition" aria-label="Toggle theme">
              {theme === "light" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              )}
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12"/> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t" style={{ borderColor: "var(--color-border)" }}>
            <div className="flex flex-col gap-2 pt-4">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium hover:opacity-70 transition">
                  {item.label}
                </Link>
              ))}
              <button onClick={toggle} className="px-3 py-2 text-left text-sm font-medium">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
