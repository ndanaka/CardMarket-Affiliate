const SignButton = ({ label }) => {
  return (
        <button
          type="submit"
          className="w-full mt-2 px-6 py-2 ml-2tracking-wide font-semibold text-white transition-colors 
         duration-200 transform bg-emerald-700 hover:bg-emerald-600 focus:outline-none focus:bg-emerald-600 rounded-md"
        >
          {label}
        </button>
  );
};

export default SignButton;
