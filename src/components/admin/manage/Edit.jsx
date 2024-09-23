import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";
import Heading from "../../sign/Heading";
import AppServerErr from "../../../errors/AppServerErr";
import FormikErr from "../../../errors/FormikErr";
import Input from "../../sign/Input";
import SignButton from "../../sign/SignButton";
import UseApi from "../../../hooks/useApi";
import CancelBtn from "../../sign/CancelBtn";
const Edit = ({ label }) => {
  const [showPassword, SetShowPassword] = useState(false);
  const navigate = useNavigate();
  const { op, Register } = UseApi();
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
    role: yup.string().required("You must choose a role"),
  });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
      country: "",
      role: "",
    },
    onSubmit: ({ fullName, email, password, phoneNumber, country, role }) => {
      Register({
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
      <Heading label={"Edit the User's Profile"} />
      <AppServerErr>
        {op.serverErr === "Network Error" ? op.serverErr : null}
      </AppServerErr>
      <form
        className="mt-6 font-sans"
        onSubmit={formik.handleSubmit}
      >
        <Input
          label={"Fullname (フリガナ)"}
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
          label={"Email"}
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
            label={"Password"}
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
          label={"Phonenumber"}
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
          label={"Country"}
          type={"text"}
          name={"country"}
          value={formik.values.country}
          onChange={formik.handleChange("country")}
        />
        <FormikErr
          touched={formik.touched.country}
          errors={formik.errors.country}
        />
        <div className="flex gap-5">
          <label>
            <input
              type="radio"
              name="role"
              value="manager"
              onChange={formik.handleChange}
              checked={formik.values.role === "manager"}
            />
            <span>Manager</span>
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="readManager"
              onChange={formik.handleChange}
              checked={formik.values.role === "readManager"}
            />
            <span>Manager(Only-Read)</span>
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="affiliate"
              onChange={formik.handleChange}
              checked={formik.values.role === "affiliate"}
            />
            <span>Affiliate</span>
          </label>
        </div>
        <FormikErr
          touched={formik.touched.role}
          errors={formik.errors.role}
        />
        <div className="flex justify-end gap-5">
          <SignButton label={"Confirm"} />
          <CancelBtn handle={() => navigate("/admin/manage")} />
        </div>
      </form>
    </>
  );
};
export default Edit;
