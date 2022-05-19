import React from "react";
import { DOCS_LINK } from "../constants";

const UpperHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center mt-5">
      <img className="w-[70px] object-contain" src="/stripe-logo.svg" alt="" />
      <a
        href={DOCS_LINK}
        className="text-blue flex items-center text-sm"
        target="_blank"
      >
        Explore Docs
        <img
          className="w-[13px] h-[13px] object-contain ml-2"
          src="/arrow-blue.svg"
        />
      </a>
    </div>
  );
};

export default UpperHeader;
