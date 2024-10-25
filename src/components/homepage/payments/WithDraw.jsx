import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

import FormikErr from "../../../errors/FormikErr";
import HomeApi from "../../../api/homeApi";

import Input from "./Input";
import PayButton from "./PayButton";
import Modal from "./Modal";
import Toast from "../../../utils/toast";

const WithDraw = () => {
  const { t } = useTranslation();
  const [confirmErr, setConfirmErr] = useState("");
  const [modal, setModal] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const { op, SubmitWithdraw } = HomeApi();

  const formSchema = yup.object({
    amount: yup
      .number()
      .max(2580, t("invalidBalance"))
      .required(t("withdrawal") + " " + t("amount") + " " + t("isRequired")),
    address: yup.number().required("Receiving Adress is required."),
    confirm: yup.string().required("Confirm Address is required."),
  });

  const formik = useFormik({
    initialValues: {
      amount: "",
      address: "",
      confirm: "",
    },
    validate: (values) => {
      const errors = {};
      if (values.address !== values.confirm) {
        errors.confirm1 = "Must be the same Adress.";
        setConfirmErr("error");
      } else {
        setConfirmErr("");
      }
      return errors;
    },
    onSubmit: (values) => {
      setModal(true);
    },
    validationSchema: formSchema,
  });

  // excute the pay request
  const handlePay = async () => {
    setModal(false);
    const result = await SubmitWithdraw(formik.values);

    if (result.data.status) {
      setToastType("success");
    } else {
      setToastType("warning");
    }
  };

  const handleCloseToast = () => {
    setToastVisible(false);
  };

  return (
    <div className="bg-white py-8 px-4 md:px-8 lg:px-12 mx-auto w-full md:w-4/5 lg:w-3/5">
      <p className="text-[22px] font-semibold text-center mb-8">
        {t("request") + " " + t("withdrawal")}
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          label={t("withdrawal") + " " + t("amount") + " (¥)"}
          type={"number"}
          name={"amount"}
          value={formik.values.amount}
          onChange={formik.handleChange("amount")}
          placeholder={"1500"}
        />
        <FormikErr
          touched={formik.touched.amount}
          errors={formik.errors.amount}
        />
        {/* <br />
        <Input
          label={"Receiving address"}
          type={"tel"}
          name={"address"}
          value={formik.values.address}
          onChange={formik.handleChange("address")}
          placeholder={"811234567890"}
        />
        <FormikErr
          touched={formik.touched.address}
          errors={formik.errors.address}
        />
        <br />
        <Input
          label={"Confirm address"}
          type={"tel"}
          name={"confirm"}
          value={formik.values.confirm}
          onChange={formik.handleChange("confirm")}
          placeholder={"811234567890"}
        />
        <FormikErr
          touched={formik.touched.confirm}
          errors={formik.errors.confirm1}
        /> */}
        <PayButton
          label={t("send") + " " + t("request")}
          handle={() => setModal("modal")}
        />
        <Modal
          setConfirmErr={setConfirmErr}
          modal={modal}
          setModal={setModal}
          handlePay={handlePay}
        />
      </form>
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
