import React from "react";
const PayMethod = ({ setMethod, method }) => {
  return (
    <>
      <div className="mt-5 flex items-center gap-5 max-[500px]:gap-1">
        <span className="block text-sm font-semibold text-gray-800">
          WithDrawing Method:
        </span>
        <button
          onClick={() => setMethod("googlePay")}
          type="button"
          className={`${method === "googlePay" && "bg-gray-300"} rounded-md`}
        >
          <img
            className="h-8 border-2 border-gray-600 rounded-md py-1 px-3"
            src="/image/payLogo/googlePayLogo.png"
          />
        </button>
        <button
          onClick={() => setMethod("applePay")}
          type="button"
          className={`${method === "applePay" && "bg-gray-300"} rounded-md`}
        >
          <img
            className="h-8 border-2 border-gray-600 rounded-md py-1 px-3"
            src="/image/payLogo/applePayLogo.png"
          />
        </button>
      </div>
    </>
  );
};
export default PayMethod;
