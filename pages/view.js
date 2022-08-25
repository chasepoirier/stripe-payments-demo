import React from "react";
import Head from "next/head";
import Image from "next/image";
import Button from "../src/components/Button";
import ConfigureOptions from "../src/components/ConfigureOptions";
import DemoScreen from "../src/components/DemoScreen";
import Header from "../src/components/Header";
import LowerHeader from "../src/components/LowerHeader";
import SwitchInput from "../src/components/SwitchInput";
import TestCardsModal from "../src/components/TestCardsModal";
import PromoCodeModal from "../src/components/PromoCodeModal";
import UpperHeader from "../src/components/UpperHeader";
import useTheme from "../src/hooks/useTheme";
import InitStripe from "../src/components/InitStripe";
import useUpdateUrl from "../src/hooks/useUpdateUrl";
import useCart from "../src/hooks/useCart";
import FullScreenDemo from "../src/components/FullScreenDemo";

export default function Demo() {
  const [theme, updateCart] = useTheme();
  const [cart, _, cartDispatch] = useCart();
  const params = useUpdateUrl();

  React.useEffect(() => {
    updateCart(params);

    if (cart.sk !== params.sk) {
      cartDispatch({ type: "init", payload: { sk: params.sk, pk: params.pk } });
    }
  }, []);

  return (
    <div className="h-screen relative overflow-hidden">
      <TestCardsModal />
      {theme.promoCode ? <PromoCodeModal /> : null}

      <InitStripe />
      <Header floating>
        <UpperHeader />
      </Header>

      <div className="flex-1 bg-gray-100 h-full">
        <FullScreenDemo />
      </div>
    </div>
  );
}
