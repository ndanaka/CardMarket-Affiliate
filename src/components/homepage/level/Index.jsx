import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";

import { tokenWithPersistenceAtom } from "../../../atoms";
import { SERVER_URL } from "../../../constant/baseUrl";

import HomeApi from "../../../api/homeApi";

import AllLevel from "./AllLevel";
import CircleChart from "./CircleChart";
import formatPrice from "../../../utils/formatPrice";
import Spinner from "../../../utils/Spinner";

const LevelUpgrade = () => {
  const { t } = useTranslation();
  const { GetAllRanks, GetAffRank } = HomeApi();

  const [token, setToken] = useAtom(tokenWithPersistenceAtom);

  const [ranks, setRanks] = useState(null);
  const [affRank, setAffRank] = useState(null);
  const [totalPointsAmount, setTotalPointsAmount] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllRanks();
    getAffRank();
  }, []);

  const getAllRanks = async () => {
    try {
      setLoading(true);
      const res = await GetAllRanks();
      setLoading(false);
      setRanks(res.data.allRanks);
    } catch (error) {
      console.log(error);
    }
  };

  const getAffRank = async () => {
    setLoading(true);
    const res = await GetAffRank(jwtDecode(token).id);
    setLoading(false);
    if (res.data.status) {
      setTotalPointsAmount(res.data.totalPointsAmount);
      setAffRank(res.data.affRank);
    }
  };

  return (
    <div className="py-5 font-sans flex flex-wrap justify-center gap-5 max-[900px]:px-20 max-[800px]:px-2">
      {loading && <Spinner />}
      <div
        className="flex flex-wrap justify-center bg-white shadow-lg shadow-gray-400 px-5 py-5
         gap-5 max-[900px]:w-full lg:px-10 w-[40%] pb-10 max-[600px]:px-10 h-fit"
      >
        <div className="w-[45%] max-[500px]:w-full">
          <h3 className="py-3 font-semibold text-center">
            {t("current") + " " + t("level") + " " + t("benifit")}
          </h3>
          <img src={SERVER_URL + affRank?.img_url} />
          <p className=" font-semibold border-b-[1px] border-b-gray-400 py-2 text-center">
            <span className="te`xt-[red] text-[red] text-4xl font-bold ">
              {t(affRank?.name)}
            </span>
          </p>
          <p className=" font-semibold border-b-[1px] border-b-gray-400 py-2 text-center">
            <span className="te`xt-[red] text-[red] text-3xl font-bold ">
              {affRank?.deposite_commission}%
            </span>
            &nbsp; {t("perDeposit")}
          </p>
          <p className=" font-semibold border-b-[1px] border-b-gray-400 py-2 text-center">
            <span className="te`xt-[red] text-[red] text-3xl font-bold ">
              ¥{affRank?.register_commission}
            </span>
            &nbsp; {t("perRegister")}
          </p>
        </div>
        <div className="w-[45%] max-[500px]:w-full">
          <h3 className="py-3 font-semibold text-center">
            {t("current") + " " + t("level") + " " + t("status")}
          </h3>
          <p className="text-[red] text-3xl font-semibold text-center">
            {formatPrice(totalPointsAmount)} {" / "}
            {affRank?.end_amount ? formatPrice(affRank?.end_amount) : ""}
          </p>
          <div className=" relative">
            <CircleChart now={totalPointsAmount} end={affRank?.end_amount} />
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-[red] text-xl font-semibold">
                {totalPointsAmount < affRank?.end_amount
                  ? formatPrice(affRank?.end_amount - totalPointsAmount)
                  : ""}
              </p>
              <p className="text-[red] text-xl font-semibold">
                {totalPointsAmount < affRank?.end_amount
                  ? t("deposit")
                  : t("completed")}
              </p>
              <p>
                {totalPointsAmount < affRank?.end_amount
                  ? t("toNextLevel")
                  : t("nextLevel")}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-[500px]:w-full">
          <p className="text-gray-500 text-justify">{t("levelHint")}</p>
        </div>
      </div>
      <div className="bg-white px-10 py-5 max-[900px]:px-3 max-[900px]:w-full w-[55%]  shadow-lg shadow-gray-400 pb-10">
        <AllLevel ranks={ranks} />
        <h3 className="pt-3 font-semibold">{t("howGetLevel")}</h3>
        <p className="text-justify text-gray-500">{t("howGetLevelDesc")}</p>
      </div>
    </div>
  );
};

export default LevelUpgrade;
