import React, { useEffect, useState } from "react";
import History from "./History";
import { useAtom } from "jotai";
import { timeAtom } from "../../../store/index";
import TimeFrame from "./TimeFrame";
const PaymentHistroy = () => {
  const [timeFrame, setTimeFrame] = useState({ year: 0, month: 0 });
  const [month, setMonth] = useState([]);
  const [year, setYear] = useState([]);
  const [time, setTime] = useAtom(timeAtom);

  useEffect(() => {
    const { registerDate, currentTime } = { ...time };
    const register = new Date(registerDate);
    const regYear = register.getFullYear();
    const regMonth = register.getMonth();
    const current = new Date(currentTime);
    const curYear = current.getFullYear();
    const curMonth = current.getMonth();
    setYear([]);
    setMonth([]);
    const year = array(regYear, curYear + 1);
    setYear(year);
    if (timeFrame.year == 0) {
      setMonth([]);
      return;
    }
    for (let i = 1; i < 13; i++) {
      setMonth((t) => [...t, { month: i }]);
    }
    if (timeFrame.year == curYear) {
      const month = array(1, curMonth + 2);
      setMonth(month);
    }
    if (timeFrame.year == regYear) { 
      const month = array(regMonth + 2, 12);
      setMonth(month);
    }
    if (regYear === curYear) {  
      const month = array(regMonth + 1, curMonth + 2);
      setMonth(month);
    }
  }, [time, timeFrame]);
  //generate array of year and month
  const array = (start, end) => {
    const array = Array.from(
      { length: end - start },
      (_, index) => index + start
    );
    return array;
  };
  return (
    <>
      <div className="md:mx-10 mx-5 mt-7 ">
        <div className="text-[24px] mb-7 font-semibold">Payment History</div>
        <TimeFrame
          month={month}
          year={year}
          setTimeFrame={setTimeFrame}
        />
        <History timeFrame={timeFrame} />
      </div>
    </>
  );
};
export default PaymentHistroy;
