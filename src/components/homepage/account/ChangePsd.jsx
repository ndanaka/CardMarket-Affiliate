import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import AuthApi from "../../../api/authApi";

import FormikErr from "../../../errors/FormikErr";
import AppServerErr from "../../../errors/AppServerErr";

import Input from "./Input";
import PsdShowBtn from "./PsdShowBtn";
import SignButton from "../../sign/SignButton";

const ChangePsd = ({ setShow }) => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, SetShowNew] = useState(false);
  const [showConfirm, SetShowConfirm] = useState(false);

  const { op, Register } = AuthApi();

  const formSchema = yup.object({
    currentPsd: yup.string().required("Name is required"),
    newPsd: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain at least one letter, one number, and one special character"
      )
      .required("Password is required"),
    confirmPsd: yup
      .string()
      .oneOf([yup.ref("newPsd"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      currentPsd: "",
      newPsd: "",
      confirmPsd: "",
    },
    onSubmit: ({ currentPsd, newPsd, confirmPsd }) => {
      Register({
        currentPsd,
        newPsd,
        confirmPsd,
      });
    },
    validationSchema: formSchema,
  });

  return (
    <>
      <div className="w-[400px] mx-auto mt-10">
        <AppServerErr>
          {op.serverErr === "Network Error" ? op.serverErr : null}
        </AppServerErr>
        <form className="mt-6 font-sans" onSubmit={formik.handleSubmit}>
          <div className=" relative">
            <Input
              label={"Current Password"}
              type={!showCurrent ? "password" : "text"}
              name={"currentPsd"}
              value={formik.values.currentPsd}
              onChange={formik.handleChange("currentPsd")}
            />
            <PsdShowBtn setShow={setShowCurrent} show={showCurrent} />
          </div>
          <FormikErr
            touched={formik.touched.currentPsd}
            errors={formik.errors.currentPsd}
          />
          <AppServerErr>
            {op.appErr ===
              "Current Password is not correct, try with a different one" &&
              op.appErr}
          </AppServerErr>
          <div className=" relative">
            <Input
              label={"New Password"}
              type={!showNew ? "password" : "text"}
              name={"newPsd"}
              value={formik.values.newPsd}
              onChange={formik.handleChange("newPsd")}
            />
            <PsdShowBtn setShow={SetShowNew} show={showNew} />
          </div>
          <FormikErr
            touched={formik.touched.newPsd}
            errors={formik.errors.newPsd}
          />
          <div className=" relative">
            <Input
              label={"Confirm Password"}
              type={!showConfirm ? "password" : "text"}
              name={"confirmPsd"}
              value={formik.values.confirmPsd}
              onChange={formik.handleChange("confirmPsd")}
            />
            <PsdShowBtn setShow={SetShowConfirm} show={showConfirm} />
          </div>
          <FormikErr
            touched={formik.touched.confirmPsd}
            errors={formik.errors.confirmPsd}
          />
          <SignButton label={"Submit"} />
        </form>
        <p className="mt-8 text-md font-semibold text-center text-gray-700">
          Already have an account?
          <button
            onClick={() => navigate("/LogIn")}
            className="text-lg text-blue-600 hover:underline font-sans"
          >
            Log in
          </button>
        </p>
      </div>
    </>
  );
};

export default ChangePsd;
