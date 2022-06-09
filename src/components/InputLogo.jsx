import React from "react";
import useTheme from "../hooks/useTheme";

const InputLogo = ({ readOnly }) => {
  const [theme, updateTheme] = useTheme();

  if (readOnly) {
    return (
      <img
        src={theme.logo}
        alt="logo"
        className="w-[44px] h-[44px] rounded-full"
      />
    );
  }
  return (
    <div className="w-[44px] h-[44px] rounded-full cursor-pointer overflow-hidden border-dashed border-blue border-2 bg-blue-light relative">
      {theme.logo ? (
        <img
          src={theme.logo}
          alt="logo"
          className="w-[44px] h-[44px] rounded-full absolute top-0 left-0"
        />
      ) : null}
      <input
        onChange={(e) => {
          const [file] = e.currentTarget.files;
          if (file) {
            updateTheme({ logo: URL.createObjectURL(file) });
          }
        }}
        accept="image/*"
        type="file"
        className="pt-[100px] box-border cursor-pointer absolute z-10"
      />
    </div>
  );
};

export default InputLogo;
