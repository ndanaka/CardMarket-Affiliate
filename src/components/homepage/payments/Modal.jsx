import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Modal = ({ modal, setModal, setConfirmErr, handlePay }) => {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);

  const handle = () => {
    setModal(false);
    setConfirmErr("ok");
    setAnimate(false);
  };

  useEffect(() => {
    if (modal) {
      setAnimate(true);
    }
  }, [modal]);

  return (
    <div
      className={`${
        modal ? "block " : "hidden"
      } fixed h-full w-full top-0 left-0 bg-[#80808061] z-50`}
    >
      <div
        className={`${
          animate ? "scale-100" : "scale-0"
        } duration-300 bg-white text-[18px]
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-10 px-10 rounded-md w-[400px] max-[600px]:w-[300px]  text-center`}
      >
        {t("confrimBankAddr")}
        <br />
        {t("makeSure")}
        <div className="flex flex-wrap justify-around mt-5">
          <button
            onClick={() => handlePay()}
            type="button"
            className="text-white bg-emerald-600 rounded-md px-10 py-1"
          >
            {t("yes")}
          </button>
          <button
            type="button"
            onClick={() => handle()}
            className="text-white bg-red-500 rounded-md px-10 py-1"
          >
            {t("no")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
