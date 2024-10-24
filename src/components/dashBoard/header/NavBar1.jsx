import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";

import { tokenWithPersistenceAtom } from "../../../atoms";

import NavButton from "./NavButton";
import LanguageBar from "../../../utils/LanguageBar";

import { ORIPA_BASE_URL } from "../../../constant/baseUrl";

const NavBar1 = ({ setCollapse }) => {
  const navigate = useNavigate();
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-between px-[10%] py-3 lg:hidden z-30">
        <button className=" text-white" onClick={() => setCollapse(true)}>
          MENU
        </button>
        <LanguageBar
          className={
            "bg-transparent text-gray-300 border-white text-[13px] py-[6px]"
          }
        />
      </div>
      <nav className="flex flex-wrap justify-between border-b-[0.1px] border-gray-500 border-collapse px-20 items-center">
        <div className="border-x-[0.1px] border-gray-500 p-2 max-lg:hidden ">
          <Link to={ORIPA_BASE_URL} target="blank">
            <NavButton label={t("oripaHomepage")} className={"text-[12px]"} />
          </Link>
          <Link to={ORIPA_BASE_URL} target="blank">
            <NavButton label={t("helperCenter")} className={"text-[12px]"} />
          </Link>
        </div>
        <div className="flex flex-wrap -tracking-tight scale-y-150 max-lg:hidden ">
          {!token && (
            <>
              <NavButton
                label={t("partnerLogin").toUpperCase()}
                className={"text-[10px] border-[0.5px] px-4 py-1"}
                handle={() => navigate("/login")}
              />
              <NavButton
                label={t("partnerRegister").toUpperCase()}
                className={"text-[10px] bg-green-600 px-4 py-1 "}
                handle={() => navigate("/register")}
              />
            </>
          )}
          <div className="flex flex-wrap items-center">
            <LanguageBar className="bg-transparent text-gray-300 text-[12px] py-[3px]" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar1;
