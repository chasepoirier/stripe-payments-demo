export const createPaymentIntent = async () => {
  const result = await fetch("/api/payments", {
    method: "POST",
    body: JSON.stringify({}),
  }).then((res) => res.json());

  return result.clientSecret;
};
