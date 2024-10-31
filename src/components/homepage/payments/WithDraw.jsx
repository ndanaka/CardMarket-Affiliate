import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useAtom } from "jotai";

import FormikErr from "../../../errors/FormikErr";
import HomeApi from "../../../api/homeApi";
import { balanceAtom } from "../../../atoms/balanceAtom";

import Input from "./Input";
import PayButton from "./PayButton";
import Modal from "./Modal";
import Toast from "../../../utils/toast";
import Spinner from "../../../utils/Spinner";

const WithDraw = () => {
  const { t } = useTranslation();

  const [bankInfo, setBankInfo] = useState(null);
  const [affBalance, setAffBalance] = useState(null);
  const [confirmErr, setConfirmErr] = useState("");
  const [modal, setModal] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [balance, setBalance] = useAtom(balanceAtom);
  const [loading, setLoading] = useState(false);

  const { SubmitWithdraw, GetAffBankInfo } = HomeApi();

  useEffect(() => {
    getAffBankInfo();
  }, [modal]);

  const getAffBankInfo = async () => {
    setLoading(true);
    const res = await GetAffBankInfo();
    setLoading(false);
    if (res.data.status) {
      setBankInfo(res.data.bankInfo);
      setAffBalance(res.data.affBalance);

      // Update formik value once bank info is fetched
      if (res.data.bankInfo) {
        formik.setFieldValue("address", res.data.bankInfo.accountNumber);
      }
    }
  };

  const formSchema = yup.object({
    amount: yup
      .number()
      .max(affBalance, t("invalidBalance"))
      .required(t("withdrawal") + " " + t("amount") + " " + t("isRequired")),
  });

  const formik = useFormik({
    initialValues: {
      amount: "",
      address: "",
    },
    onSubmit: () => {
      setModal(true);
    },
    validationSchema: formSchema,
  });

  // excute the pay request
  const handlePay = async () => {
    formik.values.bankInfo = bankInfo;
    setLoading(true);
    const res = await SubmitWithdraw(formik.values);
    setLoading(false);

    setToastVisible(true);
    if (res.data.status) {
      setBalance({
        pending: res.data.pendingPrices,
        withdrawable: res.data.withdrawablePrices,
        withdrawn: 0,
      });
      setModal(false);
      setToastType("success");
      setToastMessage(t("successReqest"));
      formik.resetForm();
    } else {
      setToastType("warning");
      setToastMessage(t("failedRequest"));
    }
  };

  const handleCloseToast = () => {
    setToastVisible(false);
  };

  return (
    <div className="bg-white py-8 px-4 md:px-8 lg:px-12 mx-auto w-full md:w-4/5 lg:w-3/5">
      {loading && <Spinner />}
      <p className="text-[22px] font-semibold text-center mb-8">
        {t("request") + " " + t("withdrawal")}
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          label={t("account") + " " + t("number")}
          type={"text"}
          name={"address"}
          value={formik.values.address}
          onChange={formik.handleChange("address")}
          readOnly={true}
          className={"cursor-not-allowed"}
        />
        <br />
        <Input
          label={t("withdrawal") + " " + t("amount") + " (¥)"}
          type={"number"}
          name={"amount"}
          value={formik.values.amount}
          onChange={formik.handleChange("amount")}
          placeholder={"0"}
        />
        <FormikErr
          touched={formik.touched.amount}
          errors={formik.errors.amount}
        />
        <PayButton label={t("send") + " " + t("request")} />
      </form>
      <Modal
        modal={modal}
        setConfirmErr={setConfirmErr}
        setModal={setModal}
        handlePay={handlePay}
      />
      <Toast
        type={toastType}
        message={toastMessage}
        isVisible={toastVisible}
        onClose={handleCloseToast}
      />
    </div>
  );
};

export default WithDraw;
