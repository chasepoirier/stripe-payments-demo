import { initStripe } from "../../src/helpers";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "PATCH": {
      const {
        id,
        data: { zip, coupon },
        stripeSk,
      } = JSON.parse(req.body);
      const stripe = initStripe(stripeSk);

      try {
        const order = await stripe.orders.update(id, {
          discounts: [{ coupon }],
          expand: ["line_items"],
          billing_details: {
            address: {
              postal_code: zip || "90209",
              country: "US",
            },
          },
        });

        res.status(200).json({ clientSecret: order.client_secret, order });
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
      break;
    }
    case "POST": {
      const { line_items, stripeSk, zip, coupon } = JSON.parse(req.body);

      const stripe = initStripe(stripeSk);

      if (!stripeSk)
        return res
          .status(400)
          .json({ error: "You must specify a valid Stripe SK" });

      if (!line_items || !line_items.length)
        return res
          .status(400)
          .json({ error: "You must specify an array of line_items" });

      try {
        const order = await stripe.orders.create({
          line_items,
          payment: {
            settings: {
              payment_method_types: [
                "card",
                "afterpay_clearpay",
                "customer_balance",
              ],
            },
          },
          discounts: [{ coupon }],
          automatic_tax: { enabled: true },
          expand: ["line_items"],
          currency: "usd",
          billing_details: {
            address: {
              postal_code: zip || "90209",
              country: "US",
            },
          },
        });

        res.status(200).json({ clientSecret: order.client_secret, order });
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
      break;
    }
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
