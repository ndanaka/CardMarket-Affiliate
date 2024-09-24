import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { Tooltip } from "react-tooltip";
import { useLocation } from "react-router";

import { totalStatsAtom } from "../../../store/index";

const TotalStats = ({ filtTotal, setFiltClient }) => {
  const [totalStats, setTotalStats] = useAtom(totalStatsAtom);
  const [totalTable, setTotalTable] = useState([
    {
      period: "Today",
      payment: "29300",
      clicks: "3",
      regist: "1",
      cvr: "33.33",
      earn: "1465",
    },
    {
      period: "Yesterday",
      payment: "59200",
      clicks: "5",
      regist: "2",
      cvr: "40",
      earn: "2960",
    },
    {
      period: "This Month",
      payment: "128",
      clicks: "25",
      regist: "5",
      cvr: "20",
      earn: "45",
    },
  ]);

  const location = useLocation();
  useEffect(() => {
    const pathName = location.pathname;
    if (pathName === "/homepage") {
      // GetBrieflyApi()
    }
    if (filtTotal === "daily") {
      // GetDailyApi()
    }
    if (filtTotal === "monthly") {
      // GetMonthlyApi()
    }
    if (filtTotal === "anually") {
      // GetAnuallyApi()
    }
  }, [location, filtTotal]);

  useEffect(() => {
    if (location.pathname === "/homepage") {
      briefData();
    }
    if (filtTotal === "daily") {
      dailyData();
    }
    if (filtTotal === "monthly") {
      monthlyData();
    }
    if (filtTotal === "annually") {
      anuallyData();
    }
  }, [totalStats]);

  const briefData = () => {
    return;
  };
  const dailyData = () => {
    return;
  };
  const monthlyData = () => {
    return;
  };
  const anuallyData = () => {
    return;
  };

  return (
    <>
      <div className="w-[60%] max-[900px]:w-full">
        <div className="font-sans font-semibold text-gray-500 pl-3 text-[13px]">
          Statistics (For more information, click each item.)
        </div>
        <table className=" w-full text-[13px] mt-1  border-gray-400 border-[1px] text-center">
          <thead className="h-10 text-[14px] text-white bg-[#4B5563]">
            <tr>
              <th>
                <i className="fas fa-cog clickable au-target" />
                &nbsp;Period
              </th>
              <th>Payment $</th>
              <th>Clicks</th>
              <th>Registeration</th>
              <th>CVR</th>
              <th>Earn</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {totalTable?.map((item, index) => (
              <tr
                key={index}
                className={`even:bg-gray-100 h-10 ${
                  index > 4 && "hidden"
                } cursor-pointer`}
                onClick={() => setFiltClient(item.period)}
                data-tooltip-id="totalTable"
                data-tooltip-place="top"
                data-tooltip-content="For more information, click here."
              >
                <td>{item.period}</td>
                <td>{item.payment}</td>
                <td>{item.clicks}</td>
                <td>{item.regist}</td>
                <td>{item.cvr}</td>
                <td>{item.earn}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Tooltip id="totalTable" />
      </div>
    </>
  );
};

export default TotalStats;
