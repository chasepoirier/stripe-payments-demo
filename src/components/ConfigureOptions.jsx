import React from "react";
import useTheme from "../hooks/useTheme";
import SwitchInput from "./SwitchInput";

const ConfigureOptions = () => {
  const [theme, updateTheme] = useTheme();
  return (
    <div className="flex gap-10 gap-y-3 flex-wrap justify-start max-w-2xl">
      <SwitchInput
        enabled={theme.shipping}
        onChange={(shipping) => updateTheme({ shipping })}
        className="w-[28%]"
        label="Shipping"
      />
      <SwitchInput
        enabled={theme.autoPayments}
        onChange={(autoPayments) => updateTheme({ autoPayments })}
        className="w-[28%]"
        label="Automatic Payments"
      />
      <SwitchInput
        enabled={theme.promoCode}
        onChange={(promoCode) => updateTheme({ promoCode })}
        className="w-[28%]"
        label="Promo Code"
      />
      <SwitchInput
        enabled={theme.phone}
        onChange={(phone) => updateTheme({ phone })}
        className="w-[28%]"
        label="Phone Number"
      />
      <SwitchInput
        enabled={theme.saveCard}
        onChange={(saveCard) => updateTheme({ saveCard })}
        className="w-[28%]"
        label="Save Card"
      />
    </div>
  );
};

export default ConfigureOptions;
