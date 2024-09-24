import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { clientAtom } from "../../../store/index";

const ClientStats = ({ filtTotal, filtClient }) => {
  const [client, setClient] = useAtom(clientAtom);
  const [clientTable, setClientTable] = useState();
  const [more, setMore] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setMore(true);
    if (filtClient === "Today") {
      setClientTable([
        { name: "Guroda Genzi", country: "Japan", payment: "8900" },
        { name: "Gimura", country: "Japan", payment: "7200" },
        { name: "Kerry Jam", country: "Scotland", payment: "13200" },
      ]);
    } else {
      setClientTable([
        { name: "Oto Qerno", country: "Germany", payment: "35000" },
        { name: "Yamamoto", country: "Japan", payment: "1200" },
        { name: "Andrei Petrob", country: "Russia", payment: "23000" },
        { name: "Eugine", country: "England", payment: "18300" },
      ]);
    }
  }, [filtClient]);

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
  }, [client]);

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
      <div className="max-[900px]:w-full w-[30%] relative">
        <div className="font-sans font-semibold text-gray-500 pl-3 text-[13px]">
          {filtClient}'s Clients
        </div>
        <table className=" w-[100%] text-[13px] mt-1 border-gray-400 border-[1px] text-center rounded-3xl ">
          <thead className="h-10 text-[14px] text-white bg-[#4B5563]">
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Payment $</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {clientTable?.map((item, index) => (
              <tr
                key={index}
                className={`even:bg-gray-100 h-10 ${
                  index > 2 && more && "hidden"
                }`}
              >
                <td>{item.name}</td>
                <td>{item.country}</td>
                <td>{item.payment}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {clientTable?.length > 3 && (
          <button
            onClick={() => setMore(!more)}
            className="text-[green] underline absolute left-[50%] -translate-x-[50%] text-[15px]"
          >
            {more ? "more" : "less"}
          </button>
        )}
      </div>
    </>
  );
};

export default ClientStats;
