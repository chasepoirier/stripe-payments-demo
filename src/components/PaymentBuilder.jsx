import React from "react";
import Button from "./Button";

const PaymentBuilder = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-between gap-2 h-12">
        <div className="bg-gray-200 rounded flex-1" />
        <div className="bg-gray-200 rounded flex-1" />
        <div className="bg-gray-200 rounded flex-1" />
      </div>
      <div className="bg-gray-200 rounded-sm mt-6 mb-2 w-12 h-3" />
      <div className="bg-gray-200 rounded-sm mb-2 w-full h-10" />
      <div className="bg-gray-200 rounded-sm mt-6 mb-2 w-12 h-3" />
      <div className="bg-gray-200 rounded-sm mb-2 w-full h-10" />
      <div className="bg-gray-200 rounded-sm mt-6 mb-2 w-12 h-3" />
      <div className="bg-gray-200 rounded-sm mb-2 w-full h-10" />
      <Button className="mt-8 bg-gray-700 text-sm py-3" label="Pay Now" />
    </div>
  );
};

export default PaymentBuilder;
