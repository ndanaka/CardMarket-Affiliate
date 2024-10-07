import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import HomeApi from "../../../api/homeApi";
import AppServerErr from "../../../errors/AppServerErr";
import FormikErr from "../../../errors/FormikErr";

const Account = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const { op, submitBankRegister } = HomeApi();

  const formSchema = yup.object({
    nameOfFinacial: yup.string().required("Financial name is required"),
    accountNumber: yup
      .string()
      .matches(/^\d+$/, "Must be only digits") // Ensures only digits
      // .min(7, "The number should be at least 7 digits") // Minimum length validation
      .required("Account Number is required"),
    accountHolder: yup.string().required("Account holder is required"),
  });

  const formik = useFormik({
    initialValues: {
      transType: "other",
      nameOfFinacial: "",
      accountType: "ordinary",
      accountNumber: "",
      accountHolder: "",
    },
    onSubmit: ({
      transType,
      nameOfFinacial,
      accountType,
      accountNumber,
      accountHolder,
    }) => {
      submitBankRegister({
        transType,
        nameOfFinacial,
        accountType,
        accountNumber,
        accountHolder,
      });
    },
    validationSchema: formSchema,
  });

  return (
    <div className="bg-white py-12 px-4 md:px-8 lg:px-12 my-5 mx-auto w-full lg:w-4/5">
      <p className="text-[22px] font-semibold text-center mb-8">
        Register a transfer account
      </p>
      <form className="font-sans" onSubmit={formik.handleSubmit}>
        <div className="flex flex-wrap justify-start md:items-center my-10">
          <div className="w-full md:w-1/4 mb-2 md:mb-0">
            <p className="text-md">Type</p>
          </div>
          <div className="flex flex-col w-full md:w-3/4">
            <label>
              <input
                type="radio"
                name="transType"
                value="other"
                onChange={formik.handleChange}
                checked={formik.values.transType === "other"}
              />
              <span>
                {" "}
                Banks (other than Japan Post Bank), Shinkin banks, etc.
              </span>
            </label>
            <label>
              <input
                type="radio"
                name="transType"
                value="post"
                onChange={formik.handleChange}
                checked={formik.values.transType === "post"}
              />
              <span> Japan Post Bank</span>
            </label>
          </div>
        </div>
        <div className="flex flex-wrap justify-start md:items-center my-10">
          <div className="w-full md:w-1/4 mb-2 md:mb-0">
            <p className="text-md">Name of finacial institution</p>
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-3/4 h-full items-center">
            {/* <span className="mb-1 md:mb-0">Narin Stein bank account</span> */}
            <input
              type="text"
              name="nameOfFinacial"
              className="block px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={formik.values.nameOfFinacial}
              onChange={formik.handleChange("nameOfFinacial")}
            />
            <button className="border border-blue-400 text-blue-400 rounded-full md:py-2 px-4 md:px-12">
              Edit
            </button>
          </div>
          <FormikErr
            touched={formik.touched.nameOfFinacial}
            errors={formik.errors.nameOfFinacial}
          />
        </div>
        <div className="flex flex-wrap justify-start md:items-center my-10">
          <div className="w-full md:w-1/4 mb-2 md:mb-0">
            <p className="text-md">Account Type</p>
          </div>
          <div className="flex flex-col w-full md:w-3/4">
            <label>
              <input
                type="radio"
                name="accountType"
                value="ordinary"
                onChange={formik.handleChange}
                checked={formik.values.accountType === "ordinary"}
              />
              <span> Ordinary</span>
            </label>
            <label>
              <input
                type="radio"
                name="accountType"
                value="current"
                onChange={formik.handleChange}
                checked={formik.values.accountType === "current"}
              />
              <span> Current account</span>
            </label>
          </div>
        </div>
        <div className="flex flex-wrap justify-start md:items-center my-10">
          <div className="w-full md:w-1/4 mb-2 md:mb-0">
            <p className="text-md">Account Number</p>
          </div>
          <div className="flex flex-col w-full md:w-3/4">
            <input
              type="text"
              name="accountNumber"
              className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={formik.values.accountNumber}
              onChange={formik.handleChange}
            />
            <span className="block text-sm font-semibold text-gray-800 mt-1">
              Note: If the number is less than 7 digits, please add a leading
              zero.
            </span>
          </div>
          <FormikErr
            touched={formik.touched.accountNumber}
            errors={formik.errors.accountNumber}
          />
        </div>
        <div className="flex flex-wrap justify-start md:items-center my-10">
          <div className="w-full md:w-1/4 mb-2 md:mb-0">
            <p className="text-md">Name of Account Holder</p>
          </div>
          <div className="flex flex-col w-full md:w-3/4">
            <input
              type="text"
              name="accountHolder"
              className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={formik.values.accountHolder}
              onChange={formik.handleChange("accountHolder")}
            />
            <span className="block text-sm font-semibold text-gray-800 mt-1">
              Note: Please make sure to enter the name as it appears in the
              “Nominee” column of the account to which the money is to be
              transferred.
            </span>
          </div>
          <FormikErr
            touched={formik.touched.accountHolder}
            errors={formik.errors.accountHolder}
          />
        </div>
        <AppServerErr>
          {op.serverErr === "Network Error" ? op.serverErr : op.appErr}
        </AppServerErr>
        <div className="flex flex-wrap justify-between">
          <button
            type="submit"
            className="rounded-full py-2 px-20 mx-auto bg-blue-400 text-white"
          >
            Register
          </button>
        </div>
      </form>
    </div>

    // <>
    //   <div className="bg-white p-7 max-[500px]:p-4 my-5">
    //     <p className="text-[18px] font-semibold">Withdrawing Funds</p>
    //     <p className="text-[14px]">
    //       Please note that, as per our regulator’s requests and the related
    //       KYC/AML policies, to withdraw funds you must first contact your
    //       Affiliate Account Manager, who will enable the option for you. For any
    //       further queries and support, we remain at your disposal. You must
    //       first complete the account verification process before proceeding with
    //       a withdrawal.
    //     </p>
    //   </div>
    //   <div className="bg-white px-5 py-5">
    //     <p className="text-[18px] font-semibold">E-Wallet Information</p>
    //     <ul className="flex flex-wrap items-center gap-10 px-10 max-[500px]:px-2">
    //       <li className="flex items-center gap-5">
    //         <i className="fas fa-credit-card text-[40px]" />
    //         <div className="text-[red] font-bold  text-[24px]">
    //           <p>700546324</p>
    //           <p className="text-[14px] text-gray-700 font-semibold">
    //             E-Wallet ID:
    //           </p>
    //         </div>
    //       </li>
    //       <li className="flex items-center gap-5">
    //         <i className="fas fa-balance-scale text-[40px]" />
    //         <div className="text-[red] font-bold  text-[24px]">
    //           <p>$2580.00</p>
    //           <p className="text-[14px] text-gray-700 font-semibold">
    //             E-Wallet Balance:
    //           </p>
    //         </div>
    //       </li>
    //       <li className="text-justify">
    //         The commissions you earn are automatically transferred from the
    //         affiliate program to your assigned E-wallet. You have the option to
    //         move your commissions that are already credited into your E-wallet
    //         account either to your MT4/MT5 trading accounts or request payment
    //         directly to another available withdrawal method. Click on the Brand
    //         tab, then choose a payment method and fill in the requirement
    //         details so we can process your payment transfer.
    //       </li>
    //     </ul>
    //   </div>
    // </>
  );
};

export default Account;
