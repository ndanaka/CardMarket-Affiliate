import { useTranslation } from "react-i18next";

const CancelBtn = ({ handle }) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={() => handle()}
      className="px-6 mt-2 py-2 tracking-wide font-semibold text-white bg-gray-600 rounded-md hover:opacity-85 duration-300 "
    >
      {t("cancel")}
    </button>
  );
};

export default CancelBtn;
