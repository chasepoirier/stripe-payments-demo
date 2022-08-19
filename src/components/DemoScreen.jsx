import React, { useState } from "react";
import { THEME } from "../constants";
import { classNames } from "../helpers";
import useCart from "../hooks/useCart";
import useTheme from "../hooks/useTheme";
import Cart from "./Cart";
import InputLogo from "./InputLogo";
import InputName from "./InputName";
import PaymentBuilder from "./PaymentBuilder";
import PaymentWrapper from "./PaymentWrapper";
import { ArrowsExpandIcon } from "@heroicons/react/solid";
import { ArrowsExpandIcon as ArrowsExpandIconOutline } from "@heroicons/react/outline";

const DemoScreen = ({ fullScreen }) => {
  const [theme] = useTheme();
  const [{ loaded }] = useCart();

  const isDark = theme.scheme === THEME.DARK;

  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{ backgroundColor: expanded ? "rgba(0,0,0,.8)" : "transparent" }}
      className={classNames(
        "w-[95%] my-2 max-w-7xl transition-all",
        !fullScreen && "max-w-5xl h-full my-12",
        expanded
          ? "w-full max-w-none h-full my-none absolute top-0 flex p-20 justify-center m-0"
          : ""
      )}
    >
      <div
        className={classNames(
          "w-full shadow-lg bg-white rounded-lg transition-all",
          !fullScreen && "max-w-5xl h-full my-12",
          isDark ? "bg-slate-900" : "bg-white",
          expanded && "w-[90%]"
        )}
      >
        <div
          className={classNames(
            "transition-colors px-4 py-[6px] border-b-2 flex items-center",
            isDark ? "border-slate-800" : "border-gray-100"
          )}
        >
          <div className="flex gap-2 mr-10">
            <div
              className={classNames(
                "transition-colors rounded-lg w-3 h-3",
                isDark ? "bg-slate-800" : "bg-gray-100"
              )}
            />
            <div
              className={classNames(
                "transition-colors rounded-lg w-3 h-3",
                isDark ? "bg-slate-800" : "bg-gray-100"
              )}
            />
            <div
              className={classNames(
                "transition-colors rounded-lg w-3 h-3",
                isDark ? "bg-slate-800" : "bg-gray-100"
              )}
            />
          </div>
          <div
            className={classNames(
              "transition-colors py-1 rounded-xl flex flex-1 justify-center items-center",
              isDark ? "bg-slate-800" : "bg-gray-100"
            )}
          >
            <img src="/lock.svg" />
            <div
              className={classNames(
                "transition-colors text-xs ml-1 font-light",
                isDark ? "text-gray-100" : "text-gray-800"
              )}
            >
              pay.stripe.com
            </div>
          </div>
          {fullScreen && (
            <div onClick={() => setExpanded(!expanded)}>
              {!expanded ? (
                <ArrowsExpandIconOutline
                  className="ml-3 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                  width={20}
                  height={20}
                />
              ) : (
                <ArrowsExpandIcon
                  className="ml-3 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                  width={20}
                  height={20}
                />
              )}
            </div>
          )}
        </div>
        <div
          className="flex min-h-[300px] rounded-br-lg rounded-bl-lg justify-end"
          style={{ height: "calc(100% - 38px)" }}
        >
          <div
            className={classNames(
              "transition-colors w-[60%] border-r-[1px] rounded-bl-lg py-20 px-24",
              isDark ? "border-slate-500" : "border-gray-100"
            )}
          >
            {loaded ? (
              <div className="flex items-center gap-3">
                <InputLogo readOnly={fullScreen} />
                <InputName readOnly={fullScreen} />
              </div>
            ) : null}
            <PaymentBuilder fullScreen={fullScreen} />
          </div>
          <div
            className={classNames(
              "transition-colors w-[35%] rounded-br-lg py-20 px-12",
              isDark ? "bg-slate-700" : "bg-gray-50",
              fullScreen && "min-h-[700px]"
            )}
          >
            {loaded ? <Cart readOnly={fullScreen} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoScreen;
