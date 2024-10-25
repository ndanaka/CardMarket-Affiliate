import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "./Button";
import AccountInfo from "../../homepage/account/AccountInfo";
import HomeContent from "../../homepage/content/Index";
import PaymentHistroy from "../../homepage/payments/History";

import HomeApi from "../../../api/homeApi";

const View = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { GetAffInfo } = HomeApi();

  const [select, setSelect] = useState(t("profile"));
  const [affInfo, setAffInfo] = useState();

  const { affId } = location.state || {};

  useEffect(() => {
    getAffInfo();
  });

  const getAffInfo = async () => {
    try {
      const affInfo = await GetAffInfo(affId);
      setAffInfo(affInfo.data.affInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10 border-[1px] border-gray-200 rounded-lg p-10 max-[700px]:p-2">
      <div className="flex flex-wrap justify-between mx-auto w-full md:w-4/5">
        <button
          className="mt-2 hover:opacity-75 bg-indigo-600 text-white rounded-md px-2 py-1 font-semibold"
          onClick={() => navigate(-1)}
        >
          <i className="fas fa-arrow-left" />
          &nbsp;<span>{t("back")}</span>
        </button>
        <div className="mt-2">
          <Button
            label={t("profile")}
            handle={() => setSelect(t("profile"))}
            select={select}
          />
          <Button
            label={t("statistics")}
            handle={() => setSelect(t("statistics"))}
            select={select}
          />
          <Button
            label={t("payment") + " " + t("history")}
            handle={() => setSelect(t("payment") + " " + t("history"))}
            select={select}
          />
        </div>
      </div>
      {select === t("profile") ? (
        <AccountInfo affInfo={affInfo} />
      ) : select === t("statistics") ? (
        <HomeContent aff_Id={affId} />
      ) : (
        <div className="py-4">
          <PaymentHistroy aff_Id={affId} />
        </div>
      )}
    </div>
  );
};

export default View;
