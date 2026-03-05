"use client";

import { useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Shield, Mail, RefreshCw, ChevronDown } from "lucide-react";
import { getProductBySlug } from "@/lib/products";
import { openRazorpayCheckout } from "@/lib/razorpay";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Enter a valid email"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  coupon: z.string().optional(),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

export default function CheckoutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const router = useRouter();

  const [paymentLoading, setPaymentLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [couponOpen, setCouponOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
  });

  if (!product) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-cream px-4">
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold text-navy">
            Product not found
          </h1>
          <Link href="/shop" className="text-orange hover:underline">
            ← Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  if (product.price === 0) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-cream px-4">
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold text-navy">
            This product is free!
          </h1>
          <p className="mb-4 text-mid-grey">No checkout needed.</p>
          <Link
            href={`/shop/${slug}`}
            className="inline-flex rounded-full bg-orange px-6 py-3 font-bold text-white hover:bg-orange-hover"
          >
            Download Free →
          </Link>
        </div>
      </section>
    );
  }

  const onSubmit = async (data: CheckoutForm) => {
    setPaymentLoading(true);
    setError(null);

    try {
      await openRazorpayCheckout({
        amount: product.price * 100, // paise
        name: "ShopDesk",
        description: product.name,
        prefill: {
          name: data.name,
          email: data.email,
          contact: `+91${data.phone}`,
        },
        onSuccess: (response) => {
          router.push(
            `/checkout/success?order_id=${response.razorpay_payment_id}&email=${encodeURIComponent(data.email)}&product=${encodeURIComponent(product.name)}`
          );
        },
        onFailure: () => {
          setError("Payment failed. Please try again.");
          setPaymentLoading(false);
        },
        onDismiss: () => {
          setPaymentLoading(false);
        },
      });
    } catch {
      setError("Something went wrong. Please try again.");
      setPaymentLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-cream px-4 pt-20 pb-16 md:px-8 md:pt-28">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-mid-grey">
          <Link href="/shop" className="hover:text-navy">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy">Checkout</span>
        </nav>

        <h1 className="mb-8 font-[var(--font-heading)] text-[1.5rem] font-extrabold text-navy md:text-[2rem]">
          Complete Your Purchase
        </h1>

        <div className="grid gap-8 md:grid-cols-5">
          {/* Order summary — left/top */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-navy/5 bg-white p-6">
              <h2 className="mb-4 text-sm font-bold tracking-wider text-mid-grey uppercase">
                Order Summary
              </h2>

              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange/10">
                  <product.icon size={20} className="text-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">{product.name}</h3>
                  <p className="text-xs text-mid-grey">{product.shortDesc}</p>
                </div>
              </div>

              <ul className="mb-4 space-y-2">
                {product.highlights.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 shrink-0 text-teal" />
                    <span className="text-sm text-navy/70">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-navy/5 pt-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-mid-grey">Total</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-navy">
                      {product.priceLabel}
                    </span>
                    {product.originalPriceLabel && (
                      <span className="text-sm text-mid-grey line-through">
                        {product.originalPriceLabel}
                      </span>
                    )}
                  </div>
                </div>
                <p className="mt-1 text-right text-xs text-mid-grey">
                  One-time payment. No subscription.
                </p>
              </div>
            </div>
          </div>

          {/* Form — right/bottom */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-navy/5 bg-white p-6"
            >
              <h2 className="mb-4 text-sm font-bold tracking-wider text-mid-grey uppercase">
                Your Details
              </h2>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-navy"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    {...register("name")}
                    className="w-full rounded-xl border border-navy/10 bg-cream px-4 py-3 text-base text-navy outline-none transition-colors focus:border-orange min-h-[48px]"
                    placeholder="Rajesh Kumar"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-navy"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    className="w-full rounded-xl border border-navy/10 bg-cream px-4 py-3 text-base text-navy outline-none transition-colors focus:border-orange min-h-[48px]"
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-navy"
                  >
                    Phone (WhatsApp)
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="flex h-[48px] items-center rounded-xl border border-navy/10 bg-cream px-3 text-sm text-mid-grey">
                      +91
                    </span>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      {...register("phone")}
                      className="w-full rounded-xl border border-navy/10 bg-cream px-4 py-3 text-base text-navy outline-none transition-colors focus:border-orange min-h-[48px]"
                      placeholder="98765 43210"
                      maxLength={10}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Coupon */}
                <div>
                  <button
                    type="button"
                    onClick={() => setCouponOpen(!couponOpen)}
                    className="flex items-center gap-1 text-sm text-mid-grey hover:text-navy"
                  >
                    Have a coupon code?
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${couponOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {couponOpen && (
                    <input
                      type="text"
                      {...register("coupon")}
                      className="mt-2 w-full rounded-xl border border-navy/10 bg-cream px-4 py-3 text-base text-navy outline-none transition-colors focus:border-orange min-h-[48px]"
                      placeholder="Enter coupon code"
                    />
                  )}
                </div>
              </div>

              {/* Error message */}
              {error && (
                <div className="mt-4 rounded-xl bg-alert/10 px-4 py-3 text-sm text-alert">
                  {error}
                </div>
              )}

              {/* Pay button */}
              <button
                type="submit"
                disabled={paymentLoading}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-orange py-4 text-base font-bold text-white transition-colors hover:bg-orange-hover disabled:opacity-60 min-h-[48px]"
              >
                {paymentLoading ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Processing…
                  </>
                ) : (
                  `Pay ${product.priceLabel} with Razorpay`
                )}
              </button>

              {/* Trust signals */}
              <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-mid-grey">
                <span className="flex items-center gap-1">
                  <Shield size={12} className="text-teal" />
                  Secure payment
                </span>
                <span className="flex items-center gap-1">
                  <Mail size={12} className="text-teal" />
                  Instant delivery
                </span>
                <span className="flex items-center gap-1">
                  <RefreshCw size={12} className="text-teal" />
                  7-day refund
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
