import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";

import { tokenWithPersistenceAtom } from "../../../atoms";
import { SERVER_URL } from "../../../constant/baseUrl";

import HomeApi from "../../../api/homeApi";

import LevelOverview from "./LevelOverview";
import Calculator from "./Calculator";
import Example from "./Example";
import CircleChart from "./CircleChart";
import formatPrice from "../../../utils/formatPrice";

const LevelUpgrade = () => {
  const { t } = useTranslation();
  const { GetAllRanks, GetAffRank } = HomeApi();

  const [token, setToken] = useAtom(tokenWithPersistenceAtom);

  const [ranks, setRanks] = useState(null);
  const [affRank, setAffRank] = useState(null);

  useEffect(() => {
    getAllRanks();
    getAffRank();
  }, []);

  const getAllRanks = async () => {
    try {
      const res = await GetAllRanks();
      setRanks(res.data.allRanks);
    } catch (error) {
      console.log(error);
    }
  };

  const getAffRank = async () => {
    try {
      const res = await GetAffRank(jwtDecode(token).rank);
      setAffRank(res.data.affRank);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="py-5 font-sans flex flex-wrap justify-center gap-5 max-[900px]:px-20 max-[800px]:px-2">
        <div
          className="flex flex-wrap justify-center bg-white shadow-lg shadow-gray-400 px-5 py-5
         gap-5 max-[900px]:w-full lg:px-10 w-[40%] pb-10 max-[600px]:px-10"
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
              {formatPrice(jwtDecode(token).totalPointsAmount)}/
              {formatPrice(affRank?.end_amount)}
            </p>
            <div className=" relative">
              <CircleChart
                now={jwtDecode(token).totalPointsAmount}
                end={affRank?.end_amount}
              />
              <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-[red] text-xl font-semibold">
                  {formatPrice(
                    affRank?.end_amount - jwtDecode(token).totalPointsAmount
                  )}
                </p>
                <p className="text-[red] text-xl font-semibold">
                  {jwtDecode(token).totalPointsAmount < affRank?.end_amount
                    ? t("deposit")
                    : t("completed")}
                </p>
                <p>
                  {jwtDecode(token).totalPointsAmount < affRank?.end_amount
                    ? t("toNextLevel")
                    : ""}
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-justify">{t("levelHint")}</p>
          </div>
        </div>
        <div className="bg-white px-10 py-5 max-[900px]:px-3 max-[900px]:w-full w-[55%]  shadow-lg shadow-gray-400 pb-10">
          <LevelOverview ranks={ranks} />
          <h3 className="py-3 font-semibold">{t("howGetLevel")}</h3>
          <p className=" text-justify text-gray-500">{t("howGetLevelDesc")}</p>
        </div>
      </div>
      {/* <div className="pb-10 font-sans bg-gray-100 flex flex-wrap justify-center gap-5 max-[900px]:px-20 max-[800px]:px-2">
        <Calculator />
        <Example />
      </div> */}
    </>
  );
};

export default LevelUpgrade;
