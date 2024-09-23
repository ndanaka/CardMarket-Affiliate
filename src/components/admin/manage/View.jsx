import { useNavigate } from "react-router";
import Button from "./Button";
import { useState } from "react";
import AccountInfo from "../../home/account/AccountInfo";
import Home from "../../home/homepage/Index";
import PaymentHistroy from "../../home/paymentHistory/Index";

const View = () => {
  const [select, setSelect] = useState("Profile");
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-10 border-[1px] border-gray-200 rounded-lg p-10 max-[700px]:p-2">
        <div className="flex flex-wrap justify-between pr-10 gap-3 pb-3">
          <div className="flex flex-wrap gap-2 justify-center items-center">
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
            <button
              className="hover:opacity-75  bg-indigo-600 text-white rounded-md px-3 py-1 font-semibold mx-10"
              onClick={() => navigate("/admin/manage")}
            >
              <i className="fas fa-arrow-left" />
              &nbsp;To Manage
            </button>
          </div>
        </div>
        <div className=" ">
          {select === "Profile" ? (
            <AccountInfo role={"manager"} />
          ) : select === "Progress" ? (
            <Home role="manager" />
          ) : (
            <PaymentHistroy />
          )}
        </div>
      </div>
    </>
  );
};
export default View;
