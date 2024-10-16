import { useState } from "react";

import Account from "./Account";
import NavBar from "./NavBar";
import WithDraw from "./WithDraw";
import History from "./History";

const PaymentRequest = () => {
  const [navItem, setNavItem] = useState("account");

  return (
    <div className="m-10 max-[500px]:m-3 mt-5 shadow-md">
      <p className="text-2xl pb-5">
        Withdraw balance to your preferred transfer bank account
      </p>
      <NavBar setNavItem={setNavItem} navItem={navItem} />
      <div className=" bg-gray-100 px-5 max-[500px]:px-2 py-5">
        {navItem === "account" ? (
          <Account />
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
