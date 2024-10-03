import { useState } from "react";

import Info from "./Info";
import NavBar from "./NavBar";
import WithDraw from "./WithDraw";
import History from "./History";

const PaymentRequest = () => {
  const [navItem, setNavItem] = useState("info");

  return (
    <div className="m-10 max-[500px]:m-3 mt-5 shadow-md">
      <p className="text-2xl pb-5">
        Move Funds from your E-Wallet to your preferred payment method
      </p>
      <NavBar setNavItem={setNavItem} navItem={navItem} />
      <div className=" bg-gray-100 px-5 max-[500px]:px-2 py-5">
        {navItem === "info" ? (
          <Info />
        ) : navItem === "withdrawing" ? (
          <WithDraw />
        ) : navItem === "history" ? (
          <History />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PaymentRequest;
