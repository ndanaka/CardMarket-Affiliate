import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import formatPrice from "../../../utils/formatPrice";
import HomeApi from "../../../api/homeApi";

const LinkStatus = ({ affId, period }) => {
  const { t } = useTranslation();
  const [links, setLinks] = useState();
  const [more, setMore] = useState(true);

  const { GetLinkStatus } = HomeApi();

  useEffect(() => {
    setMore(true);
    getLinkStatus();
  }, [period]);

  const getLinkStatus = async () => {
    const res = await GetLinkStatus(affId, period);
    console.log(res.data);
    setLinks(res.data.links);
  };

  return (
    <div className="my-2 mt-6 relative">
      <div className="font-sans font-semibold text-gray-500 text-lg">
        {t(period)}
        {t("sLink")}
      </div>
      <table className=" w-[100%] text-[13px] mt-1 border-gray-400 border-[1px] text-center rounded-3xl ">
        <thead className="h-10 text-[14px] text-white bg-[#4B5563]">
          <tr>
            <th>{t("link")}</th>
            <th>{t("clicks")}</th>
            <th>{t("registeration")}</th>
            <th>{"CVR"}</th>
            <th>{t("earn")}</th>
          </tr>
        </thead>
        <tbody className="text-[14px]">
          {links?.length === 0 ? (
            <tr>
              <td colSpan={5}>{t("noData")}</td>
            </tr>
          ) : (
            links?.map((item, index) => (
              <tr
                key={index}
                className={`even:bg-gray-100 h-10 ${
                  index >= 5 && more && "hidden"
                }`}
              >
                <td>{item.name}</td>
                <td>{item.country}</td>
                <td>¥{formatPrice(item.payment)}</td>
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
    </div>
  );
};

export default LinkStatus;
