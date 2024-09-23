import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { useNavigate } from "react-router";

import UseApi from "../../hooks/useApi";

import AppServerErr from "../../errors/AppServerErr";
import FormikErr from "../../errors/FormikErr";

import Heading from "../sign/Heading";
import Input from "../sign/Input";
import SignButton from "../sign/SignButton";
import Hint from "../sign/Hint";

const ForgotPsdForm = ({ setShow }) => {
  const navigate = useNavigate();

  const { op, handleForgotPsd } = UseApi();

  const formSchema = yup.object({
    affiliateId: yup.string().required("Affiliate Id is required"),
    email: yup.string().email().required("email is required"),
  });

  const formik = useFormik({
    initialValues: {
      affiliateId: "",
      email: "",
    },
    onSubmit: ({ affiliateId, email }) => {
      handleForgotPsd({ affiliateId, password });
    },
    validationSchema: formSchema,
  });

  return (
    <>
      <Heading label={"Forgot Your Password?"} />
      <AppServerErr>
        {op.serverErr === "Network Error" ? op.serverErr : null}
      </AppServerErr>
      <form className="mt-6 font-sans" onSubmit={formik.handleSubmit}>
        <Input
          label={"Affiliate ID"}
          type={"text"}
          name={"affiliateId"}
          value={formik.values.affiliateId}
          onChange={formik.handleChange("affiliateId")}
        />
        <FormikErr
          touched={formik.touched.affiliateId}
          errors={formik.errors.affiliateId}
        />
        <AppServerErr>
          {op.appErr === "ID already exists, try with a different one" &&
            op.appErr}
        </AppServerErr>
        <Input
          label={"Eamil"}
          type={"email"}
          name={"email"}
          value={formik.values.email}
          onChange={formik.handleChange("email")}
        />
        <FormikErr
          touched={formik.touched.email}
          errors={formik.errors.email}
        />
        <SignButton label={"Submit"} />
        <Hint
          label={"Cancel"}
          className="w-full px-4 py-1 hover:no-underline !text-[16px] tracking-wide font-semibold text-white bg-gray-600 "
          handle={() => setShow(false)}
        />
      </form>
    </>
  );
};

export default ForgotPsdForm;
