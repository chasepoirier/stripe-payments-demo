import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { classNames } from "../helpers";

const SelectInput = ({ defaultEnabled, onChange, label, className }) => {
  const [enabled, setEnabled] = useState(defaultEnabled);

  useEffect(() => {
    onChange && onChange(enabled);
  }, [enabled]);

  return (
    <div
      className={classNames(
        "flex-row flex items-center justify-between min-w-fit gap-4",
        className
      )}
    >
      <div className="text-gray-500 text-sm font-light">{label}</div>
    </div>
  );
};

export default SelectInput;
