import React from "react";
const PayImage = ({ method, confirmErr }) => {
  return (
    <>
      <div className="relative">
        <img
          className={`${method && "w-[400px]"} w-[0px] duration-1000`}
          src={`/image/payLogo/${
            method === "googlePay"
              ? "googlePay(Phone).png"
              : method === "applePay"
              ? "applePay(Phone).png"
              : "applePay(Phone).png"
          }`}
        />
        <p
          className={`${
            confirmErr === "ok" ? "bg-transparent" : "bg-white"
          } absolute top-[48%] left-[47%] w-[15%] h-[15%] duration-[1s]`}
        ></p>
      </div>
    </>
  );
};
export default PayImage;
