const Button = ({ src, handle, label, to }) => {
  return (
    <>
      <li>
        <button
          onClick={() => handle()}
          className="flex gap-3 items-center w-full px-3 py-2 font-semibold hover:bg-gray-100"
        >
          <img
            className="w-6"
            src={`/image/icon/${src}`}
          />
          <span>{label}</span>
        </button>
      </li>
    </>
  );
};
export default Button;
