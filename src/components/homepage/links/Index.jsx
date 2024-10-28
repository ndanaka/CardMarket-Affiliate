import { useState, useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";
import { useTranslation } from "react-i18next";

import AppServerErr from "../../../errors/AppServerErr";
import FormikErr from "../../../errors/FormikErr";
import Toast from "../../../utils/toast";

import Links from "./Links";
import Input from "../../sign/Input";

import { tokenWithPersistenceAtom } from "../../../atoms";
import HomeApi from "../../../api/homeApi";

const AffiLinks = () => {
  const { t } = useTranslation();
  const { op, setOp, SubmitAddLink, GetAllLinks } = HomeApi();
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const [links, setLinks] = useState([]);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const affId = token ? jwtDecode(token).id : "";

  useEffect(() => {
    getAllLinks();
  }, []);

  const getAllLinks = async () => {
    try {
      const res = await GetAllLinks({ aff_id: affId });
      setLinks(res.data.allLinks);
    } catch (error) {
      console.log(error);
    }
  };

  const formSchema = yup.object({
    title: yup
      .string()
      .required(t("link") + " " + t("title") + " " + t("isRequired")),
    url: yup.string().required("Url " + t("isRequired")),
  });

  const formik = useFormik({
    initialValues: {
      aff_id: affId,
      title: "",
      url: "",
    },
    onSubmit: (values) => {
      handleSubmitAddRank(values);
    },
    validationSchema: formSchema,
  });

  const handleSubmitAddRank = async () => {
    const res = await SubmitAddLink(formik.values);

    if (res.data.status) {
      setToastVisible(true);
      setLinks(res.data.links);
      setToastType("success");
      setToastMessage(t("successAdded"));
      formik.resetForm();
      setOp({
        appErr: null,
        serverErr: null,
      });
    } else {
      setOp({
        appErr: t("failedAdded"),
        serverErr: res.data.error,
      });
    }
  };

  const handleCloseToast = () => {
    setToastVisible(false);
  };

  return (
    <div className="mx-8 my-4">
      {/* <p className="font-sans font-semibold text-2xl pb-3">{t("affLinks")}</p> */}
      <div className="flex flex-wrap justify-center gap-2">
        <div className="flex flex-col justify-between w-[35%] max-[900px]:w-full h-fit">
          <div className="font-sans font-semibold text-gray-500 text-lg">
            {t("add") + " " + t("new") + " " + t("link")}
          </div>
          <AppServerErr>
            {op.serverErr === "Network Error" ? op.serverErr : op.appErr}
          </AppServerErr>
          <form
            className="border-[1px] border-gray-400 font-sans p-2"
            onSubmit={formik.handleSubmit}
          >
            <div className="py-2">
              <Input
                label={t("title")}
                type={"text"}
                name={"title"}
                value={formik.values.title}
                onChange={formik.handleChange("title")}
              />
              <div className="px-1">
                <FormikErr
                  touched={formik.touched.title}
                  errors={formik.errors.title}
                />
              </div>
            </div>
            <div className="py-2">
              <Input
                label={"Url"}
                type={"text"}
                name={"url"}
                value={formik.values.url}
                onChange={formik.handleChange("url")}
              />
              <div className="px-1">
                <FormikErr
                  touched={formik.touched.url}
                  errors={formik.errors.url}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-full justify-end mt-2">
              <button
                type="submit"
                className="px-6 py-2 mx-1 font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-md"
              >
                {t("add")}
              </button>
            </div>
            <div className="flex justify-end pt-2">
              <AppServerErr>
                {op.serverErr === "Network Error" ? op.serverErr : op.appErr}
              </AppServerErr>
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-between w-[64%] max-[900px]:w-full h-fit">
          {/* <div className="font-sans font-semibold text-gray-500 text-lg">
            Main links
          </div>
          <div className="border-[1px] border-gray-400 font-sans px-4 py-2">
            <Links
              title={"Homepage"}
              icon={"fas fa-home"}
              link={`${ORIPA_BASE_URL}/user/index`}
            />
            <Links
              title={"Register"}
              icon={"fas fa-user-plus"}
              link={`${ORIPA_BASE_URL}/auth/register`}
            />
          </div> */}
          <div className="font-sans font-semibold text-gray-500 text-lg">
            {t("my") + " " + t("links")}
          </div>
          <div className="border-[1px] border-gray-400 font-sans px-4 py-2">
            {links.length === 0 ? (
              <p className="text-center">{t("noLink")}</p>
            ) : (
              links?.map((link, i) => (
                <Links
                  key={i}
                  type="mine"
                  title={link.title}
                  icon={"fa fa-exchange"}
                  link={link.url}
                  linkId={link._id}
                  setLinks={setLinks}
                  setToastType={setToastType}
                  setToastMessage={setToastMessage}
                  setToastVisible={setToastVisible}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <Toast
        type={toastType}
        message={toastMessage}
        isVisible={toastVisible}
        onClose={handleCloseToast}
      />
    </div>
  );
};

export default AffiLinks;
