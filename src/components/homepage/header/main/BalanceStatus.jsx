import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";

import { timeAtom } from "../../../../atoms/index";

import AuthApi from "../../../../api/authApi";

import PaymentTimer from "./PaymentTimer";

const BlanceStatus = () => {
  const { t } = useTranslation();
  const [props, setProps] = useState({ registerDate: "", currentTime: "" });

  const location = useLocation();
  const [time] = useAtom(timeAtom);

  useEffect(() => {
    const { registerDate, currentTime } = { ...time };
    setProps({ registerDate, currentTime });
  }, [time]);

  return (
    <div className="flex flex-wrap max-[800px]:flex-col max-[800px]:gap-3 text-[14px] font-semibold font-sans">
      <div className="lg:border-r-[1px]  lg:border-r-gray-500  lg:px-5 px-2">
        <p className="text-[13px] text-gray-500 font-medium ">
          {t("unrelaizedBalance")}
        </p>
        <i className="far fa-credit-card" />
        <span>&nbsp;{t("total")}:&nbsp;</span>
        <span className="text-red-600 ">$1320</span>
      </div>
      <div className=" lg:border-r-[1px]  lg:border-r-gray-500 lg:px-5 px-2">
        <p className="text-[13px] text-gray-500 font-medium ">
          {t("widthrawalBalance")}
        </p>
        <i className="fas fa-university" />
        <span>&nbsp;{t("balance")}:&nbsp;</span>
        <span className="text-red-600 ">$2580</span>
      </div>
      <div className="lg:px-5 px-2">
        <p className="text-[13px] text-gray-500 font-medium ">
          {t("nextBalance")}
        </p>
        <div className="flex flex-wrap">
          <div>
            {t("total")}: <span className="text-red-600 ">$3900 </span>
          </div>
          {/* <PaymentTimer
            registerDate={props.registerDate}
            currentTime={props.currentTime}
          /> */}
        </div>
        {/* <i className="far fas fa-calendar-days" aria-hidden="true" />
        <span>&nbsp;06/08-12/8/2024</span> */}
      </div>
    </div>
  );
};
export default BlanceStatus;
