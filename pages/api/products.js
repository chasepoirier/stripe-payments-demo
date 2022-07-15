import { initStripe } from "../../src/helpers";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { stripeSk } = JSON.parse(req.body);

      if (!stripeSk)
        return res
          .status(400)
          .json({ error: "You must specify a valid Stripe SK" });

      const stripe = initStripe(stripeSk);

      try {
        const products = await stripe.products.list({ limit: 2 });

        res.status(200).json({ products: products.data });
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
