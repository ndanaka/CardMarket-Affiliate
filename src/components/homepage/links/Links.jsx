import React, { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";
import { useTranslation } from "react-i18next";

import { tokenWithPersistenceAtom } from "../../../atoms";
import HomeApi from "../../../api/homeApi";
import Spinner from "../../../utils/Spinner";

const Links = ({
  id,
  url,
  title,
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
      affiliateLink = `${url}?link_id=${id}&aff_id=${affiliateID}&first=${true}`;

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
    const res = await SubmitDeleteLink({ _id: id });
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
      {loading && <Spinner />}
      <i className="fa fa-exchange w-[10%] text-center" />
      <p className="no-underline text-center w-[20%]">{title}</p>
      <span
        href={textToCopy}
        className="w-[50%] hover:scale-[102%] underline max-[500px]:hidden text-center overflow-hidden"
      >
        {url}
      </span>
      <div
        className="w-[10%] h-[20px] flex flex-wrap justify-center cursor-pointer items-center"
        data-tooltip-id="copy"
        data-tooltip-content={`${copy === "" ? t("copyLink") : t("copied")}`}
        onClick={() => handleCopy(title)}
      >
        {copy === title ? (
          <i className="fa fa-check" />
        ) : (
          <i value={textToCopy} className="far fa-copy text-[20px]" />
        )}
        <Tooltip id="copy" />
      </div>
      <div
        className="w-[10%] h-[20px] flex flex-wrap justify-center cursor-pointer items-center"
        data-tooltip-id="delete"
        data-tooltip-content={t("delLink")}
        onClick={() => handleSubmitDeleteLink()}
      >
        <i className="fa fa-trash text-center" />
        <Tooltip id="delete" />
      </div>
    </div>
  );
};
export default Links;
