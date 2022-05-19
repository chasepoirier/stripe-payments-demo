import React from "react";
import Cart from "./Cart";
import InputLogo from "./InputLogo";
import InputName from "./InputName";
import PaymentBuilder from "./PaymentBuilder";
import PaymentWrapper from "./PaymentWrapper";

const DemoScreen = ({}) => {
  return (
    <div className="max-w-5xl w-[95%] shadow-lg bg-white rounded-lg">
      <div className="px-4 py-[6px] border-b-2 border-gray-100 flex items-center">
        <div className="flex gap-2 mr-10">
          <div className="rounded-lg w-3 h-3 bg-gray-100" />
          <div className="rounded-lg w-3 h-3 bg-gray-100" />
          <div className="rounded-lg w-3 h-3 bg-gray-100" />
        </div>
        <div className="bg-gray-100 py-1 rounded-xl flex flex-1 justify-center items-center">
          <img src="/lock.svg" />
          <div className="text-xs ml-1 text-gray-800 font-light">
            pay.stripe.com
          </div>
        </div>
      </div>
      <div className="flex min-h-[300px] rounded-br-lg rounded-bl-lg justify-end">
        <div className="w-[60%] bg-white border-r-[1px] border-gray-100 rounded-bl-lg py-20 px-24">
          <div className="flex items-center gap-3">
            <InputLogo />
            <InputName />
          </div>
          <PaymentBuilder />
        </div>
        <div className="w-[35%] bg-gray-50 rounded-br-lg py-20 px-12">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default DemoScreen;
