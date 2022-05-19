import { useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { SketchPicker } from "react-color";
import { classNames } from "../helpers";

const ColorInput = ({ defaultColor, onChange, label, className }) => {
  const [color, setColor] = useState(defaultColor);

  useEffect(() => {
    onChange && onChange(color);
  }, [color]);

  return (
    <div
      className={classNames(
        "flex-row flex items-center justify-between min-w-fit gap-4",
        className
      )}
    >
      <div className="text-gray-500 text-sm font-light">{label}</div>

      <Popover className="relative">
        <Popover.Button
          style={{ backgroundColor: color }}
          className="w-7 h-7 rounded-full border-2 border-gray-300 cursor-pointer"
        />

        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="absolute z-10 origin-top-left select-none"
        >
          <Popover.Panel>
            <SketchPicker
              color={color}
              onChange={(color) => setColor(color.hex)}
            />
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default ColorInput;
