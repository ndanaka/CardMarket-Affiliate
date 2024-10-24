import { useTranslation } from "react-i18next";

const Button = ({ label, handle, select }) => {
  const { t } = useTranslation();

  return (
    <>
      <button
        className={`${
          select === label
            ? "bg-slate-200 text-black"
            : "bg-white text-gray-400"
        } hover:bg-slate-200 hover:text-black rounded-md px-3 py-1 font-semibold`}
        onClick={() => handle()}
      >
        {t(label)}
      </button>
    </>
  );
};

export default Button;
