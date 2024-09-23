import React, { useState } from "react";
import Links from "./Links";

const QuickLinks = () => {
  return (
    <>
      <div className="px-16 gap-10 max-[900px]:px-3 mt-3">
        <div className="font-sans font-semibold text-gray-500 pl-3 text-[13px] pb-1">
          Quick Link
        </div>
        <div className="border-[1px] border-gray-400 ">
          <Links
            label={"Homepage Link"}
            icon={"fas fa-home"}
            link={"https://oripa.clove.jp/en/oripa/All"}
          />
          <Links
            label={"Real Account Link"}
            icon={"fas fa-id-card"}
            link={"https://oripa.clove.jp/en/signup"}
          />
          <Links
            label={"Help Center"}
            icon={"fas fa-id-badge"}
            link={"https://clove.jp/terms"}
          />
        </div>
      </div>
    </>
  );
};
export default QuickLinks;
