import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Tooltip } from "react-tooltip";
import { payHistoryAtom } from "../../../store/index";

const History = ({ timeFrame }) => {
  const [histroy, setHistory] = useAtom(payHistoryAtom);
  const [more, setMore] = useState(true);
  const [show, setShow] = useState([
    {
      reqDate: 14,
      resDate: 15,
      amount: "1282$",
      method: "Apple Pay",
      address: 812345432633,
    },
    {
      reqDate: 14,
      resDate: 15,
      amount: "1282$",
      method: "Apple Pay",
      address: 812345432633,
    },
    {
      reqDate: 14,
      resDate: 15,
      amount: "1282$",
      method: "Apple Pay",
      address: 812345432633,
    },
  ]);
  const location = useLocation();
  useEffect(() => {
    const pathName = location.pathname;
    // GetBrieflyApi()
  }, [location]);

  useEffect(() => {}, [timeFrame, histroy]);

  return (
    <>
      <div className="flex justify-center">
        <div>
          <div className="flex flex-wrap justify-between items-center px-10 font-sans font-semibold  pl-3 ">
            <p className="text-[14px] text-gray-500">
              Statistics{" "}
              {timeFrame.month == 0 && timeFrame.year == 0
                ? ""
                : timeFrame.month != 0
                ? "monthly"
                : "anually"}
            </p>
            <p className="text-[18px]">
              {timeFrame.year != 0 && timeFrame.year}
              {timeFrame.month != 0 && `.${timeFrame.month}`}
              {timeFrame.month == 0 && timeFrame.year == 0 && "Total"}{" "}
              Earning:&nbsp;
              <span className="text-[red]">345$</span>
            </p>
          </div>
          <table className=" w-[900px] text-[13px] mt-1  border-gray-400 border-[1px] text-center">
            <thead className="h-10 text-[14px] text-white bg-[#4B5563]">
              <tr>
                <th>No</th>
                <th>Request Date</th>
                <th>Withdrawal Date</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody className="text-[14px]">
              {show?.map((item, index) => (
                <tr
                  key={index}      
                  className={`even:bg-gray-100 h-10 ${
                    index > 1 && more && "hidden"
                  }`}
                >
                  <td>{index + 1}</td>
                  <td>{item.reqDate}</td>
                  <td>{item.resDate}</td>
                  <td>{item.amount}</td>
                  <td>{item.method}</td>
                  <td>{item.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {show?.length > 2 && (
            <button
              onClick={() => setMore(!more)}
              className="text-[green] underline absolute left-[50%] -translate-x-[50%] text-[15px]"
            >
              {more ? "more" : "less"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default History;
