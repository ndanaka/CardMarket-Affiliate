import React, { useEffect, useState, useRef } from "react";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";

import formatPrice from "../../../utils/formatPrice";
import HomeApi from "../../../api/homeApi";

const TotalStats = ({ affId, setPeriod }) => {
  const { t } = useTranslation();
  const [statistics, setStatistics] = useState([]);

  const { GetStatistics } = HomeApi();
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current) {
      getStatistics(); // Make sure this function is defined
      hasFetchedData.current = true;
    }
  }, []);

  const getStatistics = async () => {
    try {
      const res = await GetStatistics(affId);
      setStatistics(res.data.statistics);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[64%] max-[900px]:w-full">
      <div className="font-sans font-semibold text-gray-500 text-lg">
        {t("statistics")} ({t("statisticsDesc")})
      </div>
      <table className=" w-full text-[13px] mt-1  border-gray-400 border-[1px] text-center">
        <thead className="h-10 text-[14px] text-white bg-[#4B5563]">
          <tr>
            <th>{t("period")}</th>
            <th>{t("deposit")}</th>
            <th>{t("clicks")}</th>
            <th>{t("registeration")}</th>
            <th>CVR</th>
            <th>{t("earn")}</th>
          </tr>
        </thead>
        <tbody className="text-[14px]">
          {statistics?.map((item, index) => (
            <tr
              key={index}
              className={`even:bg-gray-100 h-10 ${
                index > 4 && "hidden"
              } cursor-pointer`}
              onClick={() => setPeriod(t(item.period))}
              data-tooltip-id="totalTable"
              data-tooltip-place="top"
              data-tooltip-content={t("moreInfoStatistic")}
            >
              <td>{item.period}</td>
              <td>¥{formatPrice(item.payment)}</td>
              <td>{item.clicks}</td>
              <td>{item.regist}</td>
              <td>
                {isNaN(item.cvr) || item.cvr === "Infinity" ? 0 : item.cvr}
              </td>
              <td>¥{formatPrice(item.earn)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Tooltip id="totalTable" />
    </div>
  );
};

export default TotalStats;
