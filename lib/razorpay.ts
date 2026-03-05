// Razorpay Standard Checkout — client-side only
// Replace the test key with your live key before going to production

const RAZORPAY_KEY_ID = "rzp_test_XXXXXXXXXXXXX"; // TODO: Replace with your Razorpay key_id

interface RazorpayOptions {
  amount: number; // in paise (₹999 = 99900)
  currency?: string;
  name: string;
  description: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  onSuccess: (response: RazorpaySuccessResponse) => void;
  onFailure: (error: unknown) => void;
  onDismiss?: () => void;
}

export interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    // Already loaded
    if ((window as unknown as Record<string, unknown>).Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export async function openRazorpayCheckout(
  options: RazorpayOptions
): Promise<void> {
  const loaded = await loadRazorpayScript();

  if (!loaded) {
    options.onFailure(new Error("Failed to load Razorpay SDK"));
    return;
  }

  const rzpOptions = {
    key: RAZORPAY_KEY_ID,
    amount: options.amount,
    currency: options.currency || "INR",
    name: options.name,
    description: options.description,
    prefill: options.prefill || {},
    theme: {
      color: "#E87722",
    },
    handler: (response: RazorpaySuccessResponse) => {
      options.onSuccess(response);
    },
    modal: {
      ondismiss: () => {
        options.onDismiss?.();
      },
    },
  };

  const rzp = new ((window as unknown as Record<string, unknown>).Razorpay as new (opts: typeof rzpOptions) => { open: () => void })(rzpOptions);
  rzp.open();
}
