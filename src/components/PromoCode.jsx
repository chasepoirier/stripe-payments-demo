import React from "react";
import useCart from "../hooks/useCart";

const PromoCode = ({ readOnly }) => {
  const [cart] = useCart();

  if (readOnly) {
    return (
      <div className="py-2 px-4 bg-gray-300 rounded text-xs inline-block text-gray-700">
        Add a promotion code
      </div>
    );
  }
  return (
    <div>
      <div className="py-2 px-4 bg-gray-300 rounded text-xs inline-block text-gray-700 cursor-pointer">
        Add a promotion code
      </div>
    </div>
  );
};

export default PromoCode;
