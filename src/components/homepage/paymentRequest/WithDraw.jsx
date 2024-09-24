import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import FormikErr from "../../../errors/FormikErr";

import Input from "./Input";
import PayButton from "./PayButton";
import PayMethod from "./PayMethod";
import PayImage from "./PayImage";
import Modal from "./Modal";

const WithDraw = () => {
  const [confirmErr, setConfirmErr] = useState("");
  const [method, setMethod] = useState("");
  const [modal, setModal] = useState(false);

  const formSchema = yup.object({
    paymentMethod: yup.string().required("Payment Method is required"),
    amount: yup
      .number()
      .max(2580, "So much more than yours!")
      .required("Withdrawal amount is required"),
    address: yup.number().required("Receiving Adress is required"),
    confirm: yup.string().required("Confirm Address is required"),
  });

  const formik = useFormik({
    initialValues: {
      paymentMethod: "",
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
    onSubmit: ({ paymentMethod, amount, address, confirm }) => {
      handlePay({ paymentMethod, amount, address, confirm });
    },
    validationSchema: formSchema,
  });

  //excute the pay request
  const handlePay = (a) => {
    if (confirmErr === "error") {
      return;
    } else {
      setModal(true);
    }
  };

  //For payment method picture
  useEffect(() => {
    if (method === "googlePay") {
      formik.values.paymentMethod = "googlePay";
    }
    if (method === "applePay") {
      formik.values.paymentMethod = "applePay";
    }
  }, [method]);

  return (
    <>
      <div
        className={`flex min-[1050]:flex-wrap max-[1050px]:flex-col justify-center items-center gap-44 max-[1050px]:gap-10 ${
          !method && "gap-0"
        }`}
      >
        <form onSubmit={formik.handleSubmit}>
          <PayMethod setMethod={setMethod} method={method} />
          {!method && (
            <FormikErr
              touched={formik.touched.paymentMethod}
              errors={formik.errors.paymentMethod}
            />
          )}
          <br />
          <Input
            label={"Withdrawal Amount $"}
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
          <Input
            label={"Receiving address(Phone Number)"}
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
          <Input
            label={"Confirm address(Phone Number)"}
            type={"tel"}
            name={"confirm"}
            value={formik.values.confirm}
            onChange={formik.handleChange("confirm")}
            placeholder={"811234567890"}
          />
          <FormikErr
            touched={formik.touched.confirm}
            errors={formik.errors.confirm1}
          />
          <PayButton
            label={"Request a Payment"}
            handle={() => setModal("modal")}
          />
          <Modal
            setConfirmErr={setConfirmErr}
            modal={modal}
            setModal={setModal}
          />
        </form>
        <PayImage method={method} confirmErr={confirmErr} />
      </div>
    </>
  );
};

export default WithDraw;
