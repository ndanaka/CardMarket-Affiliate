import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import { useTranslation } from "react-i18next";
import { useAtom } from "jotai";

import { tokenWithPersistenceAtom } from "../../../atoms";

import NavButton from "./NavButton";

import { ORIPA_BASE_URL } from "../../../constant/baseUrl";

const HiddenBar = ({ collapse, setCollapse }) => {
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
    <div
      className={`${
        collapse ? "blcok" : "hidden"
      } w-[250px] lg:hidden fixed left-0 top-0 z-10 flex
         flex-col items-start h-full bg-gray-600 tracking-tighter overflow-hidden font-sans pl-4 pt-10 !text-white`}
    >
      <button
        className="absolute right-3 top-3 text-white"
        onClick={() => setCollapse(false)}
      >
        Close
      </button>
      {token && (
        <>
          {payload?.role === "Affiliate" ? (
            <NavButton
              label={t("home").toUpperCase()}
              className={"text-[14px]"}
              handle={() => {
                setCollapse(false);
                navigate("/homepage");
              }}
            />
          ) : (
            <NavButton
              label={t("admin").toUpperCase()}
              className={"text-[14px]"}
              handle={() => {
                setCollapse(false);
                navigate("/admin");
              }}
            />
          )}
        </>
      )}
      <Link to={ORIPA_BASE_URL} target="blank">
        <NavButton
          label={t("oripaHomepage").toUpperCase()}
          className={"text-md"}
        />
      </Link>
      <Link to={ORIPA_BASE_URL} target="blank">
        <NavButton
          label={t("helperCenter").toUpperCase()}
          className={"text-md"}
        />
      </Link>
      <NavButton
        label={t("login").toUpperCase()}
        className={"text-md"}
        handle={() => {
          setCollapse(false);
          navigate("/login");
        }}
      />
      <NavButton
        label={t("register").toUpperCase()}
        className={"text-md"}
        handle={() => {
          setCollapse(false);
          navigate("/register");
        }}
      />
    </div>
  );
};

export default HiddenBar;
