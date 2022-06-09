import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import TextInput from "./TextInput.jsx";
import Button from "./Button.jsx";

const Modal = ({
  open,
  setOpen,
  okTitle,
  onOk,
  cancelTitle,
  onCancel,
  children,
  title,
}) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={() => setOpen(false)} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-lg w-full rounded-lg bg-white">
              <Dialog.Title className="pt-6 px-6 text-lg">{title}</Dialog.Title>
              <div className="h-[1px] w-full bg-gray-200 my-4" />
              <div className="p-6">{children}</div>
              <div className="h-[1px] w-full bg-gray-200 my-4" />
              <div className="flex justify-end gap-2 px-4 pb-4">
                <Button
                  label={cancelTitle || "Cancel"}
                  className="bg-transparent border-2 border-gray-200 text-gray-500"
                  onClick={() => setOpen(false)}
                />
                <Button
                  onClick={() => {
                    onOk();
                    setOpen(false);
                  }}
                  label={okTitle}
                />
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
