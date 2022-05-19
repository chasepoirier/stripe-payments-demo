import React from "react";
import ColorInput from "./ColorInput";
import SliderInput from "./SliderInput";
import SelectInput from "./SelectInput";
import SwitchInput from "./SwitchInput";
import ThemeInput from "./ThemeInput";

const BrandOptions = () => {
  return (
    <div className="flex gap-10 gap-y-2 flex-wrap justify-start max-w-2xl">
      <ThemeInput className="w-[28%]" label="Shipping" />
      <ColorInput defaultColor="#222" className="w-[28%]" label="Text Color" />
      <SliderInput className="w-[28%]" label="Spacing" />
      <ColorInput
        defaultColor="#222"
        className="w-[28%]"
        label="Primary Color"
      />
      <SelectInput className="w-[28%]" label="Font Family" />
      <SliderInput className="w-[28%]" label="Border Radius" />
      <ColorInput
        defaultColor="#aaa"
        className="w-[28%]"
        label="Background Color"
      />
      <div className="w-[28%]" />
      <SliderInput className="w-[28%]" label="Font Size" />
    </div>
  );
};

export default BrandOptions;
