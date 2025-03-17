const applyDiscount = (price, discount) => {
  return price - price * (discount / 100);
};

export { applyDiscount };
