import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAtom } from "jotai";

import NavItem from "./Item";
import NavLinks from "./LInks";
import NavPayment from "./Payment";

import { showNavAtom } from "../../../../atoms/index";

const Navbar = () => {
  const [showNav, setShowNav] = useAtom(showNavAtom);
  const navigate = useNavigate();
  const location = useLocation();
  const navItem = useRef();

  //color of navbar items when refreshing or navigating by using location
  useEffect(() => {
    const pathName = location.pathname.split("/", 3);
    if (pathName[2] === "links") {
      setShowNav((t) => ({ ...t, color: "Links" }));
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
    <>
      <nav
        ref={navItem}
        className="flex flex-wrap w-full bg-[#202938] h-12  min-[410px]:px-10 px-2"
      >
        <NavItem
          label={"Homepage"}
          handle={() => {
            navigate("/homepage");
            setShowNav((t) => ({ ...t, color: "Homepage" }));
          }}
        />
        <div className="relative ">
          <NavItem
            label={"Links"}
            handle={() => setShowNav((t) => ({ ...t, list: "Links" }))}
          />
          {showNav.list === "Links" && <NavLinks />}
        </div>
        <div className="relative">
          <NavItem
            label={"Payments"}
            handle={() => setShowNav((t) => ({ ...t, list: "Payments" }))}
          />
          {showNav.list === "Payments" && <NavPayment />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
