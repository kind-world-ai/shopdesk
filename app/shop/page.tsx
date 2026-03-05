import { Metadata } from "next";
import { Star } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/cards/product-card";

export const metadata: Metadata = {
  title: "Shop — ShopDesk Products | Professional Business Tools",
  description:
    "Browse ShopDesk products — CRM tools for salons, construction firms, and SMBs. One-time purchase, no subscription. Starting at ₹0.",
  openGraph: {
    title: "ShopDesk Products — Professional Business Tools",
    description:
      "CRM tools for Indian SMBs. One-time purchase starting at ₹0.",
  },
};

export default function ShopPage() {
  return (
    <section className="bg-cream px-4 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Trust bar */}
        <div className="mb-6 flex items-center justify-center gap-2 text-sm text-mid-grey">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={14}
                className={i <= 4 ? "fill-gold text-gold" : "fill-gold/50 text-gold/50"}
              />
            ))}
          </div>
          <span>500+ businesses trust ShopDesk</span>
        </div>

        {/* Heading */}
        <p className="mb-2 text-center text-xs font-bold tracking-wider text-orange uppercase">
          ShopDesk Products
        </p>
        <h1 className="mb-3 text-center font-[var(--font-heading)] text-[1.75rem] font-extrabold text-navy md:text-[2.5rem]">
          Professional Business Tools
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-center text-base text-mid-grey">
          One-time purchase. No subscription. No hidden fees. Download and start
          using in 15 minutes.
        </p>

        {/* Product grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-mid-grey">
          <span>🔒 Secure checkout via Razorpay</span>
          <span>📧 Delivered in 2 minutes</span>
          <span>🔄 Lifetime access</span>
          <span>💬 WhatsApp support</span>
        </div>
      </div>
    </section>
  );
}
