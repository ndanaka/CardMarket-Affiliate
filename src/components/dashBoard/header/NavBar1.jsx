import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useAtom } from "jotai";
import { languageAtom } from "../../../atoms";
import { tokenWithPersistenceAtom } from "../../../atoms";

import NavButton from "./NavButton";
import Language from "./Language";

const NavBar1 = ({ setCollapse }) => {
  const navigate = useNavigate();

  const [language, setLanguage] = useAtom(languageAtom);
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);

  const handleLanguage = () => {
    if (language === "日本語") {
      setLanguage("ENGLISH");
    } else {
      setLanguage("日本語");
    }
  };

  return (
    <div>
      <div className="flex justify-between px-[10%] py-3 lg:hidden z-30">
        <button className=" text-white" onClick={() => setCollapse(true)}>
          MENU
        </button>
        <Language />
      </div>
      <nav className="flex flex-wrap justify-between border-b-[0.1px] border-gray-500 border-collapse px-20 items-center">
        <div className="border-x-[0.1px] border-gray-500 p-2 max-lg:hidden ">
          <Link to={"https://oripa.clove.jp/en/oripa/All"} target="blank">
            <NavButton label="Oripa Homepage" className={"text-[12px]"} />
          </Link>
          <Link to={"https://oripa.clove.jp/en/oripa/All"} target="blank">
            <NavButton label="Help Center" className={"text-[12px]"} />
          </Link>
          <NavButton
            label="Contact Us"
            className={"text-[12px]"}
            handle={() => navigate("/contact")}
          />
        </div>
        <div className="flex flex-wrap -tracking-tight scale-y-150 max-lg:hidden ">
          {!token && (
            <>
              <NavButton
                label="PATNER LOGIN"
                className={"text-[10px] border-[0.5px] px-4 py-1"}
                handle={() => navigate("/login")}
              />
              <NavButton
                label="REGISTER A PATNER ACCOUNT"
                className={"text-[10px] bg-green-600 px-4 py-1 "}
                handle={() => navigate("/register")}
              />
            </>
          )}

          <NavButton
            label={language}
            className={"text-[10px] border-[0.5px] px-4 py-1 font-[500] w-20"}
            handle={() => handleLanguage()}
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar1;
