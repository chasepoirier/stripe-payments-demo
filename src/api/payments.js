export const createOrder = async (line_items) => {
  const result = await fetch("/api/payments", {
    method: "POST",
    body: JSON.stringify({ line_items }),
  }).then((res) => res.json());

  return result;
};
