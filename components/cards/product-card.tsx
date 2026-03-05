import Link from "next/link";
import { Check } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const isPopular = product.badge !== null;
  const isFree = product.price === 0;

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-5 md:p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
        isPopular
          ? "border-2 border-orange bg-white shadow-lg shadow-orange/10"
          : "border border-navy/5 bg-white shadow-sm"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange px-3 py-0.5 text-xs font-bold text-white">
          {product.badge}
        </div>
      )}

      <div
        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${
          isPopular ? "bg-orange/10" : "bg-navy/5"
        }`}
      >
        <product.icon
          size={20}
          className={isPopular ? "text-orange" : "text-navy/60"}
        />
      </div>

      <h3 className="mb-1 text-lg font-bold text-navy">{product.name}</h3>

      <div className="mb-1 flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-navy">
          {product.priceLabel}
        </span>
        {product.originalPriceLabel && (
          <span className="text-sm text-mid-grey line-through">
            {product.originalPriceLabel}
          </span>
        )}
      </div>
      <p className="mb-4 text-xs text-mid-grey">{product.shortDesc}</p>

      <ul className="mb-5 flex-1 space-y-2">
        {product.highlights.slice(0, 4).map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check size={14} className="mt-0.5 shrink-0 text-teal" />
            <span className="text-sm text-navy/80">{f}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2">
        <Link
          href={`/shop/${product.slug}`}
          className="flex w-full items-center justify-center rounded-full border border-navy/20 px-4 py-3 text-sm font-bold text-navy transition-colors hover:bg-navy/5 min-h-[48px]"
        >
          View Details →
        </Link>
        {isFree ? (
          <Link
            href={`/shop/${product.slug}`}
            className="flex w-full items-center justify-center rounded-full bg-navy text-white px-4 py-3 text-sm font-bold transition-colors hover:bg-navy/90 min-h-[48px]"
          >
            Download Free →
          </Link>
        ) : (
          <Link
            href={`/checkout/${product.slug}`}
            className="flex w-full items-center justify-center rounded-full bg-orange px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-hover min-h-[48px]"
          >
            Buy Now — {product.priceLabel} →
          </Link>
        )}
      </div>
    </div>
  );
}
