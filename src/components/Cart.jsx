import React from "react";
import { formatDollars } from "../helpers";
import CartItem from "./CartItem";

const ITEMS = [
  {
    image:
      "https://images.unsplash.com/photo-1622147681210-d7da05b4a7d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80",
    name: "The Chair",
    price: 12000,
    id: 1,
  },
  {
    image:
      "https://images.unsplash.com/photo-1616627451515-cbc80e5ece35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
    name: "The Sofa",
    price: 140000,
    id: 2,
  },
];

const TAX_RATE = 0.0275;

const Cart = () => {
  const [items, setItems] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  const fetchItems = async () => {
    setItems(ITEMS.map((item) => ({ ...item, quantity: 1 })));
    setLoading(false);
  };

  const onChangeQuantity = (amount, id) => {
    const index = items.findIndex((item) => item.id === id);
    const item = items[index];

    const quantity = item.quantity + amount;

    if (quantity < 1) return;

    const newItems = [
      ...items.slice(0, index),
      { ...item, quantity },
      ...items.slice(index + 1),
    ];
    setItems(newItems);
  };

  const subTotal = React.useMemo(() => {
    return items.reduce(
      (total, item) => total + (item.price / 100) * item.quantity,
      0
    );
  }, [items]);

  const tax = React.useMemo(() => {
    return subTotal * TAX_RATE;
  }, [items]);

  React.useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <CartItem key={item.id} onChangeQuantity={onChangeQuantity} {...item} />
      ))}
      <div className="h-[1px] w-full bg-gray-200 my-6" />
      <div className="my-1 flex justify-between items-center">
        <div className="text-sm">Subtotal</div>
        <div className="text-sm font-light">{formatDollars(subTotal)}</div>
      </div>
      <div className="my-2 flex justify-between items-center">
        <div className="text-sm">Tax Estimate</div>
        <div className="text-sm font-light">{formatDollars(tax)}</div>
      </div>
      <div className="h-[1px] w-full bg-gray-200 my-6" />
      <div className="my-1 flex justify-between items-center mb-32">
        <div className="text-sm">Total</div>
        <div className="text-sm text-light">
          {formatDollars(subTotal + tax)}
        </div>
      </div>
    </div>
  );
};

export default Cart;
