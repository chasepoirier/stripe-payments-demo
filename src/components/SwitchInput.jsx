import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SwitchInput = ({ defaultEnabled, onChange, label }) => {
  const [enabled, setEnabled] = useState(defaultEnabled);

  useEffect(() => {
    onChange && onChange(enabled);
  }, [enabled]);

  return (
    <div className="flex-row inline-flex align-middle justify-between">
      <div className="text-gray-500">{label}</div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? "bg-indigo-600" : "bg-gray-200",
          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
          )}
        />
      </Switch>
    </div>
  );
};

export default SwitchInput;