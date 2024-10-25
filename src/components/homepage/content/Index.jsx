import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";
import { useTranslation } from "react-i18next";

import { tokenWithPersistenceAtom } from "../../../atoms";

import ClientStats from "./ClientStats";
import TotalStats from "./TotalStats";
import LinkStats from "./LinkStats";
import LinkClients from "./LinkClients";
import Toast from "../../../utils/toast";

const Content = ({ aff_Id }) => {
  const { t } = useTranslation();

  const [period, setPeriod] = useState(t("today"));
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const firstLogin = localStorage.getItem("firstLogin");

  let affId;
  if (aff_Id) {
    affId = aff_Id;
  } else {
    if (token) affId = jwtDecode(token).id;
  }

  const handleCloseToast = () => {
    setToastVisible(false);
  };

  useEffect(() => {
    if (firstLogin) {
      setToastVisible(true);
      setToastType("success");
      setToastMessage(t("successLoggedIn"));
      localStorage.removeItem("firstLogin");
    }
  });

  return (
    <div className="mx-8 my-4">
      {/* <p className="font-sans font-semibold text-2xl pb-3">{t("statistics")}</p> */}
      <div className="flex flex-wrap justify-center gap-2">
        <TotalStats affId={affId} setPeriod={setPeriod} />
        <ClientStats affId={affId} period={period} />
        {/* <LinkStats affId={affId} setPeriod={setPeriod} />
        <LinkClients affId={affId} period={period} /> */}
      </div>
      <Toast
        type={toastType}
        message={toastMessage}
        isVisible={toastVisible}
        onClose={handleCloseToast}
      />
    </div>
  );
};

export default Content;
