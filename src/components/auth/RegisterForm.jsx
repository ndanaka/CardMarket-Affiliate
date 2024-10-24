import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

import AuthApi from "../../api/authApi";

import AppServerErr from "../../errors/AppServerErr";
import FormikErr from "../../errors/FormikErr";

import Hint from "../../components/sign/Hint";
import SignButton from "../sign/SignButton";
import Heading from "../sign/Heading";
import Input from "../sign/Input";
import CancelBtn from "../sign/CancelBtn";

const RegisterForm = ({ label }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showPassword, SetShowPassword] = useState(false);

  const { op, submitRegister } = AuthApi();

  const formSchema = yup.object({
    fullName: yup.string().required(t("fullName") + t("isRequired")),
    email: yup
      .string()
      .email()
      .required(t("email") + t("isRequired")),
    password: yup
      .string()
      .min(8, t("invalidPwd1"))
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        t("invalidPwd2")
      )
      .required(t("password") + t("isRequired")),
    phoneNumber: yup.string().required(t("phNumber") + " " + t("isRequired")),
    country: yup.string().required(t("country") + " " + t("isRequired")),
    role:
      label === "add" ? yup.string().required(t("requiredRole")) : yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
      country: "",
      role: "Affiliate",
    },
    onSubmit: ({ fullName, email, password, phoneNumber, country, role }) => {
      submitRegister({
        fullName,
        email,
        password,
        phoneNumber,
        country,
        role,
      });
    },
    validationSchema: formSchema,
  });

  return (
    <>
      <Heading label={t("add") + " " + t("user")} />
      <AppServerErr>
        {op.serverErr === "Network Error" ? op.serverErr : op.appErr}
      </AppServerErr>
      <form className="mt-6 font-sans" onSubmit={formik.handleSubmit}>
        <Input
          label={"* " + t("fullName")}
          type={"text"}
          name={"fullName"}
          value={formik.values.fullName}
          onChange={formik.handleChange("fullName")}
        />
        <FormikErr
          touched={formik.touched.fullName}
          errors={formik.errors.fullName}
        />
        <br />
        <Input
          label={"* " + t("email")}
          type={"email"}
          name={"email"}
          value={formik.values.email}
          onChange={formik.handleChange("email")}
        />
        <FormikErr
          touched={formik.touched.email}
          errors={formik.errors.email}
        />
        <br />
        <AppServerErr>
          {op.appErr === "Email already exists, try with a different one" &&
            op.appErr}
        </AppServerErr>
        <div className=" relative">
          <Input
            label={"* " + t("password")}
            type={!showPassword ? "password" : "text"}
            name={"password"}
            value={formik.values.password}
            onChange={formik.handleChange("password")}
          />
          <button
            type="button"
            onClick={() => SetShowPassword(!showPassword)}
            className=" absolute bottom-2 right-2"
          >
            {showPassword ? (
              <i className="far fa-eye-slash" />
            ) : (
              <i className="far fa-eye" />
            )}
          </button>
        </div>
        <FormikErr
          touched={formik.touched.password}
          errors={formik.errors.password}
        />
        <br />
        <Input
          label={"* " + t("phNumber")}
          type={"tel"}
          name={"phoneNumber"}
          value={formik.values.phoneNumber}
          onChange={formik.handleChange("phoneNumber")}
        />
        <FormikErr
          touched={formik.touched.phoneNumber}
          errors={formik.errors.phoneNumber}
        />
        <br />
        <Input
          label={"* " + t("country")}
          type={"text"}
          name={"country"}
          value={formik.values.country}
          onChange={formik.handleChange("country")}
        />
        <FormikErr
          touched={formik.touched.country}
          errors={formik.errors.country}
        />
        {label === "add" && (
          <div className="flex flex-wrap justify-between gap-5 my-2">
            <label>
              <input
                className="mr-1"
                type="radio"
                name="role"
                value="Admin"
                onChange={formik.handleChange}
                checked={formik.values.role === "Admin"}
              />
              <span>{t("admin")}</span>
            </label>
            <label>
              <input
                className="mr-1"
                type="radio"
                name="role"
                value="Manager"
                onChange={formik.handleChange}
                checked={formik.values.role === "Manager"}
              />
              <span>{t("manager")}</span>
            </label>
            <label>
              <input
                className="mr-1"
                type="radio"
                name="role"
                value="Affiliate"
                onChange={formik.handleChange}
                checked={formik.values.role === "Affiliate"}
              />
              <span>{t("affiliate")}</span>
            </label>
          </div>
        )}
        <FormikErr touched={formik.touched.role} errors={formik.errors.role} />
        <div className="flex justify-end gap-5">
          {label === "add" && (
            <button
              type="button"
              onClick={() => navigate("/admin/manage")}
              className="px-6 mt-2 py-2 tracking-wide font-semibold text-white bg-gray-600 rounded-md hover:opacity-85 duration-300 "
            >
              {t("back")}
            </button>
          )}
          <SignButton label={t(label)} />
        </div>
      </form>
      {label === "Register" && (
        <Hint
          label={"Log in"}
          question={"Already have an account? "}
          handle={() => navigate("/LogIn")}
        />
      )}
    </>
  );
};

export default RegisterForm;
