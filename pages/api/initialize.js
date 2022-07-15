import Stripe from "stripe";
import { initStripe } from "../../src/helpers";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { stripeSk } = JSON.parse(req.body);

      const stripe = initStripe(stripeSk);

      if (!stripeSk)
        return res
          .status(400)
          .json({ error: "You must specify a valid Stripe SK" });

      try {
        const products = [];
        const coupons = [];

        const product1Search = await stripe.products.search({
          query: 'name:"Product 1" active:"true"',
        });
        const product2Search = await stripe.products.search({
          query: 'name:"Product 2" active:"true"',
        });

        if (!product1Search.data.length) {
          const p1 = await stripe.products.create({
            name: "Product 1",
            default_price_data: {
              currency: "USD",
              unit_amount: 2000,
              tax_behavior: "exclusive",
            },
            tax_code: "txcd_99999999",
          });

          products.push({ ...p1, price: 2000 });
        } else {
          const product = product1Search.data[0];
          const price = await stripe.prices.retrieve(product.default_price);
          products.push({ ...product, price: price.unit_amount });
        }

        if (!product2Search.data.length) {
          const p2 = await stripe.products.create({
            name: "Product 2",
            default_price_data: {
              currency: "usd",
              unit_amount: 4500,
              tax_behavior: "exclusive",
            },
            tax_code: "txcd_99999999",
          });

          products.push({ ...p2, price: 4500 });
        } else {
          const product = product2Search.data[0];
          const price = await stripe.prices.retrieve(product.default_price);
          products.push({ ...product, price: price.unit_amount });
        }

        const couponsSearch = await stripe.coupons.list({ limit: 2 });

        if (couponsSearch.data.length < 2) {
          const coupon1 = await stripe.coupons.create({
            name: "25OFF",
            percent_off: 25,
          });
          const coupon2 = await stripe.coupons.create({
            name: "EXPIRED",
            percent_off: 25,
            redeem_by: Math.round(new Date().getTime() / 1000),
          });

          coupons.push(coupon1);
          coupons.push({ ...coupon2, valid: false });
        } else {
          coupons.push(...couponsSearch.data);
        }

        console.log(coupons);
        res.status(200).json({ products, coupons });
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
