import React, { useEffect, useState } from "react";
import PaymentTimer from "./PaymentTimer";
import { useLocation, useNavigate } from "react-router";
import { useAtom } from "jotai";
import { timeAtom } from "../../../../store/index";
import UseApi from "../../../../hooks/useApi";

const Timer = () => {
  const location = useLocation();
  //time
  const [time] = useAtom(timeAtom);
  const { GetTime } = UseApi();
  const [props, setProps] = useState({ registerDate: "", currentTime: "" });
  useEffect(() => {
    const { registerDate, currentTime } = { ...time };
    setProps({ registerDate, currentTime });
  }, [time]);

  return (
    <div className="flex flex-wrap max-[800px]:flex-col max-[800px]:gap-3 text-[14px] font-semibold font-sans">
      <div className="lg:border-r-[1px]  lg:border-r-gray-500  lg:px-5 px-2">
        <p className="text-[13px] text-gray-500 font-medium ">
          Unrelaized Balance
        </p>
        <i className="far fa-credit-card" />
        <span>&nbsp;Total:&nbsp;</span>
        <span className="text-red-600 ">$1320</span>
      </div>
      <div className=" lg:border-r-[1px]  lg:border-r-gray-500 lg:px-5 px-2">
        <p className="text-[13px] text-gray-500 font-medium ">
          Withdrawable Balance
        </p>
        <p className="text-[13px] text-gray-500">E-Wallet ID (700546324)</p>
        <i className="fas fa-university" />
        <span>&nbsp;BAL:&nbsp;</span>
        <span className="text-red-600 ">$2580</span>
        {/* <span> / CR:&nbsp;</span>
                <span className="text-red-600 ">$0.00</span> */}
      </div>
      <div className="lg:px-5 px-2">
        <p className="text-[13px] text-gray-500 font-medium ">
          Next Rebate payment
        </p>
        <div className="flex flex-wrap">
          <div>
            TOTAL: <span className="text-red-600 ">$3900 </span>
          </div>
          <PaymentTimer
            registerDate={props.registerDate}
            currentTime={props.currentTime}
          />
        </div>
        {/* <i className="far fas fa-calendar-days" aria-hidden="true" /> */}
        {/* <span>&nbsp;06/08-12/8/2024</span> */}
      </div>
    </div>
  );
};
export default Timer;
