import React, { useState, useEffect } from "react";
import UseApi from "../../../../hooks/useApi";
import { useAtom } from "jotai";
import { monthlyProfitAtom } from "../../../../atoms/index";

const PaymentTimer = ({ registerDate, currentTime }) => {
  const { GetTime } = UseApi();
  const [monthlyProfit, setMonthlyProfit] = useAtom(monthlyProfitAtom);

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateNextPaymentDate = () => {
      const regDate = new Date(registerDate);
      const now = new Date(currentTime);
      let nextPaymentDate = new Date(regDate);

      // If the current time is greater than or equal to the registration date
      if (now >= regDate) {
        // Increment the month for the next payment date
        nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);

        // If the next payment date is less than or equal to the current date, keep incrementing
        while (nextPaymentDate <= now) {
          nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
        }
      }

      return nextPaymentDate;
    };
    let curNow = 0;
    const updateTimer = () => {
      const nextPaymentDate = calculateNextPaymentDate();
      curNow = curNow + 1000;
      let now = new Date(currentTime);
      const difference = nextPaymentDate - now - curNow;
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeRemaining({ days, hours, minutes, seconds });
        if (monthlyProfit === "") {
        }
      } else {
        // GetTime();
        // setMonthlyProfit('mustPay')
      }
    };
    const intervalId = setInterval(updateTimer, 1000); // Update every second

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [registerDate, currentTime]); // Add currentTime to dependencies
  return (
    <div className="flex flex-wrap w-[120px] ">
      <div className="">&nbsp;- {timeRemaining.days} DAYs&nbsp; </div>
      <div className="text-[13px] ">
        {timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds}
      </div>
    </div>
  );
};

export default PaymentTimer;
