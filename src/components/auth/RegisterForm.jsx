import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";

import AuthApi from "../../api/authApi";

import AppServerErr from "../../errors/AppServerErr";
import FormikErr from "../../errors/FormikErr";

import Hint from "../../components/sign/Hint";
import SignButton from "../sign/SignButton";
import Heading from "../sign/Heading";
import Input from "../sign/Input";
import CancelBtn from "../sign/CancelBtn";

const RegisterForm = ({ title, label }) => {
  const navigate = useNavigate();

  const [showPassword, SetShowPassword] = useState(false);

  const { op, submitRegister } = AuthApi();

  const formSchema = yup.object({
    fullName: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain at least one letter, one number, and one special character"
      )
      .required("Password is required"),
    phoneNumber: yup.string().required("Phonnumber is required"),
    country: yup.string().required("Country is required"),
    role:
      label === "Add"
        ? yup.string().required("You must choose a role")
        : yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
      country: "",
      role: "affiliate",
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
      <Heading label={title} />
      <AppServerErr>
        {op.serverErr === "Network Error" ? op.serverErr : op.appErr}
      </AppServerErr>
      <form className="mt-6 font-sans" onSubmit={formik.handleSubmit}>
        <Input
          label={"Fullname *"}
          type={"text"}
          name={"fullName"}
          value={formik.values.fullName}
          onChange={formik.handleChange("fullName")}
        />
        <FormikErr
          touched={formik.touched.fullName}
          errors={formik.errors.fullName}
        />
        <Input
          label={"Email *"}
          type={"email"}
          name={"email"}
          value={formik.values.email}
          onChange={formik.handleChange("email")}
        />
        <FormikErr
          touched={formik.touched.email}
          errors={formik.errors.email}
        />
        <AppServerErr>
          {op.appErr === "Email already exists, try with a different one" &&
            op.appErr}
        </AppServerErr>
        <div className=" relative">
          <Input
            label={"Password *"}
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
        <Input
          label={"Phonenumber *"}
          type={"tel"}
          name={"phoneNumber"}
          value={formik.values.phoneNumber}
          onChange={formik.handleChange("phoneNumber")}
        />
        <FormikErr
          touched={formik.touched.phoneNumber}
          errors={formik.errors.phoneNumber}
        />
        <Input
          label={"Country *"}
          type={"text"}
          name={"country"}
          value={formik.values.country}
          onChange={formik.handleChange("country")}
        />
        <FormikErr
          touched={formik.touched.country}
          errors={formik.errors.country}
        />
        {label === "Add" && (
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
              <span>Admin(Only-Read)</span>
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
              <span>Manager</span>
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
              <span>Affiliate</span>
            </label>
          </div>
        )}
        <FormikErr touched={formik.touched.role} errors={formik.errors.role} />
        <div className="flex justify-end gap-5">
          <SignButton label={label} />
          {label === "Add" && (
            <CancelBtn handle={() => navigate("/admin/manage")} />
          )}
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
