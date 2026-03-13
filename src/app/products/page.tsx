import Image from "next/image";
import { products, WHATSAPP_URL } from "@/lib/data";

export const metadata = {
  title: "Products — Nchitu & Sons LLC",
  description: "Browse our full range of quality used Japanese vehicles, motorcycles, machinery, and equipment.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8" style={{ background: "var(--color-bg-alt)" }}>
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{ background: "var(--color-bg)", color: "var(--color-primary)" }}>
            Our Products
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-3">Full Product Catalog</h1>
          <p style={{ color: "var(--color-text-muted)" }} className="max-w-xl mx-auto">
            Quality used Japanese vehicles, parts, machinery, and equipment — sourced and inspected for reliability.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--color-bg)" }}>
        <div className="max-w-7xl mx-auto space-y-20">
          {products.map((product, i) => (
            <div key={product.id} id={product.id}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center scroll-mt-24`}>
              <div className="lg:w-1/2 w-full">
                <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">{product.name}</h2>
                <p className="text-base mb-5" style={{ color: "var(--color-text-muted)" }}>{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((f) => (
                    <span key={f} className="text-sm px-3 py-1 rounded-full border"
                      style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}>
                      {f}
                    </span>
                  ))}
                </div>
                <a href={`${WHATSAPP_URL}?text=Hi, I'm interested in your ${product.name}. Can you send me more details?`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm text-white transition hover:opacity-90"
                  style={{ background: "var(--whatsapp)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Inquire About {product.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
