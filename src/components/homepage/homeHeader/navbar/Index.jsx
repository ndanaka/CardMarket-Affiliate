import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Tooltip } from "react-tooltip";
import { jwtDecode } from "jwt-decode";
import { useAtom } from "jotai";

import { tokenWithPersistenceAtom } from "../../../../atoms/index";
import { showNavAtom } from "../../../../atoms/index";
import HomeApi from "../../../../api/homeApi";

import NavItem from "./Item";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showNav, setShowNav] = useAtom(showNavAtom);
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const [affRank, setAffRank] = useState(null);

  const { GetAffRank } = HomeApi();

  const navItem = useRef();

  //color of navbar items when refreshing or navigating by using location
  useEffect(() => {
    const pathName = location.pathname.split("/", 3);
    if (pathName[2] === "links") {
      setShowNav((t) => ({ ...t, color: "My Links" }));
    }
    if (pathName[2] === "payments") {
      setShowNav((t) => ({ ...t, color: "Payments" }));
    }
    if (pathName[2] === undefined) {
      setShowNav((t) => ({ ...t, color: "Homepage" }));
    }
    getAffRank();
  }, [navigate]);

  //color of navbar items inside homepage that is one page
  const handleClickOutside = (event) => {
    // Check if the clicked element is outside the list
    if (navItem.current && !navItem.current.contains(event.target)) {
      setShowNav((t) => ({ ...t, list: "" }));
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
      const res = await GetAffRank(jwtDecode(token).rank);
      setAffRank(res.data.affRank);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      ref={navItem}
      className="flex flex-wrap justify-center sm:justify-between w-full bg-[#202938] h-16 sm:h-12 min-[410px]:px-10 px-2"
    >
      <div className="flex flex-wrap">
        <NavItem
          label={"Homepage"}
          child={false}
          handle={() => {
            navigate("/homepage");
            setShowNav((t) => ({ ...t, color: "Homepage" }));
          }}
        />
        <NavItem
          label={"My Links"}
          child={false}
          handle={() => {
            navigate("/homepage/links/affiliatelinks");
            setShowNav((t) => ({ ...t, color: "My Links" }));
          }}
        />
        <NavItem
          label={"Payments"}
          child={false}
          handle={() => {
            navigate("/homepage/payments");
            setShowNav((t) => ({ ...t, color: "Payments" }));
          }}
        />
      </div>
      <div className="text-gray-400 font-semibold flex items-center justify-center px-5">
        Current Level :&nbsp;
        <span className="text-[#759ce4] font-semibold">
          {affRank?.name}&nbsp;
        </span>
        <i
          className="cursor-pointer	far fa-question-circle text-[green]"
          data-tooltip-id="levelHelp"
          data-tooltip-content={"Clck here to see how to upgrade your level."}
          onClick={() => navigate("/homepage/level")}
        />
        <Tooltip id="levelHelp" />
      </div>
    </nav>
  );
};

export default Navbar;
