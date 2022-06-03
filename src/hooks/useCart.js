import React from "react";
import { CartContext } from "../context/CartContext";

export default function useCart() {
  const { dispatch, ...cart } = React.useContext(CartContext);

  const updateItem = (id, fields) => {
    dispatch({ type: "update_item", payload: { id, fields } });
  };

  return [cart, updateItem];
}
