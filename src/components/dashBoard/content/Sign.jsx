import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import SignButton from "./SignButton";

const Sign = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-evenly gap-4 w-full py-4 lg:py-6 bg-[#0c2148ee]">
      <SignButton handle={() => navigate("/login")} className="bg-gray-500">
        {t("partnerLogin").toUpperCase()}
      </SignButton>
      <SignButton handle={() => navigate("/register")} className="bg-green-600">
        {t("partnerRegister").toUpperCase()}
      </SignButton>
    </div>
  );
};

export default Sign;
