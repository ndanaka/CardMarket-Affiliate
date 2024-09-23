import React from "react";
import NavButton from "./NavButton";
import { useNavigate } from "react-router";
import { useAtom } from "jotai";
import { tokenAtom } from "../../../store";
const NavBar2 = () => {
  const navigate = useNavigate();
  const [token] = useAtom(tokenAtom);
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
        <NavButton
          label="HOME"
          className={"text-[13px] font-semibold"}
          handle={() => navigate("/homepage")}
        />
        {token && (
          <NavButton
            label="ADMIN"
            className={"text-[13px] font-semibold"}
            handle={() => navigate("/admin")}
          />
        )}
        <NavButton
          label="CONTACT US"
          className={"text-[13px] font-semibold"}
          handle={() => navigate("/contact")}
        />
      </div>
    </nav>
  );
};
export default NavBar2;
