import { useFormik } from "formik";
import React, { useState } from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

import { idAtom } from "../../atoms";
import AuthApi from "../../api/authApi";

import AppServerErr from "../../errors/AppServerErr";
import FormikErr from "../../errors/FormikErr";

import Heading from "../../components/sign/Heading";
import Input from "../../components/sign/Input";
import SignButton from "../../components/sign/SignButton";
import Hint from "../../components/sign/Hint";
import ForgotPassForm from "./ForgotPsdForm";

const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [id, setId] = useAtom(idAtom);
  const { op, submitLogin } = AuthApi();

  const formSchema = yup.object({
    affiliateId: yup.string().required(t("affId") + t("isRequired")),
    password: yup.string().required(t("password") + t("isRequired")),
  });

  const formik = useFormik({
    initialValues: {
      affiliateId: "",
      password: "",
    },
    onSubmit: ({ affiliateId, password }) => {
      submitLogin({ affiliateId, password });
    },
    validationSchema: formSchema,
  });

  return (
    <>
      {!show ? (
        <>
          <Heading label={t("login")} />
          <AppServerErr>
            {op.serverErr === "Network Error" ? op.serverErr : op.appErr}
          </AppServerErr>
          <form className="mt-6 font-sans" onSubmit={formik.handleSubmit}>
            {id !== "" && (
              <div>
                Remember! Your affiliate ID is&nbsp;{" "}
                <span className="text-red-600">{id}</span>
              </div>
            )}
            <Input
              label={t("affId")}
              type={"text"}
              name={"affiliateId"}
              value={formik.values.affiliateId}
              onChange={formik.handleChange("affiliateId")}
            />
            <FormikErr
              touched={formik.touched.affiliateId}
              errors={formik.errors.affiliateId}
            />
            <br></br>
            <Input
              label={t("password")}
              type={"password"}
              name={"password"}
              value={formik.values.password}
              onChange={formik.handleChange("password")}
            />
            <FormikErr
              touched={formik.touched.password}
              errors={formik.errors.password}
            />
            <AppServerErr>
              {op.appErr === "Affiliate or Password not correct." && op.appErr}
            </AppServerErr>
            <SignButton label={t("login")} />
            <Hint
              label={t("register")}
              question={t("wantRegister")}
              handle={() => navigate("/register")}
            />
            <Hint
              label={t("forgotPwd")}
              className="text-red-600  "
              handle={() => setShow(true)}
            />
          </form>
        </>
      ) : (
        <ForgotPassForm setShow={setShow} />
      )}
    </>
  );
};

export default LoginForm;
