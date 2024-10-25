import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import formatPrice from "../../../utils/formatPrice";
import HomeApi from "../../../api/homeApi";

const DepositStatus = ({ affId, period }) => {
  const { t } = useTranslation();
  const [deposits, setDeposits] = useState();
  const [more, setMore] = useState(true);

  const { GetDepositStatus } = HomeApi();

  useEffect(() => {
    setMore(true);
    getDepositStatus();
  }, [period]);

  const getDepositStatus = async () => {
    try {
      const res = await GetDepositStatus(affId, period);
      setDeposits(res.data.deposits);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-2 relative">
      <div className="font-sans font-semibold text-gray-500 text-lg">
        {t(period)}
        {t("sDeposit")}
      </div>
      <table className="w-[100%] text-[13px] mt-1 border-gray-400 border-[1px] text-center rounded-3xl ">
        <thead className="h-10 text-[14px] text-white bg-[#4B5563]">
          <tr>
            <th>{t("name")}</th>
            <th>{t("country")}</th>
            <th>{t("deposit")}</th>
          </tr>
        </thead>
        <tbody className="text-[14px]">
          {deposits?.length === 0 ? (
            <tr>
              <td colSpan={3}>{t("noData")}</td>
            </tr>
          ) : (
            deposits?.map((item, index) => (
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
      {deposits?.length > 5 && (
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

export default DepositStatus;
