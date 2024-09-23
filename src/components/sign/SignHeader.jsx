import React from "react";
import { useNavigate } from "react-router";

import Language from "../dashBoard/header/Language";

const SignHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-wrap justify-between max-md:justify-around items-center px-14 border-b-[1px] bg-gray-200 border-b-gray-600 pt-4">
        <img
          className=" cursor-pointer"
          src="/image/title/title2.png"
          onClick={() => navigate("/")}
        />
        <p className="h-8 mb-3">
          <Language className="h-full text-[15px] !bg-gray-200 !text-black" />
        </p>
      </div>
    </>
  );
};
export default SignHeader;
