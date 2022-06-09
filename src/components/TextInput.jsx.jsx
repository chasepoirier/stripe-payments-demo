import React, { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { classNames } from "../helpers";

const TextInput = ({ value, onChange, label, className, ...rest }) => {
  return (
    <div className={className}>
      <div className="text-gray-800 mb-2">{label}</div>
      <input
        className="transition-all focus:border-gray-600 outline-none px-3 py-2 font-light w-full rounded-lg border-[1px] border-gray-200 text-gray-500 placeholder:text-gray-300"
        {...rest}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default TextInput;
