const CancelBtn = ({ handle }) => {
  return (
    <button
      type="button"
      onClick={() => handle()}
      className="px-6 py-2 tracking-wide font-semibold text-white bg-gray-600 rounded-md hover:opacity-85 duration-300 "
    >
      Cancel
    </button>
  );
};

export default CancelBtn;
