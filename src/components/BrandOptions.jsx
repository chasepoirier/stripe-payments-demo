import React from "react";
import ColorInput from "./ColorInput";
import SliderInput from "./SliderInput";
import SelectInput from "./SelectInput";
import SwitchInput from "./SwitchInput";
import ThemeInput from "./ThemeInput";
import useTheme from "../hooks/useTheme";
import { THEME } from "../constants";

const BrandOptions = () => {
  const [theme, updateTheme] = useTheme();

  return (
    <div className="flex gap-10 gap-y-2 flex-wrap justify-start max-w-2xl">
      <ThemeInput
        dark={theme.scheme === THEME.DARK}
        className="w-[28%]"
        label="Shipping"
        onChange={(darkMode) =>
          updateTheme({ scheme: darkMode ? THEME.DARK : THEME.LIGHT })
        }
      />
      <ColorInput
        defaultColor={theme.textColor}
        className="w-[28%]"
        label="Text Color"
        onChange={(hex) => updateTheme({ textColor: hex })}
      />
      <SliderInput
        className="w-[28%]"
        label="Spacing"
        onChange={(spacing) => updateTheme({ spacing })}
        value={theme.spacing}
      />
      <ColorInput
        defaultColor={theme.primaryColor}
        className="w-[28%]"
        label="Primary Color"
        onChange={(hex) => updateTheme({ primaryColor: hex })}
      />
      <SelectInput className="w-[28%]" label="Font Family" />
      <SliderInput
        onChange={(borderRadius) => updateTheme({ borderRadius })}
        value={theme.borderRadius}
        className="w-[28%]"
        label="Border Radius"
      />
      <ColorInput
        defaultColor={theme.backgroundColor}
        className="w-[28%]"
        label="Background Color"
        onChange={(hex) => updateTheme({ backgroundColor: hex })}
      />
      <div className="w-[28%]" />
      <SliderInput
        onChange={(fontSize) => updateTheme({ fontSize })}
        value={theme.fontSize}
        className="w-[28%]"
        label="Font Size"
      />
    </div>
  );
};

export default BrandOptions;
