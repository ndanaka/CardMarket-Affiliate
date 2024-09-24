const Item = ({ icon, label, content }) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between w-[500px] border-b-[1px] border-gray-400 pb-3 ">
        <p className="flex items-center gap-3">
          <i className={`${icon} text-gray-600`} />
          <span>{label}</span>
        </p>
        <span>{content}</span>
      </div>
    </>
  );
};
export default Item;
