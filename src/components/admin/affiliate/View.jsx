import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "../common/Button";
import AccountInfo from "../../homepage/account/AccountInfo";
import HomeContent from "../../homepage/content/Index";
import PaymentHistroy from "../../homepage/payments/History";
import Spinner from "../../../utils/Spinner";

import HomeApi from "../../../api/homeApi";

const View = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { GetAffInfo } = HomeApi();

  const [select, setSelect] = useState(t("profile"));
  const [affInfo, setAffInfo] = useState();
  const [affRank, setAffRank] = useState();
  const [affBank, setAffBank] = useState();
  const [loading, setLoading] = useState(false);

  const { affId } = location.state || {};

  useEffect(() => {
    getAffInfo();
  }, []);

  const getAffInfo = async () => {
    setLoading(true);
    const res = await GetAffInfo(affId);
    setLoading(false);
    setAffInfo(res.data.affInfo);
    setAffRank(res.data.affRank);
    setAffBank(res.data.affBank);
  };

  const renderContent = () => {
    switch (select) {
      case t("profile"):
        return (
          <AccountInfo affInfo={affInfo} affRank={affRank} affBank={affBank} />
        );
      case t("statistics"):
        return (
          <div className="py-4">
            <HomeContent aff_id={affId} />
          </div>
        );
      case t("payment") + " " + t("history"):
        return (
          <div className="py-8">
            <PaymentHistroy aff_id={affId} />
          </div>
        );
      default:
        return <AccountInfo affInfo={affInfo} affRank={affRank} />;
    }
  };

  return (
    <div className="mt-10 border-[1px] border-gray-200 rounded-lg p-10 max-[700px]:p-2">
      {loading && <Spinner />}
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
      {renderContent()}
    </div>
  );
};

export default View;
