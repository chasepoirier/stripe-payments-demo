export const updateOrder = async (id, data) => {
  const result = await fetch("/api/payments", {
    method: "PATCH",
    body: JSON.stringify({ id, ...data }),
  }).then((res) => res.json());

  return result;
};

export const createOrder = async (line_items, stripeSk) => {
  const result = await fetch("/api/payments", {
    method: "POST",
    body: JSON.stringify({ line_items, stripeSk }),
  }).then((res) => res.json());

  return result;
};

export const initializeStripe = async (stripeSk) => {
  const result = await fetch("/api/initialize", {
    method: "POST",
    body: JSON.stringify({ stripeSk }),
  }).then((res) => res.json());

  return result;
};
