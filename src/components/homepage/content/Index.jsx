import React, { useState } from "react";
import { useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";

import ClientStats from "./ClientStats";
import TotalStats from "./TotalStats";
import QuickLinks from "./QuickLInks";

import { tokenWithPersistenceAtom } from "../../../atoms";

const Content = ({ aff_Id }) => {
  const [period, setPeriod] = useState("Today");

  let affId;
  if (aff_Id) {
    affId = aff_Id;
  } else {
    const [token, setToken] = useAtom(tokenWithPersistenceAtom);
    if (token) affId = jwtDecode(token).aff_id;
  }

  return (
    <>
      {/* <>
        <div className="md:mx-10 mx-5 mt-5 flex flex-wrap justify-between">
          <div>
            <span>Time Frame:</span>
            <select className="border-[1px] ml-3 border-gray-600 bg-gray-100 px-2 py-[0.5px] rounded-sm font-semibold">
              <option>Summary</option>
              <option>Daily</option>
              <option>Monthly</option>
              <option>Anually</option>
            </select>
          </div>
          <div className="flex items-center gap-10 max-[430px]:gap-1 flex-wrap">
            <div className="text-black font-semibold">
              Current Level:&nbsp;
              <span className="text-[#759ce4] font-semibold">
                {"Platinum"}&nbsp;
              </span>
              <i
                className="cursor-pointer	far fa-question-circle text-[green]"
                data-tooltip-id="levelHelp"
                data-tooltip-content={
                  "Clck here to see how to upgrade your level."
                }
                onClick={() => navigate("/homepage/level")}
              />
            </div>
            <div className="flex items-center">
              <a
                className="underline hover:text-[red] rounded-sm mr-3"
                href="mailto:ib@xmtrading.com"
                data-tooltip-content={"Mail to admin"}
                data-tooltip-id={"contact"}
              >
                Contact Us&nbsp;
              </a>
              <img
                className="w-6"
                src="/image/icon/notification.svg"
                data-tooltip-content={"New message"}
                data-tooltip-id={"notification"}
              />
            </div>
          </div>
        </div>
        <Tooltip id="levelHelp" />
        <Tooltip id="contact" />
        <Tooltip id="notification" />
      </> */}
      <div className="py-5">
        <div className="flex flex-wrap justify-center gap-10 max-[900px]:px-[5px] px-2">
          <TotalStats affId={affId} setPeriod={setPeriod} />
          <ClientStats affId={affId} period={period} />
        </div>
        <QuickLinks />
      </div>
    </>
  );
};

export default Content;
