const Input = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <>
      <div className="mt-3">
        <label className="block text-sm font-semibold text-gray-800">
          {label}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </>
  );
};

export default Input;
