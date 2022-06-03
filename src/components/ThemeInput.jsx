import { useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { SketchPicker } from "react-color";
import { classNames } from "../helpers";

const ThemeInput = ({ dark, onChange, className }) => {
  const [darkMode, setDarkMode] = useState(dark);

  useEffect(() => {
    onChange && onChange(darkMode);
  }, [darkMode]);

  return (
    <div
      className={classNames(
        "flex-row flex items-center justify-between min-w-fit gap-4",
        className
      )}
    >
      <div className="text-gray-500 text-sm font-light">Theme</div>

      <div className="flex items-center gap-2">
        <div
          onClick={() => setDarkMode(false)}
          className={classNames(
            "w-7 h-7 rounded-full border-2 cursor-pointer bg-white transition-all",
            !darkMode ? "border-blue" : "border-gray-300"
          )}
        />
        <div
          onClick={() => setDarkMode(true)}
          className={classNames(
            "w-7 h-7 rounded-full border-2 cursor-pointer bg-slate-900 transition-all",
            darkMode ? "border-blue" : "border-gray-300"
          )}
        />
      </div>
    </div>
  );
};

export default ThemeInput;
