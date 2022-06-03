import React from "react";
import { THEME } from "../constants";

const initialTheme = {
  scheme: THEME.LIGHT,
  shipping: false,
  phone: false,
  autoPayments: false,
  saveCard: false,
  promoCode: false,
  logo: "",
  brandName: "",
  primaryColor: "#5469D4",
  backgroundColor: "#AAAAAA",
  textColor: "#222222",
  fontFamily: "open-sans",
  spacing: 2,
  borderRadius: 2,
  fontSize: 16,
  dispatch: () => {},
};

const reducer = (state, action) => {
  console.log(state, action);
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
