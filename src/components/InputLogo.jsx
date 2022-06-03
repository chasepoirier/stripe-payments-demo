import React from "react";

const InputLogo = ({ readOnly }) => {
  if (readOnly) {
    return (
      <div className="border-dashed border-blue border-2 bg-blue-light w-[44px] h-[44px] rounded-[22px] cursor-pointer" />
    );
  }
  return (
    <div>
      <input
        type="file"
        className="pt-50 box-border border-dashed border-blue border-2 bg-blue-light w-[44px] h-[44px] rounded-[22px] cursor-pointer"
      />
    </div>
  );
};

export default InputLogo;
