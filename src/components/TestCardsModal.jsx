import { Transition } from "@headlessui/react";
import {
  CreditCardIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from "@heroicons/react/solid";
import { useState, Fragment } from "react";
import CopyableItem from "./CopyableItem";

const TestCardsModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div
      className={`"shadow-lg absolute bg-slate-800 bottom-0 right-20 p-8 pt-6 rounded-t-lg w-[300px] transition-transform ${
        isShowing ? "translate-y-0" : "translate-y-[270px]"
      }`}
    >
      <div
        className="flex justify-between cursor-pointer pb-6"
        onClick={() => setIsShowing(!isShowing)}
      >
        <div className="flex">
          <CreditCardIcon className="w-5 h-5 text-white" />
          <div className="text-white text-sm font-light ml-2">TEST CARDS</div>
        </div>
        {isShowing ? (
          <ChevronDownIcon className="w-5 h-5 text-white" />
        ) : (
          <ChevronUpIcon className="w-5 h-5 text-white" />
        )}
      </div>
      <div>
        <CopyableItem
          Icon={CheckIcon}
          RightComponent={
            <div className="flex items-center gap-1">
              <div className="flex gap-[2px]">
                <div className="h-1 w-1 rounded-full bg-green-800" />
                <div className="h-1 w-1 rounded-full bg-green-800" />
                <div className="h-1 w-1 rounded-full bg-green-800" />
                <div className="h-1 w-1 rounded-full bg-green-800" />
              </div>
              <div className="text-sm text-green-800">4242</div>
            </div>
          }
          title="Success"
          color="text-green-800"
          value="4242424242424242"
        />
        <CopyableItem
          Icon={CheckIcon}
          RightComponent={
            <div className="flex items-center gap-1">
              <div className="flex gap-[2px]">
                <div className="h-1 w-1 rounded-full bg-blue" />
                <div className="h-1 w-1 rounded-full bg-blue" />
                <div className="h-1 w-1 rounded-full bg-blue" />
                <div className="h-1 w-1 rounded-full bg-blue" />
              </div>
              <div className="text-sm text-blue">3220</div>
            </div>
          }
          title="Authentication"
          color="text-blue"
          value="4000000000003220"
        />
        <CopyableItem
          Icon={CheckIcon}
          RightComponent={
            <div className="flex items-center gap-1">
              <div className="flex gap-[2px]">
                <div className="h-1 w-1 rounded-full bg-red-500" />
                <div className="h-1 w-1 rounded-full bg-red-500" />
                <div className="h-1 w-1 rounded-full bg-red-500" />
                <div className="h-1 w-1 rounded-full bg-red-500" />
              </div>
              <div className="text-sm text-red-500">0002</div>
            </div>
          }
          title="Decline"
          color="text-red-500"
          value="4000000000000002"
        />
        <div className="text-sm text-white font-light mt-5 pb-6">
          Click to copy the card number or use any of{" "}
          <span className="text-cyan-500 font-normal">
            <a href="https://stripe.com/docs/testing#cards" target="blank">
              our test cards
            </a>
          </span>
          . Use any future expiration date and three-number CVC.
        </div>
      </div>
    </div>
  );
};

export default TestCardsModal;
