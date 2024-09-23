import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

const Links = ({ link, label, icon }) => {
  const [copy, setCopy] = useState("");
  const handleLinkCopy = (t) => {
    navigator.clipboard.writeText(link);
    //10s later non display of "copied"
    setCopy(t);
    const time = setTimeout(() => {
      setCopy("");
    }, 3000);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between py-3 px-10">
        <i className={`${icon} w-[10%]`} />
        <p className="w-[20%] no-underline text-center max-[500px]:w-[80%]">
          {label}
        </p>
        <a
          href={link}
          className="w-[30%] hover:scale-[102%] min-[500px]:w-[60%] underline underline-offset-[5px] max-[500px]:hidden text-center overflow-hidden"
          target="_blank"
        >
          {link}
        </a>
        <div
          className="w-6 max-[500px]:w-[10%] cursor-copy "
          data-tooltip-id="copy"
          data-tooltip-content={`${copy === "" ? "Copy the link" : "Copied"}`}
        >
          {copy === label ? (
            <i className="fa fa-check" />
          ) : (
            <i
              onClick={() => handleLinkCopy(label)}
              className="far fa-copy text-[20px] cursor-copy"
            />
          )}
        </div>
      </div>
      <Tooltip id="copy" />
    </>
  );
};
export default Links;
