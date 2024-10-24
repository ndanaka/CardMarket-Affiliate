import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";

import { tokenWithPersistenceAtom } from "../../../atoms";

import NavButton from "./NavButton";

const NavBar2 = () => {
  const navigate = useNavigate();
  const [token] = useAtom(tokenWithPersistenceAtom);
  const [payload, setPayload] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (token) {
      setPayload(jwtDecode(token));
    }
  }, [token]);

  return (
    <nav className=" flex flex-wrap justify-between items-center">
      <div>
        <img
          src="/image/title/title.png"
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="scale-y-150 text-center max-lg:hidden pr-20">
        {token && (
          <>
            {payload?.role === "Affiliate" ? (
              <NavButton
                label={t("home")}
                className={"text-[13px] font-semibold"}
                handle={() => navigate("/homepage")}
              />
            ) : (
              <NavButton
                label={t("admin")}
                className={"text-[13px] font-semibold"}
                handle={() => navigate("/admin")}
              />
            )}
          </>
        )}
        <NavButton
          label={t("contactUs").toUpperCase()}
          className={"text-[13px] font-semibold"}
          handle={() => navigate("/contact")}
        />
      </div>
    </nav>
  );
};

export default NavBar2;
