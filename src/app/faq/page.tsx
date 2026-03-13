"use client";

import { useState } from "react";
import { faqs, WHATSAPP_URL } from "@/lib/data";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "var(--color-border)" }}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left font-medium text-base">
        <span>{q}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className={`shrink-0 ml-4 transition-transform ${open ? "rotate-180" : ""}`}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8" style={{ background: "var(--color-bg-alt)" }}>
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{ background: "var(--color-bg)", color: "var(--color-primary)" }}>
            FAQ
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-3">Frequently Asked Questions</h1>
          <p style={{ color: "var(--color-text-muted)" }} className="max-w-xl mx-auto">
            Everything you need to know about ordering from Nchitu & Sons.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--color-bg)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border overflow-hidden"
            style={{ background: "var(--color-card-bg)", borderColor: "var(--color-border)" }}>
            <div className="px-6">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center p-8 rounded-xl border"
            style={{ background: "var(--color-bg-alt)", borderColor: "var(--color-border)" }}>
            <h3 className="font-semibold text-lg mb-2">Still have questions?</h3>
            <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
              We&apos;re happy to help. Reach out to us anytime.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm text-white transition hover:opacity-90"
              style={{ background: "var(--whatsapp)" }}>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
