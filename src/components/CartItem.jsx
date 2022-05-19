import React from "react";
import Image from "next/image";
import { formatDollars } from "../helpers";

const CartItem = ({ image, id, name, price, quantity, onChangeQuantity }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <Image
          src={image}
          alt="item"
          width={54}
          height={54}
          className="rounded"
        />
        <div>
          <div>{name}</div>
          <div className="text-sm font-light">{formatDollars(price / 100)}</div>
        </div>
      </div>
      <div>
        <div
          className="p-[6px] select-none rounded-t-sm border-[1px] border-gray-200 hover:bg-gray-200 transition-colors cursor-pointer"
          onClick={() => onChangeQuantity(1, id)}
        >
          <img src="/caret-up.svg" alt="arrow up" />
        </div>
        <div className="text-sm font-light bg-gray-100 text-center">
          {quantity}
        </div>
        <div
          className="p-[6px] select-none rounded-b-sm border-[1px] border-gray-200 hover:bg-gray-200 transition-colors cursor-pointer"
          onClick={() => onChangeQuantity(-1, id)}
        >
          <img src="/caret-down.svg" alt="arrow down" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
