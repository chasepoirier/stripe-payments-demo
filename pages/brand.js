import Head from "next/head";
import Image from "next/image";
import BrandOptions from "../src/components/BrandOptions";
import Button from "../src/components/Button";
import ConfigureOptions from "../src/components/ConfigureOptions";
import DemoScreen from "../src/components/DemoScreen";
import Header from "../src/components/Header";
import InitStripe from "../src/components/InitStripe";
import LowerHeader from "../src/components/LowerHeader";
import SwitchInput from "../src/components/SwitchInput";
import UpperHeader from "../src/components/UpperHeader";
import useUpdateUrl from "../src/hooks/useUpdateUrl";

export default function Brand() {
  useUpdateUrl("/brand");
  return (
    <div className="min-h-screen flex flex-col">
      <Header>
        <InitStripe />
        <UpperHeader />
        <LowerHeader label="Customize Appearance" stepNum={2} href="/demo">
          <BrandOptions />
        </LowerHeader>
      </Header>
      <div className="flex-1 bg-gray-100 flex justify-center items-center">
        <DemoScreen />
      </div>
    </div>
  );
}
