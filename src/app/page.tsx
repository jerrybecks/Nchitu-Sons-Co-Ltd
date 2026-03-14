import Link from "next/link";
import Image from "next/image";
import { products, whyChooseUs, WHATSAPP_URL } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--color-hero-from) 0%, var(--color-hero-to) 50%, #0e1a3a 100%)" }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 50% 40%, rgba(217,70,239,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34,211,238,0.08) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(217,70,239,0.06) 0%, transparent 40%)"
          }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="mb-8 flex justify-center">
            <Image src="/logo.png" alt="Nchitu & Sons LLC" width={140} height={140}
              className="drop-shadow-2xl" priority />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Quality Japanese Vehicles,<br />Machinery & Equipment
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Your trusted source for quality used Japanese vehicles, machinery, and equipment.
            Global shipping to Africa, Europe, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products"
              className="px-8 py-3.5 rounded-lg font-semibold text-base transition hover:opacity-90"
              style={{ background: "var(--color-accent)", color: "#fff" }}>
              Explore Products
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-lg font-semibold text-base border-2 border-white/20 text-white hover:bg-white/10 transition">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b" style={{ background: "var(--color-bg)", borderColor: "var(--color-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "1000+", label: "Vehicles Exported" },
              { value: "30+", label: "Countries Served" },
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Customer Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--color-primary)" }}>{stat.value}</div>
                <div className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
              style={{ background: "var(--color-bg-alt)", color: "var(--color-primary)" }}>
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-3">Browse Our Categories</h2>
            <p style={{ color: "var(--color-text-muted)" }} className="max-w-xl mx-auto">
              From reliable used cars to industrial machinery, we source the best from Japan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--color-bg-alt)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
              style={{ background: "var(--color-bg)", color: "var(--color-primary)" }}>
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-3">Why Choose Nchitu & Sons</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-6 rounded-xl border text-center"
                style={{ background: "var(--color-card-bg)", borderColor: "var(--color-border)" }}>
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "var(--color-bg-alt)" }}>
                  {item.icon === "shield" && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                  {item.icon === "globe" && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
                  {item.icon === "headset" && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>}
                  {item.icon === "wallet" && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>}
                </div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--color-primary)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Contact us today to discuss your requirements. We&apos;ll help you find exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-lg font-semibold transition hover:opacity-90 inline-flex items-center justify-center gap-2"
              style={{ background: "var(--whatsapp)", color: "#fff" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
            <Link href="/contact"
              className="px-8 py-3.5 rounded-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition">
              Send Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
