import Link from "next/link";
import { COMPANY_NAME, WHATSAPP_URL } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t py-12" style={{ background: "var(--color-bg-alt)", borderColor: "var(--color-border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-lg mb-3" style={{ color: "var(--color-primary)" }}>{COMPANY_NAME}</div>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Your trusted source for quality used Japanese vehicles, machinery, and equipment.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Products</h4>
            <div className="flex flex-col gap-2">
              <Link href="/products#used-cars" className="text-sm hover:opacity-70" style={{ color: "var(--color-text-muted)" }}>Used Cars</Link>
              <Link href="/products#motorcycles" className="text-sm hover:opacity-70" style={{ color: "var(--color-text-muted)" }}>Motorcycles</Link>
              <Link href="/products#commercial-vehicles" className="text-sm hover:opacity-70" style={{ color: "var(--color-text-muted)" }}>Commercial Vehicles</Link>
              <Link href="/products#machinery" className="text-sm hover:opacity-70" style={{ color: "var(--color-text-muted)" }}>Machinery</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Company</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-sm hover:opacity-70" style={{ color: "var(--color-text-muted)" }}>About Us</Link>
              <Link href="/faq" className="text-sm hover:opacity-70" style={{ color: "var(--color-text-muted)" }}>FAQ</Link>
              <Link href="/contact" className="text-sm hover:opacity-70" style={{ color: "var(--color-text-muted)" }}>Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Get in Touch</h4>
            <div className="flex flex-col gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="text-sm hover:opacity-70" style={{ color: "var(--color-text-muted)" }}>
                WhatsApp
              </a>
              <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>Japan-based</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-center text-sm"
          style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}>
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
