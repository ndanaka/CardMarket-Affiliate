import { useState } from "react";

import Info from "./Info";
import NavBar from "./NavBar";
import WithDraw from "./WithDraw";

const PaymentRequest = () => {
  const [show2, setShow2] = useState(true);

  return (
    <>
      <div className="m-10 max-[500px]:m-3 mt-5 shadow-md">
        <p className="text-2xl pb-5">
          Move Funds from your E-Wallet to your preferred payment method
        </p>
        <NavBar setShow2={setShow2} show2={show2} />
        <div className=" bg-gray-100 px-5 max-[500px]:px-2 py-5">
          {show2 ? <Info /> : <WithDraw />}
        </div>
      </div>
    </>
  );
};

export default PaymentRequest;
