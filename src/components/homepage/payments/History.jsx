import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";

import formatPrice from "../../../utils/formatPrice";
import formatDate from "../../../utils/formatDate";
import HomeApi from "../../../api/homeApi";
import { tokenWithPersistenceAtom } from "../../../atoms";

const History = ({ aff_id }) => {
  const { t } = useTranslation();
  const [more, setMore] = useState(true);
  const [payments, setPayments] = useState([]);
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);

  const { GetAffPayHistory } = HomeApi();

  let affId;
  if (aff_id) {
    affId = aff_id;
  } else {
    if (token) affId = jwtDecode(token).id;
  }

  useEffect(() => {
    getAffPayHistory();
  }, []);

  const getAffPayHistory = async () => {
    const res = await GetAffPayHistory({ aff_id: affId });
    setPayments(res.data.affBalance);
  };

  return (
    <div className="relative flex justify-center pb-6">
      <table className="w-[900px] text-[13px] border-gray-400 border-[1px] text-center">
        <thead className="h-10 text-[14px] text-white bg-[#4B5563]">
          <tr>
            <th>No</th>
            <th>{t("type")}</th>
            <th>{t("amount")}</th>
            <th>{t("address")}</th>
            <th>{t("request") + " " + t("date")}</th>
            <th>{t("withdrawal") + " " + t("date")}</th>
          </tr>
        </thead>
        <tbody className="text-[14px]">
          {payments.length === 0 ? (
            <tr>
              <td colSpan={6}>{t("noData")}</td>
            </tr>
          ) : (
            payments?.map((payment, index) => (
              <tr
                key={index}
                className={`even:bg-gray-100 h-10 ${
                  index > 9 && more && "hidden"
                }`}
              >
                <td>{index + 1}</td>
                <td>{payment.kind}</td>
                <td>¥{formatPrice(payment.price)}</td>
                <td>{payment.bank_address}</td>
                <td>{formatDate(payment.createdAt)}</td>
                <td>{payment.withdrawnDate}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {payments?.length > 10 && (
        <button
          onClick={() => setMore(!more)}
          className="absolute bottom-0 text-[green] underline absolute left-[50%] -translate-x-[50%] text-[15px]"
        >
          {more ? t("viewMore") : t("viewLess")}
        </button>
      )}
    </div>
  );
};

export default History;
