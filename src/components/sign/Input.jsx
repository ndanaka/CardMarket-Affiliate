const Input = ({ label, type, name, value, onChange }) => {
  return (
    <>
      <span className="block text-sm font-semibold text-gray-800 px-1">
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full px-4 py-2 mt-1 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </>
  );
};

export default Input;
