import React from "react";
import useTheme from "../hooks/useTheme";

const InputName = ({ readOnly }) => {
  const [theme, updateTheme] = useTheme();

  if (readOnly) {
    return <div style={{ color: theme.textColor }}>{theme.brandName}</div>;
  }
  return (
    <div>
      <input
        className="border-gray-200 border-2 rounded px-2"
        type="text"
        onChange={(e) => {
          updateTheme({ brandName: e.currentTarget.value });
        }}
        value={theme.brandName}
        placeholder="Brand Name"
      />
    </div>
  );
};

export default InputName;
