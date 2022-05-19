import React from "react";
import SwitchInput from "./SwitchInput";

const ConfigureOptions = () => {
  return (
    <div className="flex gap-10 gap-y-3 flex-wrap justify-start max-w-2xl">
      <SwitchInput className="w-[28%]" label="Shipping" />
      <SwitchInput className="w-[28%]" label="Automatic Payments" />
      <SwitchInput className="w-[28%]" label="Promo Code" />
      <SwitchInput className="w-[28%]" label="Phone Number" />
      <SwitchInput className="w-[28%]" label="Save Card" />
    </div>
  );
};

export default ConfigureOptions;
