const formatPrice = (price) => {
  const formattedPrice = `${new Intl.NumberFormat("en-US").format(price)}`;

  return formattedPrice;
};

export default formatPrice;
