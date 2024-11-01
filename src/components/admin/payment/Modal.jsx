import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Modal = ({ showModal, setShowModal, bankInfo }) => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);

  const handle = () => {
    setShowModal(false);
    setAnimate(false);
  };

  useEffect(() => {
    if (showModal) {
      setAnimate(true);
    }
  }, [showModal]);

  return (
    <div
      className={`${
        showModal ? "block" : "hidden"
      } fixed h-full w-full top-0 left-0 bg-[#80808061] z-50 overflow`}
    >
      <div
        className={`${
          animate ? "scale-100" : "scale-0"
        } duration-300 bg-white text-[18px]
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-4 px-3 md:px-10 rounded-md w-[95%] md:w-[80%] lg:w-[50%]`}
      >
        <div className="modal-header text-center">
          <p className="font-bold text-gray-800">
            {t("bank") + " " + t("detail")}
          </p>
        </div>
        <div className="modal-body my-4 border border-1 px-2">
          <div className="flex flex-wrap justify-start md:items-center my-4">
            <div className="w-full md:w-1/4 mb-2 md:mb-0">
              <p className="text-md">{t("type")}</p>
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <input
                type="text"
                className="cursor-not-allowed w-full block px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                defaultValue={
                  bankInfo?.transType === "other"
                    ? t("transferType1")
                    : t("transferType2")
                }
                readOnly={true}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-start md:items-center my-4">
            <div className="w-full md:w-1/4 mb-2 md:mb-0">
              <p className="text-md">{t("financialName")}</p>
            </div>
            <div className="flex flex-wrap justify-between w-full md:w-3/4 h-full items-center">
              <input
                type="text"
                className="cursor-not-allowed w-full block px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                defaultValue={bankInfo?.nameOfFinacial}
                readOnly={true}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-start md:items-center my-4">
            <div className="w-full md:w-1/4 mb-2 md:mb-0">
              {t("account") + " " + t("type")}
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <input
                type="text"
                className="cursor-not-allowed w-full block px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                defaultValue={
                  bankInfo?.accountType === "ordinary"
                    ? t("ordinary")
                    : t("current") + " " + t("account")
                }
                readOnly={true}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-start md:items-center my-4">
            <div className="w-full md:w-1/4 mb-2 md:mb-0">
              <p className="text-md">{t("account") + " " + t("number")}</p>
            </div>
            <div className="flex flex-wrap justify-between w-full md:w-3/4 h-full items-center">
              <input
                type="text"
                className="cursor-not-allowed w-full block px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                defaultValue={bankInfo?.accountNumber}
                readOnly={true}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-start md:items-center my-4">
            <div className="w-full md:w-1/4 mb-2 md:mb-0">
              <p className="text-md">{t("nameAccountHolder")}</p>
            </div>
            <div className="flex flex-wrap justify-between w-full md:w-3/4 h-full items-center">
              <input
                type="text"
                className="cursor-not-allowed w-full block px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                defaultValue={bankInfo?.accountHolder}
                readOnly={true}
              />
            </div>
          </div>
        </div>
        <div className="modal-footer flex flex-wrap justify-center w-full mt-5">
          <button
            type="button"
            onClick={() => handle()}
            className="text-white bg-emerald-500 rounded-md px-10 py-1"
          >
            {t("ok")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
