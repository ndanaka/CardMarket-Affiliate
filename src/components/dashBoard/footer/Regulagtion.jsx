import { useTranslation } from "react-i18next";

const Regualtion = () => {
  const { t } = useTranslation();

  return (
    <p className="font-sans text-[14px] text-gray-400 pt-10 mt-10 border-t-[0.5px] border-t-gray-300 leading-8 ">
      {t("regulation")}
    </p>
  );
};

export default Regualtion;
