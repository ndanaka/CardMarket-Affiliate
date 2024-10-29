const formatPrice = (price) => {
  if (price >= 100000) {
    return (price / 1000).toFixed(1) + "K";
  }

  const formattedPrice = `${new Intl.NumberFormat("en-US").format(price)}`;

  return formattedPrice;
};

export default formatPrice;
