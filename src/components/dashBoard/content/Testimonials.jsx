import { useTranslation } from "react-i18next";

import UserText from "./UserText";

const Testimonials = () => {
  const { t } = useTranslation();

  const name1 = "Andrew Wright";
  const name2 = "Kerry Doe";
  const name3 = "Yamamoto Guzi";

  return (
    <div className="lg:px-40 lg:py-10 p-5 w-full">
      <div className="w-full text-center border-gray-300 border-[0.5px] py-3 font-semibold text-gray-500">
        {t("testmonials")}
      </div>
      <UserText text={t("testimonials1")} name={name1} />
      <UserText text={t("testimonials2")} name={name2} />
      <UserText text={t("testimonials3")} name={name3} />
    </div>
  );
};

export default Testimonials;
