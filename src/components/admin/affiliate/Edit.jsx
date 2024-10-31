import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import AppServerErr from "../../../errors/AppServerErr";
import FormikErr from "../../../errors/FormikErr";
import AuthApi from "../../../api/authApi";
import HomeApi from "../../../api/homeApi";

import Heading from "../../sign/Heading";
import Input from "../../sign/Input";
import SignButton from "../../sign/SignButton";

const Edit = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const { op, Register } = AuthApi();
  const { affId } = location.state || {};
  const { GetAffInfo } = HomeApi();

  const [affInfo, setAffInfo] = useState();
  const [showPassword, SetShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAffInfo();
  }, [affId]);

  const getAffInfo = async () => {
    setLoading(true);
    const affInfo = await GetAffInfo(affId);
    setLoading(false);
    setAffInfo(affInfo.data.affInfo);
  };

  const formSchema = yup.object({
    fullName: yup.string().required("Name is required."),
    email: yup.string().email().required("Email is required."),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain at least one letter, one number, and one special character"
      )
      .required("Password is required."),
    phoneNumber: yup.string().required("Phonnumber is required."),
    country: yup.string().required("Country is required."),
    role: yup.string().required("You must choose a role"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: affInfo?.fullName,
      email: affInfo?.email,
      password: affInfo?.password,
      phoneNumber: affInfo?.phoneNumber,
      country: affInfo?.country,
      role: "Affiliate",
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
    enableReinitialize: true,
  });

  return (
    <div className="flex justify-center py-4">
      {loading && <Spinner />}

      <div className="w-[500px]">
        <Heading label={t("edit") + " " + t("affiliate")} />
        <AppServerErr>
          {op.serverErr === "Network Error" ? t("netError") : t(op.appErr)}
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
          <FormikErr
            touched={formik.touched.role}
            errors={formik.errors.role}
          />
          <div className="flex justify-end gap-5 py-2">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 mt-2 py-2 w-[20%] tracking-wide font-semibold text-white bg-gray-600 rounded-md hover:opacity-85 duration-300 "
            >
              {t("back")}
            </button>
            <SignButton label={t("edit")} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
