import Head from "next/head";
import Image from "next/image";
import Button from "../src/components/Button";
import Header from "../src/components/Header";
import SwitchInput from "../src/components/SwitchInput";
import UpperHeader from "../src/components/UpperHeader";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden relative">
      <Header>
        <UpperHeader />
      </Header>
      <div className="flex items-center flex-col justify-center mt-20">
        <h1 className="text-center text-3xl">The Payment Element</h1>
        <p className="text-center text-gray-400 font-light mt-1 mb-5">
          Explore the capabilities of the customizable Stripe Payment Element
        </p>
        <Button className="mb-8" href="/configure" label="Get Started" />
        <div className="max-w-6xl w-[95%] relative xl:h-[674px] lg:h-[650px] md:h-[574px] h-[400px]">
          <Image
            src="/intro.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
          />
        </div>
        <div className="absolute top-[450px] w-full left-0 right-0 bg-gray-50 h-screen -z-10" />
      </div>
    </div>
  );
}
