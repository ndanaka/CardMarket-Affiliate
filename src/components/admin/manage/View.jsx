import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

import Button from "./Button";
import AccountInfo from "../../homepage/account/AccountInfo";
import HomeContent from "../../homepage/content/Index";
import PaymentHistroy from "../../homepage/payment/History";

import HomeApi from "../../../api/homeApi";

const View = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { GetAffInfo } = HomeApi();

  const [select, setSelect] = useState("Profile");
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
    <>
      <div className="mt-10 border-[1px] border-gray-200 rounded-lg p-10 max-[700px]:p-2">
        <div className="flex flex-wrap justify-between mx-auto w-full md:w-4/5">
          <button
            className="mt-2 hover:opacity-75 bg-indigo-600 text-white rounded-md px-2 py-1 font-semibold"
            onClick={() => navigate(-1)}
          >
            <i className="fas fa-arrow-left" />
            &nbsp;<span>To Manage</span>
          </button>
          <div className="mt-2">
            <Button
              label={"Profile"}
              handle={() => setSelect("Profile")}
              select={select}
            />
            <Button
              label={"Progress"}
              handle={() => setSelect("Progress")}
              select={select}
            />
            <Button
              label={"Payment History"}
              handle={() => setSelect("Payment History")}
              select={select}
            />
          </div>
        </div>
        {select === "Profile" ? (
          <AccountInfo affInfo={affInfo} />
        ) : select === "Progress" ? (
          <HomeContent aff_Id={affId} />
        ) : (
          <PaymentHistroy aff_Id={affId} />
        )}
      </div>
    </>
  );
};

export default View;
