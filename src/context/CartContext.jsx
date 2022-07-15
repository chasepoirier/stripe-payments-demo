import React from "react";
import { STRIPE_PK, STRIPE_SK } from "../constants";

const initialCart = {
  initialized: false,
  loaded: true,
  order: null,
  items: [
    {
      id: "prod_LqSb8aqKDehFd7",
      quantity: 1,
      title: "The Chair",
      image:
        "https://images.unsplash.com/photo-1622147681210-d7da05b4a7d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80",
      price: 2000,
    },
    {
      id: "prod_LqXZibJG4PqecQ",
      quantity: 1,
      title: "The Sofa",
      image:
        "https://images.unsplash.com/photo-1616627451515-cbc80e5ece35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
      price: 6500,
    },
  ],
  coupons: [
    { name: "25OFF", valid: true, id: "RZCsQy63" },
    { name: "EXPIRED", valid: false, id: "QIBUYvWC" },
  ],
  pk: "",
  sk: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update_item": {
      const {
        payload: { fields, id },
      } = action;
      const index = state.items.findIndex((item) => item.id === id);

      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          {
            ...state.items[index],
            ...fields,
          },
          ...state.items.slice(index + 1),
        ],
      };
    }
    case "set_loaded": {
      const {
        payload: { loaded },
      } = action;

      return {
        ...state,
        loaded,
      };
    }
    case "init": {
      return {
        ...state,
        ...action.payload,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const CartContext = React.createContext(initialCart);

const CartProvider = ({ children }) => {
  const [cart, dispatch] = React.useReducer(reducer, initialCart);

  return (
    <CartContext.Provider value={{ ...cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
