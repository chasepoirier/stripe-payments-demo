import React from "react";
import Image from "next/image";
import { classNames, formatDollars } from "../helpers";
import { Dialog, Transition } from "@headlessui/react";
import Modal from "./Modal";
import TextInput from "./TextInput.jsx";
import useTheme from "../hooks/useTheme";

const CartItem = ({
  image,
  id,
  title,
  price,
  quantity,
  onChangeQuantity,
  onChangeMetadata,
  readOnly,
}) => {
  const [open, setOpen] = React.useState(false);
  const [newName, setName] = React.useState(title);
  const [newImage, setImage] = React.useState(image);
  const [theme] = useTheme();
  const { fontFamily, textColor } = theme;
  const color = textColor;
  const toggleModal = () => !readOnly && setOpen(!open);

  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        title="Update Product"
        okTitle="Update"
        onOk={() => onChangeMetadata(id, { title: newName, image: newImage })}
      >
        <>
          <div className="text-gray-800 mb-2">Product Image</div>
          <div className="w-20 h-20 rounded cursor-pointer overflow-hidden border-dashed border-gray-400 border-[1px] bg-blue-light relative">
            {newImage ? (
              <img
                src={newImage}
                alt="logo"
                className="w-20 h-20 rounded absolute top-0 left-0"
              />
            ) : null}
            <input
              onChange={(e) => {
                const [file] = e.currentTarget.files;
                if (file) {
                  setImage(URL.createObjectURL(file));
                }
              }}
              accept="image/*"
              type="file"
              className="pt-[100px] box-border cursor-pointer absolute z-10"
            />
          </div>
          <TextInput
            className="mt-8"
            value={newName}
            onChange={setName}
            placeholder="The Chair"
            label="Product Name"
          />
        </>
      </Modal>
      <div className="flex items-center justify-between mb-6">
        <div
          onClick={toggleModal}
          className={classNames(
            "flex items-center gap-2 relative",
            !readOnly && "cursor-pointer group"
          )}
        >
          {!readOnly && (
            <div className="transition-opacity absolute top-[-8px] left-[-8px] w-6 h-6 rounded-full bg-blue z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <img className="w-3 h-3" src="/edit-white.svg" />
            </div>
          )}
          <Image
            src={image}
            alt="item"
            width={54}
            height={54}
            className="rounded"
          />
          <div>
            <div style={{ fontFamily, color }}>{title}</div>
            <div
              style={{ fontFamily, color, opacity: 0.8 }}
              className="text-sm font-light"
            >
              {formatDollars(price / 100)}
            </div>
          </div>
        </div>
        {readOnly ? (
          <div className="text-sm font-light text-center">x{quantity}</div>
        ) : (
          <div>
            <div
              className="p-[6px] select-none rounded-t-sm border-[1px] border-gray-200 hover:bg-gray-200 transition-colors cursor-pointer"
              onClick={() => onChangeQuantity(1, id)}
            >
              <img src="/caret-up.svg" alt="arrow up" />
            </div>
            <div
              className={classNames(
                "text-sm font-light bg-gray-100 text-center",
                { color }
              )}
            >
              {quantity}
            </div>
            <div
              className="p-[6px] select-none rounded-b-sm border-[1px] border-gray-200 hover:bg-gray-200 transition-colors cursor-pointer"
              onClick={() => onChangeQuantity(-1, id)}
            >
              <img src="/caret-down.svg" alt="arrow down" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartItem;
