import React, { Fragment } from "react";
import { initializeStripe } from "../api/payments";
import { CartContext } from "../context/CartContext";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import { useRouter } from "next/router";
import { STRIPE_PK, STRIPE_SK } from "../constants";

export default function InitStripe() {
  const { dispatch, initialized, items } = React.useContext(CartContext);

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const params = React.useMemo(() => {
    const query = router.asPath.split("?");
    if (query.length > 1) {
      const params = JSON.parse(
        '{"' +
          decodeURI(query[1].replace(/&/g, '","').replace(/=/g, '":"')) +
          '"}'
      );

      if (params.sk && params.pk) {
        return { sk: params.sk, pk: params.pk };
      }
    }

    return { sk: "", pk: "" };
  });

  React.useEffect(() => {
    if (params.sk && params.pk && !initialized) {
      initStripe(params.pk, params.sk);
    }
  }, [params, initialized]);

  const [pk, setPk] = React.useState("");
  const [sk, setSk] = React.useState("");

  const initStripe = async (pk, sk) => {
    const result = await initializeStripe(sk);
    setOpen(false);
    dispatch({
      type: "init",
      payload: {
        pk,
        sk,
        coupons: result.coupons.map(({ id, name, valid }) => ({
          name,
          valid,
          id,
        })),
        items: result.products.map(({ id, name, price }) => ({
          id: id,
          quantity: 1,
          title: name,
          image:
            "https://images.unsplash.com/photo-1622147681210-d7da05b4a7d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80",
          price,
        })),
      },
    });
  };

  const importKeys = async () => {
    setLoading(true);
    if (!pk || !sk) {
      alert("Please add both a PK and SK");
    } else {
      await initStripe(pk, sk);
      setOpen(false);
    }
    setLoading(false);
  };

  const useDefaults = async () => {
    setLoading(true);
    const result = await initializeStripe(STRIPE_SK);

    setOpen(false);
    dispatch({
      type: "init",
      payload: {
        sk: STRIPE_SK,
        pk: STRIPE_PK,
        coupons: result.coupons.map(({ name, valid }) => ({ name, valid })),
        items: result.products.map(({ id, name, price }) => ({
          id: id,
          quantity: 1,
          title: name,
          image:
            "https://images.unsplash.com/photo-1622147681210-d7da05b4a7d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80",
          price,
        })),
      },
    });
    setLoading(false);
    setOpen(false);
  };

  const closeModal = () => {
    if (initialized) setOpen(false);
  };

  React.useEffect(() => {
    if (!initialized && !params.sk && !params.pk) {
      setOpen(true);
    }
  }, [initialized, params]);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add your Stripe Keys
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    From you Stripe dashboard, copy your Stripe PK and SK to
                    customize the demo to your account. You can skip this step
                    to use a default account.
                  </p>
                </div>

                <input
                  className="border-gray-200 border-2 rounded-lg px-4 py-1 block w-full mt-4"
                  type="text"
                  onChange={(e) => setPk(e.currentTarget.value)}
                  value={pk}
                  placeholder="Stripe PK"
                />
                <input
                  className="border-gray-200 border-2 rounded-lg px-4 py-1 block w-full mt-4 "
                  type="text"
                  onChange={(e) => setSk(e.currentTarget.value)}
                  value={sk}
                  placeholder="Stripe SK"
                />

                <div className="mt-8 w-full flex justify-end items-center">
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <>
                      <div
                        className="mr-7 cursor-pointer"
                        onClick={useDefaults}
                      >
                        Use Defaults
                      </div>
                      <Button label="Import Keys" onClick={importKeys} />
                    </>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
