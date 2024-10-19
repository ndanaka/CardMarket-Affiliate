import { useState, useRef, useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

import AppServerErr from "../../../errors/AppServerErr";
import FormikErr from "../../../errors/FormikErr";
import Toast from "../../../utils/toast";

import Input from "../../sign/Input";
import SignButton from "../../sign/SignButton";
import CancelBtn from "../../sign/CancelBtn";

import HomeApi from "../../../api/homeApi";
import { SERVER_URL } from "../../../constant/baseUrl";

const AddRank = ({
  selectedRank,
  setSelectedRank,
  selectedImgUrl,
  setSelectedImgUrl,
  getAllRanks = { getAllRanks },
}) => {
  const { op, setOp, SubmitAddRank } = HomeApi();
  const fileInputRef = useRef(null);

  const [initialValues, setInitialValues] = useState({
    id: "",
    name: "",
    register_commission: 0,
    deposite_commission: 0,
    start_amount: 0,
    end_amount: 0,
    last: false,
    file: null,
  });
  const [imgUrl, setImgUrl] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [editFlag, setEditFlag] = useState(false);

  useEffect(() => {
    selectedImgUrl ? SERVER_URL + selectedImgUrl : "/image/upload.png";
    selectedRank ? setEditFlag(true) : setEditFlag(false);
  });

  const formSchema = yup.object({
    name: yup.string().required("Name is required"),
    register_commission: yup
      .string()
      .required("Register commission is required"),
    deposite_commission: yup
      .string()
      .required("Deposite commission is required"),
    start_amount: yup.string().required("Deposite commission is required"),
    end_amount: yup.string().required("Deposite commission is required"),
    file: yup.string().required("Rank image is required"),
  });

  const formik = useFormik({
    initialValues: selectedRank ? selectedRank : initialValues,
    onSubmit: (values) => {
      handleSubmitAddRank(values);
    },
    validationSchema: formSchema,
    enableReinitialize: true,
  });

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file !== undefined) {
      formik.setFieldValue("file", file);
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImgUrl("");
        setImgUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitAddRank = async (formData) => {
    const res = await SubmitAddRank(formData);

    if (res.data.status) {
      setToastVisible(true);
      if (res.data.type === 1) {
        setToastType("success");
        setToastMessage("Successfully add new rank.");
      } else {
        setToastType("success");
        setToastMessage("Successfully edited new rank.");
      }
      handleCancelSubmit();
      setEditFlag(false);
      getAllRanks();
    } else {
      setOp({
        appErr: "Failed request data.",
        serverErr: res.data.error,
      });
    }
  };

  const handleEdit = () => {
    handleSubmitAddRank(formik.values);
  };

  const handleCancelSubmit = () => {
    formik.resetForm();
    setImgUrl("");
    setSelectedRank(null);
    setSelectedImgUrl("");
    setOp({
      appErr: null,
      serverErr: null,
    });
    fileInputRef.current.value = null;
  };

  const handleCloseToast = () => {
    setToastVisible(false);
  };

  return (
    <>
      <h3 className="py-3 font-semibold text-center">Add New Rank</h3>
      <form className="font-sans" onSubmit={formik.handleSubmit}>
        <div>
          <label
            htmlFor="fileInput"
            className="block text-sm font-semibold text-gray-800 px-1"
          >
            {"Image"}
          </label>
          <input
            name="fileInput"
            type="file"
            id="fileInput"
            ref={fileInputRef}
            className="image p-1 w-full form-control hidden"
            onChange={handleFileInputChange}
            autoComplete="name"
          ></input>
          <img
            src={
              imgUrl
                ? selectedImgUrl
                  ? SERVER_URL + selectedImgUrl
                  : imgUrl
                : selectedImgUrl
                  ? SERVER_URL + selectedImgUrl
                  : "/image/upload.png"
            }
            alt="prize"
            className="w-auto h-[164px] object-cover mx-auto"
            onClick={() => {
              document.getElementById("fileInput").click();
            }}
          />
          <FormikErr
            touched={formik.touched.file}
            errors={formik.errors.file}
          />
        </div>
        <div>
          <Input
            label={"Name"}
            type={"text"}
            name={"name"}
            value={formik.values.name}
            onChange={formik.handleChange("name")}
          />
          <FormikErr
            touched={formik.touched.name}
            errors={formik.errors.name}
          />
        </div>
        <div>
          <Input
            label={"Register Commission (¥)"}
            type={"number"}
            name={"register_commission"}
            value={formik.values.register_commission}
            onChange={formik.handleChange("register_commission")}
          />
          <FormikErr
            touched={formik.touched.register_commission}
            errors={formik.errors.register_commission}
          />
        </div>
        <div>
          <Input
            label={"Deposite Commission (%)"}
            type={"number"}
            name={"deposite_commission"}
            value={formik.values.deposite_commission}
            onChange={formik.handleChange("deposite_commission")}
          />
          <FormikErr
            touched={formik.touched.deposite_commission}
            errors={formik.errors.deposite_commission}
          />
        </div>
        <div>
          <Input
            label={"Start Deposite (¥)"}
            type={"number"}
            name={"start_amount"}
            value={formik.values.start_amount}
            onChange={formik.handleChange("start_amount")}
          />
          <FormikErr
            touched={formik.touched.start_amount}
            errors={formik.errors.start_amount}
          />
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="w-1/2 pr-1">
            <Input
              label={"End Deposite (¥)"}
              type={"number"}
              name={"end_amount"}
              value={formik.values.end_amount}
              onChange={formik.handleChange("end_amount")}
            />
            <FormikErr
              touched={formik.touched.end_amount}
              errors={formik.errors.end_amount}
            />
          </div>
          <div className="w-1/2 pl-1">
            <div className="mt-2">
              <span className="block text-sm font-semibold text-gray-800">
                {"Last Rank"}
              </span>
              <select
                name="last"
                className="px-2 py-2 mt-2 w-full form-control cursor-pointer border rounded"
                onChange={formik.handleChange("last")}
                value={formik.values.last}
                id="last"
                autoComplete="last"
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <CancelBtn handle={handleCancelSubmit} />
          {editFlag ? (
            <button
              type="submit"
              className="mt-6 px-6 py-2 font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-md"
              onClick={() => handleEdit()}
            >
              Edit
            </button>
          ) : (
            <SignButton label={"Add"} />
          )}
        </div>
        <div className="flex justify-end pt-2">
          <AppServerErr>
            {op.serverErr === "Network Error" ? op.serverErr : op.appErr}
          </AppServerErr>
        </div>
      </form>

      <Toast
        type={toastType}
        message={toastMessage}
        isVisible={toastVisible}
        onClose={handleCloseToast}
      />
    </>
  );
};

export default AddRank;
