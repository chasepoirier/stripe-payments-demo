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
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { ArrowsExpandIcon as ArrowsExpandIconOutline } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const FullScreenDemo = () => {
  const [theme] = useTheme();
  const [{ loaded }] = useCart();
  const { push, asPath } = useRouter();
  const isDark = theme.scheme === THEME.DARK;

  const queryParams = React.useMemo(() => {
    const params = asPath.split("?");

    if (params.length > 1) return "?" + params[1];

    return "";
  }, []);

  return (
    <div className="h-full">
      <div className="flex rounded-br-lg rounded-bl-lg justify-end h-full">
        <div
          className={classNames(
            "transition-colors w-[60%] border-r-[1px] rounded-bl-lg py-20 px-24 max-w-5xl pt-40",
            isDark ? "border-slate-500" : "border-gray-100"
          )}
        >
          {loaded ? (
            <div className="flex items-center gap-3">
              <InputLogo readOnly={true} />
              <InputName readOnly={true} />
            </div>
          ) : null}
          <PaymentBuilder fullScreen={true} />
        </div>
        <div
          className={classNames(
            "transition-colors w-[35%] rounded-br-lg py-20 px-12  pt-40",
            isDark ? "bg-slate-700" : "bg-gray-50",
            "min-h-[700px]"
          )}
        >
          {loaded ? <Cart readOnly={true} /> : null}
        </div>
      </div>
    </div>
  );
};

export default FullScreenDemo;
