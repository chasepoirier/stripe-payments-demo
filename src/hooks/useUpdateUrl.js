import { useRouter } from "next/router";
import { isEqual } from "lodash";
import React from "react";
import useTheme from "./useTheme";
import useCart from "./useCart";

const setBoolean = (bool) => (bool === "true" ? true : false);

export default function useUpdateUrl(baseUrl) {
  const [theme] = useTheme();
  const [cart] = useCart();
  const router = useRouter();

  const buildParams = () => {
    const query = router.asPath.split("?");

    if (query.length > 1) {
      const encodedParams = JSON.parse(
        '{"' +
          decodeURI(query[1].replace(/&/g, '","').replace(/=/g, '":"')) +
          '"}'
      );

      const params = {
        ...encodedParams,
        logo: encodedParams.logo ? decodeURIComponent(encodedParams.logo) : "",
        brandName: encodedParams.brandName
          ? decodeURIComponent(encodedParams.brandName).replace("+", " ")
          : "",
        fontFamily: encodedParams.fontFamily
          ? decodeURIComponent(encodedParams.fontFamily)
          : "",
        borderRadius: Number(encodedParams.borderRadius),
        spacing: Number(encodedParams.spacing),
        fontSize: Number(encodedParams.fontSize),
        primaryColor: decodeURIComponent(encodedParams.primaryColor),
        backgroundColor: decodeURIComponent(encodedParams.backgroundColor),
        textColor: decodeURIComponent(encodedParams.textColor),
        autoPayments: setBoolean(encodedParams.autoPayments),
        wallets: setBoolean(encodedParams.wallets),
        shipping: setBoolean(encodedParams.shipping),
        phone: setBoolean(encodedParams.phone),
        promoCode: setBoolean(encodedParams.promoCode),
        pk: cart.pk,
        sk: cart.sk,
      };

      return params;
    }
    return {};
  };

  React.useEffect(() => {
    if (baseUrl) {
      const params = buildParams();

      const currentParams = {
        ...theme,
        pk: cart.pk,
        sk: cart.sk,
      };

      if (!isEqual(params, currentParams)) {
        router.push(baseUrl, { query: currentParams });
      }

      if (!Object.keys(params).length) {
        router.push(baseUrl, { query: currentParams });
      }
    }
  }, [theme, cart, baseUrl]);

  return buildParams();
}
