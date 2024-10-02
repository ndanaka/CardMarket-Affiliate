import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { Tooltip } from "react-tooltip";
import { jwtDecode } from "jwt-decode";

import { useAtom } from "jotai";
import { tokenWithPersistenceAtom } from "../../../../atoms/index";

import NavItem from "./Item";
import NavPayment from "./Payment";

import { showNavAtom } from "../../../../atoms/index";

const Navbar = () => {
  const [showNav, setShowNav] = useAtom(showNavAtom);
  const navigate = useNavigate();
  const location = useLocation();
  const navItem = useRef();

  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  let rank;
  if (token) rank = jwtDecode(token).rank;

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
        <div className="relative">
          <NavItem
            label={"Payments"}
            child={true}
            handle={() => setShowNav((t) => ({ ...t, list: "Payments" }))}
          />
          {showNav.list === "Payments" && <NavPayment />}
        </div>
      </div>
      <div className="text-gray-400 font-semibold flex items-center justify-center px-5">
        Current Level :&nbsp;
        <span className="text-[#759ce4] font-semibold">{rank}&nbsp;</span>
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
