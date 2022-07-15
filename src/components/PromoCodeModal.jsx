import { Transition } from "@headlessui/react";
import {
  TagIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
  ShieldCheckIcon,
  XIcon,
} from "@heroicons/react/solid";
import { useState, Fragment } from "react";
import CopyableItem from "./CopyableItem";
import useCart from "../hooks/useCart";

const PromoCardModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const [{ coupons }] = useCart();
  console.log("c", coupons);
  return (
    <div
      className={`"shadow-lg absolute bg-slate-800 bottom-0 right-[360px] p-6 pt-5 rounded-t-lg w-[300px] transition-transform ${
        isShowing ? "translate-y-0" : "translate-y-[197px]"
      }`}
    >
      <div
        className="flex justify-between cursor-pointer pb-6"
        onClick={() => setIsShowing(!isShowing)}
      >
        <div className="flex">
          <TagIcon className="w-5 h-5 text-white" />
          <div className="text-white text-sm font-light ml-2">TEST COUPONS</div>
        </div>
        {isShowing ? (
          <ChevronDownIcon className="w-5 h-5 text-white" />
        ) : (
          <ChevronUpIcon className="w-5 h-5 text-white" />
        )}
      </div>
      <div>
        {coupons.map(({ name, valid, id }) => {
          return (
            <CopyableItem
              key={id}
              Icon={valid ? CheckIcon : XIcon}
              RightComponent={
                <div className="flex items-center gap-1">
                  <div
                    className={`text-sm ${
                      valid ? "text-green-800" : "text-red-500"
                    }`}
                  >
                    {name}
                  </div>
                </div>
              }
              title={valid ? "Success" : "Expired"}
              color={valid ? "text-green-800" : "text-red-500"}
              value="SAVE10"
            />
          );
        })}
        <div className="text-sm text-white font-light mt-5 pb-6">
          Click to copy the promotion code you want to apply.
        </div>
      </div>
    </div>
  );
};

export default PromoCardModal;
