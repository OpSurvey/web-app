import { loadStripe } from "@stripe/stripe-js";

async function checkout({ lineItems }) {
  let stripePromise = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
    }
    return stripePromise;
  };

  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}/quote/thank-you/id`,
    cancelUrl: window.location.origin,
  });
}

export default function Payment(props) {
  return (
    <button
      type="button"
      className={
        "bg-lime-400 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
      }
      onClick={() => {
        checkout({
          lineItems: [
            {
              price: "price_1Lfa56EAka5mfhGRoCSaIdW4",
              quantity: 1,
            },
          ],
          quoteId: props.quoteId,
        });
      }}
    >
      Pagar cotización
    </button>
  );
}
