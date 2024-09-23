const Hint = ({ label, question, handle, className }) => {
  return (
    <>
      <p className="mt-4 mr-2text-md font-semibold text-center text-gray-700">
        {question}
        <button
          type="button"
          onClick={handle}
          className={`${className} ml-2 text-lg text-blue-600 hover:underline font-sans`}
        >
          {label}
        </button>
      </p>
    </>
  );
};
export default Hint;
