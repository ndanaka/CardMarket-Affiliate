import React, { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";

import { tokenWithPersistenceAtom } from "../../../atoms";

const Links = ({ link, label, icon }) => {
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const [copy, setCopy] = useState("");

  let affiliateID;
  let affiliateLink;

  if (token) {
    affiliateID = jwtDecode(token).aff_id;
    affiliateLink = `${link}?aff_id=${affiliateID}`;
  }

  const handleLinkCopy = (t) => {
    navigator.clipboard.writeText(affiliateLink);
    //10s later non display of "copied"
    setCopy(t);

    const time = setTimeout(() => {
      setCopy("");
    }, 3000);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between py-3 px-4 sm:px-10 items-center">
        <i className={`${icon} w-[10%] text-center`} />
        <p className="no-underline text-center w-[30%]">{label}</p>
        <a
          href={affiliateLink}
          className="w-[50%] hover:scale-[102%] underline underline-offset-[5px] max-[500px]:hidden text-center overflow-hidden"
          target="_blank"
        >
          {link}
        </a>
        <div
          className="w-[10%] flex flex-wrap justify-center w-6 cursor-pointer items-center"
          data-tooltip-id="copy"
          data-tooltip-content={`${copy === "" ? "Copy the link" : "Copied"}`}
        >
          {copy === label ? (
            <i className="fa fa-check" />
          ) : (
            <i
              onClick={() => handleLinkCopy(label)}
              className="far fa-copy text-[20px] cursor-pointer"
            />
          )}
        </div>
      </div>
      <Tooltip id="copy" />
    </>
  );
};
export default Links;
