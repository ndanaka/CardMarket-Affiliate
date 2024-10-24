import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import AddRank from "./AddRank";
import LevelOverview from "../../homepage/levelUpgrade/LevelOverview";

import HomeApi from "../../../api/homeApi";
import formatPrice from "../../../utils/formatPrice";
import { SERVER_URL } from "../../../constant/baseUrl";
import Toast from "../../../utils/toast";

const Rank = () => {
  const { t } = useTranslation();
  const { GetAllRanks, DeleteRank } = HomeApi();
  const [selectedImgUrl, setSelectedImgUrl] = useState("");
  const [selectedRank, setSelectedRank] = useState(null);
  const [ranks, setRanks] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  useEffect(() => {
    getAllRanks();
  }, []);

  const getAllRanks = async () => {
    try {
      const res = await GetAllRanks();
      setRanks(res.data.allRanks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (rank) => {
    setSelectedRank(rank);
    setSelectedImgUrl(rank.img_url);
  };

  const handleDelete = async (rankId) => {
    try {
      const res = await DeleteRank({ _id: rankId });
      setToastVisible(true);
      if (res.status) {
        setToastType("success");
        setToastMessage(t("successDeleted"));
        getAllRanks();
      } else {
        setToastType("error");
        setToastMessage(t("failedDeleted"));
      }
    } catch (error) {}
  };

  const handleCloseToast = () => {
    setToastVisible(false);
  };

  return (
    <div className="flex flex-wrap w-full my-4">
      <div className="px-2 w-full sm:w-1/3 py-4 border-[1px] border-gray-200 h-fit">
        <AddRank
          selectedRank={selectedRank}
          setSelectedRank={setSelectedRank}
          selectedImgUrl={selectedImgUrl}
          setSelectedImgUrl={setSelectedImgUrl}
          getAllRanks={getAllRanks}
        />
      </div>
      <div className="text-center p-2 w-full sm:w-2/3 py-4 border-[1px] border-gray-200">
        <LevelOverview ranks={ranks} />
        <table className="mt-4 w-full border-t-[1px] text-center">
          <thead className="h-8">
            <tr>
              <th rowSpan={2}>{t("name")}</th>
              <th colSpan="2">{t("commission")}</th>
              <th rowSpan={2}>{t("range")}</th>
              <th rowSpan={2}>{t("image")}</th>
              <th rowSpan={2}>{t("action")}</th>
            </tr>
            <tr>
              <th>{t("register")}</th>
              <th>{t("deposit")}</th>
            </tr>
          </thead>
          <tbody className="">
            {ranks?.map((rank, index) => (
              <tr
                key={index}
                className={` border-t-gray-300 border-t-[1px] text-gray-600  h-9`}
              >
                <td>{t(rank.name)}</td>
                <td>¥{rank.register_commission}</td>
                <td>{rank.deposite_commission}%</td>
                <td>
                  {"¥" + formatPrice(rank.start_amount)} ~{" "}
                  {rank.last ? "" : "¥" + formatPrice(rank.end_amount)}
                </td>
                <td>
                  <img
                    className="m-auto w-[80px] h-[100px]"
                    src={SERVER_URL + rank.img_url}
                    alt={`${rank._id} ranks`} // Meaningful alt text
                  />
                </td>
                <td>
                  <span
                    className="fa fa-edit p-1.5 cursor-pointer"
                    onClick={() => {
                      handleEdit(rank);
                    }}
                  />
                  <span
                    className="fa fa-remove p-1.5 cursor-pointer"
                    onClick={() => {
                      handleDelete(rank._id);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default Rank;
