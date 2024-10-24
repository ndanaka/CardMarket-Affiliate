import { useNavigate } from "react-router";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";

import NavButton from "../header/NavButton";

import { tokenWithPersistenceAtom } from "../../../atoms";

const Advertise = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [token] = useAtom(tokenWithPersistenceAtom);

  return (
    <div
      className={`overflow-hidden relative text-center bg-[url('/image/bg/bg-3.jpg')] h-[40vh] max bg-cover`}
    >
      <img className="w-fit max-lg:hidden" />
      <div
        className="w-[800px] max-lg:w-full  lg:absolute top-[50%] left-[50%] bg-[#0c2148ee]  lg:-translate-x-1/2 lg:-translate-y-1/2
             p-2 font-sans text-white  max-lg:bg-[#0c2148] max-lg:pb-4 max-lg:pt-0"
      >
        <div className="text-[50px] font-semibold">{t("adverTitle")}</div>
        <div className="lg:p-4">
          {t("adverContent1")} <br />
          {t("adverContent2")}
        </div>
        {!token && (
          <NavButton
            handle={() => navigate("/register")}
            label={t("becomePartner")}
            className="max-lg:hidden text-xl border-[0.5px] py-1 px-3 text-justify font-semibold"
          />
        )}
        <div
          className="max-lg:hidden lg:p-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          {t("readMore")}
        </div>
      </div>
      <div className="max-lg:hidden absolute left-0 top-0 h-[100%] w-[10%]  bg-gradient-to-l to-[#061544] from-[#0000ff00]"></div>
      <div className="max-lg:hidden absolute right-0 top-0 h-[100%] w-[10%]  bg-gradient-to-r to-[#061544] from-[#0000ff00]"></div>
    </div>
  );
};

export default Advertise;
