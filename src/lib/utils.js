export function numbertoCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
    currency: "USD",
    style: "currency",
  }).format(amount);
}

export function calculate(data) {
  const { serviceFee, price, quantity, orderingFee } = data;
  const totalPrice = price * quantity;
  const service = serviceFee * quantity;
  return totalPrice + service + orderingFee;
}
