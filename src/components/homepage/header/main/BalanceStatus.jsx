import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useAtom } from "jotai";

import HomeApi from "../../../../api/homeApi";
import { balanceAtom } from "../../../../atoms/balanceAtom";
import formatPrice from "../../../../utils/formatPrice";

const BlanceStatus = () => {
  const { t } = useTranslation();
  const [balance, setBalance] = useAtom(balanceAtom);

  const { GetAffBalance } = HomeApi();
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current) {
      getAffBalance(); // Make sure this function is defined
      hasFetchedData.current = true;
    }
  }, []);

  const getAffBalance = async () => {
    const res = await GetAffBalance();
    setBalance({
      pending: res.data.pendingPrices,
      withdrawable: res.data.withdrawablePrices,
      withdrawn: 0,
    });
  };

  return (
    <div className="flex flex-wrap max-[800px]:flex-col max-[800px]:gap-3 text-[14px] font-semibold font-sans">
      <div className="lg:border-r-[1px] lg:border-r-gray-500 lg:px-5 px-2">
        <p className="text-[13px] text-gray-500 font-medium ">
          {t("widthrawalBalance")}
        </p>
        <i className="fas fa-university" />
        <span>&nbsp;{t("balance")}:&nbsp;</span>
        <span className="text-red-600 ">
          ¥{formatPrice(balance.withdrawable)}
        </span>
      </div>
      <div className="lg:px-5 px-2">
        <p className="text-[13px] text-gray-500 font-medium ">
          {t("pending") + " " + t("balance")}
        </p>
        <i className="fas fa-university" />
        <span>&nbsp;{t("balance")}:&nbsp;</span>
        <span className="text-red-600 ">¥{formatPrice(balance.pending)}</span>
      </div>
    </div>
  );
};
export default BlanceStatus;
