import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { classNames } from "../helpers";

const ReactSlider = dynamic(() => import("react-slider"), { ssr: false });

const SliderInput = ({ value, onChange, label, className, min, max, step }) => {
  return (
    <div
      className={classNames(
        "flex-row flex items-center justify-between min-w-fit gap-4",
        className
      )}
    >
      <div className="text-gray-500 text-sm font-light">{label}</div>
      <ReactSlider
        min={min || 0}
        max={max || 100}
        value={value}
        onChange={onChange}
        step={step || 2}
        className="w-28 h-4 flex items-center"
        thumbClassName="active:cursor-grab inline-block h-6 w-6 border-[1px] rounded-full bg-white shadow transform ring-0 text-xs font-light text-center flex items-center justify-center cursor-pointer"
        trackClassName="h-2 bg-gray-200 rounded-full bg-blue"
        // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </div>
  );
};

export default SliderInput;
