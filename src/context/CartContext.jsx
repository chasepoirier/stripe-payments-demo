import React from "react";

const initialCart = {
  items: [],
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
          state.items.slice(index + 1),
        ],
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
