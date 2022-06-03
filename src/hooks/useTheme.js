import React from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function useTheme() {
  const { dispatch, ...theme } = React.useContext(ThemeContext);

  const updateTheme = (updatedTheme) => {
    dispatch({ type: "update", payload: updatedTheme });
  };

  return [theme, updateTheme];
}
