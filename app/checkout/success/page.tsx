"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id") || "N/A";
  const email = searchParams.get("email") || "your email";
  const productName = searchParams.get("product") || "ShopDesk";

  return (
    <section className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="mx-auto max-w-md text-center">
        {/* Success icon with CSS animation */}
        <div className="success-check-container mb-6 inline-flex">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal/10">
            <CheckCircle size={48} className="text-teal success-check" />
          </div>
        </div>

        <h1 className="mb-2 font-[var(--font-heading)] text-[1.75rem] font-extrabold text-navy md:text-[2.25rem]">
          Payment Successful!
        </h1>
        <p className="mb-6 text-base text-mid-grey">
          Thank you for purchasing <strong>{productName}</strong>.
        </p>

        {/* Order details */}
        <div className="mb-8 rounded-2xl border border-navy/5 bg-white p-6 text-left">
          <h2 className="mb-3 text-sm font-bold tracking-wider text-mid-grey uppercase">
            Order Details
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-mid-grey">Product</span>
              <span className="font-medium text-navy">{productName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-mid-grey">Payment ID</span>
              <span className="font-mono text-xs text-navy">{orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-mid-grey">Delivered to</span>
              <span className="font-medium text-navy">{email}</span>
            </div>
          </div>
        </div>

        {/* Next steps */}
        <div className="mb-8 rounded-2xl border border-navy/5 bg-white p-6 text-left">
          <h2 className="mb-3 text-sm font-bold tracking-wider text-mid-grey uppercase">
            Next Steps
          </h2>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/10 text-xs font-bold text-orange">
                1
              </span>
              <span className="text-sm text-navy/80">
                Check your email at <strong>{email}</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/10 text-xs font-bold text-orange">
                2
              </span>
              <span className="text-sm text-navy/80">
                Download the file from the link in the email
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange/10 text-xs font-bold text-orange">
                3
              </span>
              <span className="text-sm text-navy/80">
                Open in Google Sheets and start using ShopDesk
              </span>
            </li>
          </ol>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20just%20purchased%20ShopDesk%20and%20need%20help"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-navy/5 min-h-[48px]"
          >
            Need help? WhatsApp us
          </a>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-hover min-h-[48px]"
          >
            Back to Shop →
          </Link>
        </div>

        {/* Success animation styles */}
        <style jsx>{`
          .success-check {
            animation: checkBounce 0.6s ease-out;
          }
          .success-check-container {
            animation: fadeInScale 0.4s ease-out;
          }
          @keyframes checkBounce {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          @keyframes fadeInScale {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <section className="flex min-h-screen items-center justify-center bg-cream">
          <p className="text-mid-grey">Loading...</p>
        </section>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
