import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SK);

export default async function handler(req, res) {
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case "POST":
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1400,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
