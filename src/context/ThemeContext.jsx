import React from "react";
import { FONTS, THEME } from "../constants";

const initialTheme = {
  scheme: THEME.LIGHT,
  shipping: false,
  phone: false,
  autoPayments: false,
  wallets: false,
  promoCode: false,
  logo: "https://stripe-demo-furni.onrender.com/images/furni-logo.svg",
  brandName: "",
  primaryColor: "#5469D4",
  backgroundColor: "#fff",
  textColor: "#222222",
  fontFamily: FONTS[0].name,
  spacing: 4,
  borderRadius: 4,
  fontSize: 16,
  dispatch: () => {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const ThemeContext = React.createContext(initialTheme);

const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = React.useReducer(reducer, initialTheme);

  return (
    <ThemeContext.Provider value={{ ...theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
