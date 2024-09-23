const Input = ({ label, type, name, value, onChange }) => {
  return (
    <>
      <div className="mt-2">
        <span className="block text-sm font-semibold text-gray-800">
          {label}
        </span>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </>
  );
};

export default Input;
