const formatDate = (time) => {
  const temp = time.replace("T", " ");
  return temp.split(".")[0];
};

export default formatDate;
