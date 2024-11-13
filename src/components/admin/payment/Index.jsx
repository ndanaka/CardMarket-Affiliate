import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import HomeApi from "../../../api/homeApi";
import formatDate from "../../../utils/formatDate";
import Toast from "../../../utils/toast";
import Spinner from "../../../utils/Spinner";
import { Tooltip } from "react-tooltip";
import Modal from "./Modal";

const Payment = () => {
  const { t } = useTranslation();
  const hasFetchedData = useRef(false);
  const { GetAllPayments, ChangePayStatus, GetAffBankInfo } = HomeApi();

  const [payments, setPayments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [bankInfo, setBankInfo] = useState();

  useEffect(() => {
    if (!hasFetchedData.current) {
      getAllPayments();
      hasFetchedData.current = true;
    }
  }, []);

  const getAllPayments = async () => {
    setLoading(true); // Start loading
    const res = await GetAllPayments();
    setLoading(false); // Stop loading

    if (res.data.status) {
      setPayments(res.data.payments);
    }
  };

  const filteredPayments = payments.filter((payment) => {
    const search = searchTerm.toLowerCase();

    return (
      payment.user.fullName.toLowerCase().includes(search) ||
      payment.user.country.toLowerCase().includes(search) ||
      payment.user.email.toLowerCase().includes(search) ||
      payment.user.phoneNumber.includes(search) ||
      formatDate(payment.pay.createdAt).toLowerCase().includes(search) ||
      payment.pay.bank_address.toLowerCase().includes(search) ||
      (payment.pay.withdrawnDate &&
        formatDate(payment.pay.withdrawnDate).toLowerCase().includes(search)) ||
      payment.pay.kind.toLowerCase().includes(search)
    );
  });

  const changeStatus = async (payId, status) => {
    if (status === "Withdrawn") {
      setToastVisible(true);
      setToastType("warning");
      setToastMessage(t("alreadyWithdrawn"));
    } else {
      setLoading(true); // Start loading for status change
      const res = await ChangePayStatus({ _id: payId });
      setLoading(false); // Stop loading

      setToastVisible(true);
      if (res.data.status) {
        setToastType("success");
        setToastMessage(t("changeStatus"));
        setPayments(res.data.payments);
      } else {
        setToastType("error");
        setToastMessage(t("failedRequest"));
      }
    }
  };

  const handleCloseToast = () => {
    setToastVisible(false);
  };

  const showBankInfo = async (affId) => {
    setShowModal(true);
    const res = await GetAffBankInfo(affId);
    setBankInfo(res.data.bankInfo);
  };

  return (
    <div className="mt-4 border-[1px] border-gray-200 rounded-lg p-10 pb-5 max-[700px]:p-2">
      <div className="flex flex-wrap justify-end gap-3 pb-3 items-center">
        <div className="relative">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-gray-600 border-[1px] rounded-full outline-none focus:ring-1 focus:ring-gray-400 pl-8 pr-3  py-1 "
            placeholder={t("searchHolder")}
            type="search"
          />
          <img
            className="w-4 absolute left-3 top-1/2 -translate-y-1/2"
            src="/image/icon/search.svg"
          />
        </div>
      </div>
      {loading && <Spinner />}
      <div className="overflow-auto">
        <table className="w-full text-[14px] font-medium">
          <thead className="h-14 text-left text-center">
            <tr className="border-t-gray-300 border-b-[1px]">
              <th>{t("name")}</th>
              <th>{t("country")}</th>
              <th>{t("email")}</th>
              <th>{t("phNumber")}</th>
              <th>{t("request") + " " + t("date")}</th>
              <th>{t("bank") + " " + t("address")}</th>
              <th>{t("withdrawal") + " " + t("date")}</th>
              <th>{t("status")}</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredPayments.length !== 0 ? (
              filteredPayments.map((payment, index) => (
                <tr
                  key={index}
                  data-tooltip-id="totalTable"
                  data-tooltip-place="top"
                  data-tooltip-content={t("moreInfoStatistic")}
                  className={`border-t-gray-300 border-b-[1px] text-gray-600 h-9 cursor-pointer`}
                >
                  <td
                    onClick={() => {
                      showBankInfo(payment.user._id);
                    }}
                  >
                    {payment.user.fullName}
                  </td>
                  <td
                    onClick={() => {
                      showBankInfo(payment.user._id);
                    }}
                  >
                    {payment.user.country}
                  </td>
                  <td
                    onClick={() => {
                      showBankInfo(payment.user._id);
                    }}
                  >
                    {payment.user.email}
                  </td>
                  <td
                    onClick={() => {
                      showBankInfo(payment.user._id);
                    }}
                  >
                    {payment.user.phoneNumber}
                  </td>
                  <td
                    onClick={() => {
                      showBankInfo(payment.user._id);
                    }}
                  >
                    {formatDate(payment.pay.createdAt)}
                  </td>
                  <td
                    onClick={() => {
                      showBankInfo(payment.user._id);
                    }}
                  >
                    {payment.pay.bank_address}
                  </td>
                  <td
                    onClick={() => {
                      showBankInfo(payment.user._id);
                    }}
                  >
                    {payment.pay.withdrawnDate
                      ? formatDate(payment.pay.withdrawnDate)
                      : ""}
                  </td>
                  <td>
                    <button
                      className={`py-1 px-2 rounded-md text-center text-gray-200 ${
                        payment.pay.kind === "Pending"
                          ? "bg-yellow-600"
                          : "bg-red-600"
                      }`}
                      onClick={() =>
                        changeStatus(payment.pay._id, payment.pay.kind)
                      }
                    >
                      {t(payment.pay.kind)}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr
                className={`border-t-gray-300 border-b-[1px] text-gray-600 h-9`}
              >
                <td colSpan={8}>{t("noData")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Tooltip id="totalTable" />

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        bankInfo={bankInfo}
      />

      <Toast
        type={toastType}
        message={toastMessage}
        isVisible={toastVisible}
        onClose={handleCloseToast}
      />
    </div>
  );
};

export default Payment;
