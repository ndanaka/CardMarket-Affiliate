import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Tooltip } from "react-tooltip";
import { jwtDecode } from "jwt-decode";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";

import { tokenWithPersistenceAtom } from "../../../../atoms/index";
import { showNavAtom } from "../../../../atoms/index";
import HomeApi from "../../../../api/homeApi";

import NavItem from "./NavItem";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [showNav, setShowNav] = useAtom(showNavAtom);
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const [affRank, setAffRank] = useState(null);

  const { GetAffRank } = HomeApi();

  const navItem = useRef();

  //color of navbar items when refreshing or navigating by using location
  useEffect(() => {
    const pathName = location.pathname.split("/", 3);
    if (pathName[2] === "links") {
      setShowNav((nav) => ({ ...nav, color: t("links") }));
    }
    if (pathName[2] === "payment") {
      setShowNav((nav) => ({ ...nav, color: t("payment") }));
    }
    if (pathName[2] === undefined) {
      setShowNav((nav) => ({ ...nav, color: t("homepage") }));
    }
    getAffRank();
  }, [navigate]);

  //color of navbar items inside homepage that is one page
  const handleClickOutside = (event) => {
    // Check if the clicked element is outside the list
    if (navItem.current && !navItem.current.contains(event.target)) {
      setShowNav((nav) => ({ ...nav, list: "" }));
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getAffRank = async () => {
    try {
      const res = await GetAffRank(jwtDecode(token).id);
      setAffRank(res.data.affRank);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      ref={navItem}
      className="flex flex-wrap justify-center sm:justify-between w-full bg-[#202938] h-16 sm:h-12 px-2"
    >
      <div className="flex flex-wrap">
        <NavItem
          label={t("homepage")}
          child={false}
          handle={() => {
            navigate("/homepage");
            setShowNav((nav) => ({ ...nav, color: t("homepage") }));
          }}
        />
        <NavItem
          label={t("links")}
          child={false}
          handle={() => {
            navigate("/homepage/links");
            setShowNav((nav) => ({ ...nav, color: t("links") }));
          }}
        />
        <NavItem
          label={t("payment")}
          child={false}
          handle={() => {
            navigate("/homepage/payment");
            setShowNav((nav) => ({ ...nav, color: t("payment") }));
          }}
        />
      </div>
      <div className="text-gray-400 font-semibold flex items-center justify-center px-5 cursor-pointer">
        {t("current") + " " + t("level")} :&nbsp;
        <div
          data-tooltip-id="levelHelp"
          data-tooltip-content={t("levelUpgrade")}
          onClick={() => navigate("/homepage/level")}
        >
          <span className="text-[#759ce4] font-semibold">
            {t(affRank?.name)}&nbsp;
          </span>
          <i className="fa fa-question-circle text-white" />
          <Tooltip id="levelHelp" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
