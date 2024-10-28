import React, { useEffect, useState, useRef } from "react";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";

import HomeApi from "../../../api/homeApi";

const MyLinks = ({ affId, setSelectedLinkId, setSelectedLinkName }) => {
  const { t } = useTranslation();
  const [links, setLinks] = useState([]);
  const [more, setMore] = useState(true);

  const { GetAllLinks } = HomeApi();
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current) {
      getAllLinks(); // Make sure this function is defined
      hasFetchedData.current = true;
    }
  }, []);

  const getAllLinks = async () => {
    try {
      const res = await GetAllLinks({ aff_id: affId });
      setLinks(res.data.allLinks);
      if (res.data.allLinks.length !== 0) {
        setSelectedLinkId(res.data.allLinks[0]._id);
        setSelectedLinkName(res.data.allLinks[0].title);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="font-sans font-semibold text-gray-500 text-lg">
        {t("my")} {t("links")}
      </div>
      <table className=" w-full text-[13px] mt-1  border-gray-400 border-[1px] text-center">
        <thead className="h-10 text-[14px] text-white bg-[#4B5563]">
          <tr>
            <th>{t("title")}</th>
            <th>{t("url")}</th>
          </tr>
        </thead>
        <tbody className="text-[14px]">
          {links?.length === 0 ? (
            <tr>
              <td colSpan={3}>{t("noData")}</td>
            </tr>
          ) : (
            links?.map((item, index) => (
              <tr
                key={index}
                data-tooltip-id="totalTable"
                data-tooltip-place="top"
                data-tooltip-content={t("moreInfoStatistic")}
                onClick={() => {
                  setSelectedLinkId(item._id);
                  setSelectedLinkName(item.title);
                }}
                className={`even:bg-gray-100 h-10 cursor-pointer ${
                  index >= 5 && more && "hidden"
                }`}
              >
                <td>{item.title}</td>
                <td>{item.url}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {links?.length > 5 && (
        <button
          onClick={() => setMore(!more)}
          className="text-[green] underline absolute left-[50%] -translate-x-[50%] text-[15px]"
        >
          {more ? t("viewMore") : t("viewLess")}
        </button>
      )}
      <Tooltip id="totalTable" />
    </>
  );
};

export default MyLinks;
