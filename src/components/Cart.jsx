import React from "react";
import { formatDollars } from "../helpers";
import useCart from "../hooks/useCart";
import useTheme from "../hooks/useTheme";
import CartItem from "./CartItem";
import PromoCode from "./PromoCode";

const TAX_RATE = 0.0275;

const Cart = ({ readOnly }) => {
  const [cart, updateItem] = useCart();
  const { items } = cart;
  const [theme] = useTheme();
  const [loading, setLoading] = React.useState(true);
  const { fontFamily, textColor } = theme;
  const color = textColor;

  const onChangeQuantity = (amount, id) => {
    const index = items.findIndex((item) => item.id === id);
    const item = items[index];

    const quantity = item.quantity + amount;

    if (quantity < 1) return;

    updateItem(id, { quantity });
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

  return (
    <div>
      {items.map((item) => (
        <CartItem
          readOnly={readOnly}
          key={item.id}
          onChangeQuantity={onChangeQuantity}
          onChangeMetadata={updateItem}
          {...item}
        />
      ))}
      <div className="h-[1px] w-full bg-gray-200 my-6" />
      <div className="my-1 flex justify-between items-center">
        <div style={{ fontFamily, color }} className="text-sm">
          Subtotal
        </div>
        <div style={{ fontFamily, color }} className="text-sm font-light">
          {formatDollars(subTotal)}
        </div>
      </div>
      <div className="my-2 flex justify-between items-center">
        <div style={{ fontFamily, color }} className="text-sm">
          Tax Estimate
        </div>
        <div style={{ fontFamily, color }} className="text-sm font-light">
          {formatDollars(tax)}
        </div>
      </div>
      {theme.promoCode ? <PromoCode readOnly /> : null}
      <div className="h-[1px] w-full bg-gray-200 my-6" />
      <div className="my-1 flex justify-between items-center mb-32">
        <div style={{ fontFamily, color }} className="text-sm">
          Total
        </div>
        <div style={{ fontFamily, color }} className="text-sm text-light">
          {formatDollars(subTotal + tax)}
        </div>
      </div>
    </div>
  );
};

export default Cart;
