import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SK, {
  apiVersion: "2020-08-27; orders_beta=v3;",
});

export default async function handler(req, res) {
  const {
    query: { id, name },
    method,
  } = req;

  switch (method) {
    case "POST":
      const { line_items } = JSON.parse(req.body);

      if (!line_items || !line_items.length)
        return res
          .status(400)
          .json({ error: "You must specify an array of line_items" });

      try {
        const order = await stripe.orders.create({
          // line_items: [{ product: "prod_LqSb8aqKDehFd7", quantity: 1 }],
          line_items,
          payment: { settings: { payment_method_types: ["card"] } },
          expand: ["line_items"],
          currency: "usd",
        });

        res.status(200).json({ clientSecret: order.client_secret });
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
