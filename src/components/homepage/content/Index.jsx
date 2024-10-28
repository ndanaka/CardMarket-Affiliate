import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";
import { useTranslation } from "react-i18next";

import { tokenWithPersistenceAtom } from "../../../atoms";

import Statistics from "./Statistics";
import ClientStatus from "./DepositStatus";
import LinkStatus from "./LinkStatus";
import MyLinks from "./MyLinks";
import Toast from "../../../utils/toast";

const Content = ({ aff_Id }) => {
  const { t } = useTranslation();

  const [period, setPeriod] = useState("today");
  const [selectedLinkId, setSelectedLinkId] = useState("");
  const [selectedLinkName, setSelectedLinkName] = useState("");
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
    <div className="mx-8 my-2">
      <div className="flex flex-wrap justify-center gap-2">
        <div className="w-[60%] max-[900px]:w-full my-2">
          <Statistics affId={affId} setPeriod={setPeriod} />
        </div>
        <div className="max-[900px]:w-full w-[39%]">
          <ClientStatus affId={affId} period={period} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <div className="w-[49%] max-[900px]:w-full my-2">
          <MyLinks
            affId={affId}
            setSelectedLinkId={setSelectedLinkId}
            setSelectedLinkName={setSelectedLinkName}
          />
        </div>
        <div className="max-[900px]:w-full w-[50%]">
          <LinkStatus
            affId={affId}
            linkId={selectedLinkId}
            linkName={selectedLinkName}
          />
        </div>
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
