import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

const Links = ({ pageName, ReqId, PageId }) => {
  const [copy, setCopy] = useState("");

  const handleLinkCopy = (t) => {
    if (t === "htmlTag") {
      const htmlTag = `<a href="https://clicks.affstrack.com/c?c=${ReqId}&p=${PageId}">${pageName}</a>`;
      navigator.clipboard.writeText(htmlTag);
    }
    if (t === "url") {
      const url = `https://clicks.affstrack.com/c?c=${ReqId}&p=${PageId}`;
      navigator.clipboard.writeText(url);
    }
    //3s later disapear "copied"
    setCopy(t);
    const time = setTimeout(() => {
      setCopy("");
    }, 3000);
    // return () => clearTimeout(time)
  };

  return (
    <>
      <div
        className="font-sans text-gray-700 p-10 m-4 max-[1000px]:p-5 bg-gradient-to-t from-[#8080802e] to-white w-[400px] max-[1000px]:w-[350px] max-[500px]:w-[280px] max-[500px]:px-3 shadow-lg 
            drop-shadow-gray-300 hover:-translate-y-1 duration-200"
      >
        <p className="text-2xl font-semibold pb-5">{pageName}</p>
        <p className="text-[18px] font-medium py-3">For your own WebSite:</p>
        <div className="flex gap-3 py-1 items-center bg-white rounded-sm px-3 ">
          <p className="">{`<a href="https://clicks.affstrack.com/c?c=${ReqId}&p=${PageId}"> ${pageName} </a>`}</p>
          <div
            className="w-6 max-[500px]:w-[10%] "
            data-tooltip-id="htmlTag"
            data-tooltip-content={`${copy === "htmlTag" ? "Copied" : "Copy the link"}`}
          >
            {copy === "htmlTag" ? (
              <i className="fa fa-check" />
            ) : (
              <i
                onClick={() => handleLinkCopy("htmlTag")}
                className="far fa-copy text-[20px] cursor-pointer"
              />
            )}
          </div>
        </div>
        <p className="text-[18px] font-medium py-3">For your own Friends:</p>
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
        </div>
      </div>
      <Tooltip id="htmlTag" />
      <Tooltip id="url" />
    </>
  );
};

export default Links;
