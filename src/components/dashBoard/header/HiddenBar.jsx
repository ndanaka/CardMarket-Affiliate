import React, { useEffect, useState } from "react";
import NavButton from "./NavButton";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { tokenAtom } from "../../../store";

const HiddenBar = ({ collapse, setCollapse }) => {
  const navigate = useNavigate();
  const [token] = useAtom(tokenAtom);
  return (
    <div
      className={`${
        collapse ? "blcok" : "hidden"
      } w-[250px] lg:hidden fixed left-0 top-0 z-10  flex
         flex-col items-start h-full bg-gray-600 tracking-tighter overflow-hidden font-sans pt-10 pl-10 !text-white`}
    >
      <button
        className="absolute right-3 top-3 text-white"
        onClick={() => setCollapse(false)}
      >
        Close
      </button>
      <NavButton
        label="HOME"
        className={"text-[14px]"}
        handle={() => navigate("/homepage")}
      />
      {token && (
        <NavButton
          label="ADMIN"
          className={"text-[14px]"}
          handle={() => navigate("/ADMIN")}
        />
      )}
      <NavButton
        label="PATNER LOGIN"
        className={"text-[14px]"}
        handle={() => navigate("/login")}
      />
      {/* <NavButton label='ADVANTAGES' className={'text-[14px]'} handle={() => navigate('/')} />
            <NavButton label='PATNER TYPES' className={'text-[14px]'} handle={() => navigate('/')} />
            <NavButton label='PROMOTIONAL TOOLS' className={'text-[14px]'} handle={() => navigate('/')} />
            <NavButton label='STASTICS' className={'text-[14px]'} handle={() => navigate('/')} />
            <NavButton label='PROMOTIONS' className={'text-[14px]'} handle={() => navigate('/')} /> */}
      <NavButton
        label="CONTACT"
        className={"text-[14px]"}
        handle={() => {
          navigate("/contact");
          setCollapse(false);
        }}
      />
      <Link
        to={"https://oripa.clove.jp/en/oripa/All"}
        target="blank"
      >
        <NavButton
          label="HELP CENTER"
          className={"text-[14px]"}
        />
      </Link>
    </div>
  );
};
export default HiddenBar;
