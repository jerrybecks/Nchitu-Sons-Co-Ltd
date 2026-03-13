import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export function ProductCard({ id, name, description, image, features }: ProductCardProps) {
  return (
    <Link href={`/products#${id}`} className="group block">
      <div className="rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        style={{ background: "var(--color-card-bg)", borderColor: "var(--color-border)" }}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <h3 className="absolute bottom-3 left-4 text-white font-semibold text-lg drop-shadow-md">{name}</h3>
        </div>
        <div className="p-5">
          <p className="text-sm mb-3" style={{ color: "var(--color-text-muted)" }}>{description}</p>
          <div className="flex flex-wrap gap-1.5">
            {features.slice(0, 4).map((f) => (
              <span key={f} className="text-xs px-2 py-0.5 rounded-full border"
                style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}>
                {f}
              </span>
            ))}
            {features.length > 4 && (
              <span className="text-xs px-2 py-0.5 rounded-full"
                style={{ color: "var(--color-primary)" }}>
                +{features.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
