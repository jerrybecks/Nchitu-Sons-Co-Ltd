import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/data";

export const metadata = {
  title: "Contact — Nchitu & Sons LLC",
  description: "Get in touch with Nchitu & Sons LLC for inquiries about Japanese vehicles, machinery, and equipment.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8" style={{ background: "var(--color-bg-alt)" }}>
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{ background: "var(--color-bg)", color: "var(--color-primary)" }}>
            Contact
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-3">Get in Touch</h1>
          <p style={{ color: "var(--color-text-muted)" }} className="max-w-xl mx-auto">
            Ready to place an order or have questions? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--color-bg)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl border" style={{ background: "var(--color-card-bg)", borderColor: "var(--color-border)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#25d36620" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <h3 className="font-semibold">WhatsApp</h3>
                </div>
                <p className="text-sm mb-3" style={{ color: "var(--color-text-muted)" }}>
                  The fastest way to reach us. Send a message anytime.
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium" style={{ color: "var(--color-primary)" }}>
                  +{WHATSAPP_NUMBER} →
                </a>
              </div>

              <div className="p-6 rounded-xl border" style={{ background: "var(--color-card-bg)", borderColor: "var(--color-border)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--color-bg-alt)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <h3 className="font-semibold">Location</h3>
                </div>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  Based in Japan with global shipping capabilities to Africa, Europe, and beyond.
                </p>
              </div>

              <div className="p-6 rounded-xl border" style={{ background: "var(--color-card-bg)", borderColor: "var(--color-border)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--color-bg-alt)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <h3 className="font-semibold">Business Hours</h3>
                </div>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  Monday – Saturday: 9:00 AM – 6:00 PM (JST)<br/>
                  WhatsApp messages are welcome 24/7.
                </p>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="p-8 rounded-xl border" style={{ background: "var(--color-card-bg)", borderColor: "var(--color-border)" }}>
              <h2 className="text-xl font-bold mb-6">Send an Inquiry</h2>
              <form className="space-y-4" action={WHATSAPP_URL} target="_blank">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name</label>
                  <input type="text" placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition focus:ring-2"
                    style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text)" }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Country</label>
                  <input type="text" placeholder="Your country"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition focus:ring-2"
                    style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text)" }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Product Interest</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none"
                    style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text)" }}>
                    <option>Used Cars</option>
                    <option>Tires & Parts</option>
                    <option>Motorcycles</option>
                    <option>Bicycles</option>
                    <option>Scooters</option>
                    <option>Used Car Engines</option>
                    <option>Commercial Vehicles</option>
                    <option>Machinery</option>
                    <option>Equipment</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea rows={4} placeholder="Tell us what you're looking for..."
                    className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none resize-none"
                    style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text)" }} />
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-white transition hover:opacity-90"
                  style={{ background: "var(--color-primary)" }}>
                  Send via WhatsApp
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
