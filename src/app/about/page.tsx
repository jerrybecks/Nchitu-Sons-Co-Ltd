import { WHATSAPP_URL } from "@/lib/data";

export const metadata = {
  title: "About Us — Nchitu & Sons LLC",
  description: "Learn about Nchitu & Sons LLC, a Japan-based exporter of quality used vehicles, machinery, and equipment.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8" style={{ background: "var(--color-bg-alt)" }}>
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{ background: "var(--color-bg)", color: "var(--color-primary)" }}>
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-3">Our Story</h1>
          <p style={{ color: "var(--color-text-muted)" }} className="max-w-xl mx-auto">
            Japan-based exporters committed to quality and reliability.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--color-bg)" }}>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="p-8 rounded-xl border" style={{ background: "var(--color-card-bg)", borderColor: "var(--color-border)" }}>
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="mb-4" style={{ color: "var(--color-text-muted)" }}>
              Nchitu & Sons LLC is a Japan-based company specializing in the export of quality used Japanese vehicles,
              motorcycles, bicycles, scooters, engines, commercial vehicles, industrial machinery, and equipment.
            </p>
            <p style={{ color: "var(--color-text-muted)" }}>
              With years of experience in the Japanese export market, we have built strong relationships with suppliers
              and logistics partners to ensure our customers receive the best products at competitive prices with reliable
              global shipping.
            </p>
          </div>

          <div className="p-8 rounded-xl border" style={{ background: "var(--color-card-bg)", borderColor: "var(--color-border)" }}>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              To be the most trusted bridge between Japan&apos;s quality automotive and industrial products and customers
              worldwide. We believe everyone deserves access to reliable, well-maintained Japanese vehicles and equipment,
              regardless of where they are in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Quality First", desc: "Every product undergoes thorough inspection before export." },
              { title: "Global Reach", desc: "Shipping to Africa, Europe, Middle East, and beyond." },
              { title: "Customer Focus", desc: "Dedicated support from inquiry to delivery." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border text-center"
                style={{ background: "var(--color-card-bg)", borderColor: "var(--color-border)" }}>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition hover:opacity-90"
              style={{ background: "var(--color-primary)" }}>
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
