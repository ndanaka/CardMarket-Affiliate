import { useState } from "react";
import { useTranslation } from "react-i18next";

import Account from "./Account";
import NavBar from "./NavBar";
import WithDraw from "./WithDraw";
import History from "./History";

const PaymentRequest = () => {
  const { t } = useTranslation();
  const [navItem, setNavItem] = useState("account");

  return (
    <div className="m-10 max-[500px]:m-3 mt-4">
      <p className="font-sans font-semibold text-2xl pb-5">
        {t("withdrawDesc")}
      </p>
      <NavBar setNavItem={setNavItem} navItem={navItem} />
      <div className="bg-gray-100 px-5 py-5">
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
