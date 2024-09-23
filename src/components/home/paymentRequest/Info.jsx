import React from "react";

const Info = () => {
  return (
    <>
      <div className="bg-white p-7 max-[500px]:p-4 my-5">
        <p className="text-[18px] font-semibold">Withdrawing Funds</p>
        <p className="text-[14px]">
          Please note that, as per our regulator’s requests and the related
          KYC/AML policies, to withdraw funds you must first contact your
          Affiliate Account Manager, who will enable the option for you. For any
          further queries and support, we remain at your disposal. You must
          first complete the account verification process before proceeding with
          a withdrawal.
        </p>
      </div>
      <div className="bg-white px-5 py-5">
        <p className="text-[18px] font-semibold">E-Wallet Information</p>
        <ul className="flex flex-wrap items-center gap-10 px-10 max-[500px]:px-2">
          <li className="flex items-center gap-5">
            <i className="fas fa-credit-card text-[40px]" />
            <div className="text-[red] font-bold  text-[24px]">
              <p>700546324</p>
              <p className="text-[14px] text-gray-700 font-semibold">
                E-Wallet ID:
              </p>
            </div>
          </li>
          <li className="flex items-center gap-5">
            <i className="fas fa-balance-scale text-[40px]" />
            <div className="text-[red] font-bold  text-[24px]">
              <p>$2580.00</p>
              <p className="text-[14px] text-gray-700 font-semibold">
                E-Wallet Balance:
              </p>
            </div>
          </li>
          <li className="text-justify">
            The commissions you earn are automatically transferred from the
            affiliate program to your assigned E-wallet. You have the option to
            move your commissions that are already credited into your E-wallet
            account either to your MT4/MT5 trading accounts or request payment
            directly to another available withdrawal method. Click on the Brand
            tab, then choose a payment method and fill in the requirement
            details so we can process your payment transfer.
          </li>
        </ul>
      </div>
    </>
  );
};
export default Info;
