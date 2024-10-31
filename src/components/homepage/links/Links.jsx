import React, { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";
import { useTranslation } from "react-i18next";

import { tokenWithPersistenceAtom } from "../../../atoms";
import HomeApi from "../../../api/homeApi";
import Spinner from "../../../utils/Spinner";

const Links = ({
  type,
  link,
  title,
  icon,
  linkId,
  setLinks,
  setToastVisible,
  setToastMessage,
  setToastType,
}) => {
  const { t } = useTranslation();
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const [copy, setCopy] = useState("");
  const [textToCopy, setTextToCopy] = useState("");
  const { SubmitDeleteLink } = HomeApi();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let affiliateID;
    let affiliateLink;

    if (token) {
      affiliateID = jwtDecode(token).id;
      affiliateLink = `${link}?link_id=${linkId}&aff_id=${affiliateID}&first=${true}`;

      setTextToCopy(affiliateLink);
    }
  });

  const handleCopy = (title) => {
    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    //3s later non display of "copied"
    setCopy(title);
    setTimeout(() => {
      setCopy("");
    }, 3000);
  };

  const handleSubmitDeleteLink = async () => {
    setLoading(true);
    const res = await SubmitDeleteLink({ _id: linkId });
    setLoading(false);

    if (res.data.status) {
      setToastVisible(true);
      setToastType("success");
      setToastMessage(t("successDeleted"));
      setLinks(res.data.links);
    } else {
      setToastType("error");
      setToastMessage(t("failedDeleted"));
    }
  };

  return (
    <div className="flex flex-wrap justify-between p-3 items-center">
      <i className={`${icon} w-[10%] text-center`} />
      <p className="no-underline text-center w-[20%]">{title}</p>
      <span
        href={textToCopy}
        className="w-[50%] hover:scale-[102%] underline underline-offset-[5px] max-[500px]:hidden text-center overflow-hidden"
      >
        {link}
      </span>
      <div
        className="w-[10%] flex flex-wrap justify-center w-6 cursor-pointer items-center"
        data-tooltip-id="copy"
        data-tooltip-content={`${copy === "" ? t("copyLink") : t("copied")}`}
      >
        {copy === title ? (
          <i className="fa fa-check" />
        ) : (
          <i
            value={textToCopy}
            onClick={() => handleCopy(title)}
            className="far fa-copy text-[20px] cursor-pointer"
          />
        )}
        <Tooltip id="copy" />
      </div>
      {type === "mine" ? (
        <div
          className="w-[10%] flex flex-wrap justify-center w-6 cursor-pointer items-center"
          data-tooltip-id="delete"
          data-tooltip-content={t("delLink")}
        >
          <i
            className="fa fa-trash text-center cursor-pointer"
            onClick={() => handleSubmitDeleteLink()}
          />
          <Tooltip id="delete" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Links;
