import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";

import { tokenWithPersistenceAtom } from "../../../atoms";

const Links = ({ pageName, link }) => {
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const [copy, setCopy] = useState("");

  let affId;
  let affLink;

  if (token) {
    affId = jwtDecode(token).id;
    affLink = `${link}?aff_id=${affId}`;
  }

  const handleLinkCopy = (t) => {
    navigator.clipboard.writeText(affLink);

    // if (t === "htmlTag") {
    //   const htmlTag = `<a href="${ORIPA_BASE_URL}?aff_id=${affId}">${pageName}</a>`;
    //   navigator.clipboard.writeText(htmlTag);
    // }
    // if (t === "url") {
    //   const url = `https://clicks.affstrack.com/c?c=${ReqId}&p=${PageId}`;
    //   navigator.clipboard.writeText(url);
    // }

    //3s later disapear "copied"
    setCopy(t);
    setTimeout(() => {
      setCopy("");
    }, 3000);
  };

  return (
    <>
      <div
        className="w-[400px] max-[1000px]:w-[300px] max-[500px]:w-[280px] p-10 max-[1000px]:p-5 max-[500px]:px-3 m-4 font-sans text-gray-700 bg-gradient-to-t from-[#8080802e] to-white shadow-lg 
            drop-shadow-gray-300 hover:-translate-y-1 duration-200"
      >
        <p className="text-2xl font-semibold pb-5">{pageName}</p>
        <p className="text-[18px] font-medium py-3">For your own WebSite:</p>
        <div className="flex gap-3 py-1 items-center bg-white rounded-sm px-3">
          <span className="inline-block truncate">{`<a href="${link}"> ${pageName} </a>`}</span>
          <div
            className="w-[10%] flex flex-wrap justify-center w-6 cursor-pointer items-center"
            data-tooltip-id="copy"
            data-tooltip-content={`${copy === "" ? "Copy the link" : "Copied"}`}
          >
            {copy === pageName ? (
              <i className="fa fa-check" />
            ) : (
              <i
                onClick={() => handleLinkCopy(pageName)}
                className="far fa-copy text-[20px] cursor-pointer"
              />
            )}
          </div>
        </div>
        {/* <p className="text-[18px] font-medium py-3">For your own Friends:</p>
        <div className="flex gap-3 py-1 items-center bg-white rounded-sm px-3">
          <p>{`https://clicks.affstrack.com/c?c=${ReqId}&p=${PageId}`}</p>
          <div
            className="w-6 max-[500px]:w-[10%] cursor-pointer "
            data-tooltip-id="url"
            data-tooltip-content={`${copy === "url" ? "Copied" : "Copy the link"}`}
          >
            {copy === "url" ? (
              <i className="fa fa-check" />
            ) : (
              <i
                onClick={() => handleLinkCopy("url")}
                className="far fa-copy text-[20px] cursor-pointer"
              />
            )}
          </div>
        </div> */}
      </div>
      <Tooltip id="htmlTag" />
      <Tooltip id="url" />
    </>
  );
};

export default Links;
