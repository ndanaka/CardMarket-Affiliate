import React, { useEffect, useState } from "react";
const Modal = ({ modal, setModal, setConfirmErr }) => {
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
    <>
      <div
        className={`${
          modal ? "block " : "hidden"
        } fixed h-full w-full top-0 left-0 bg-[#80808061] z-50`}>
        <div
          className={`${
            animate ? "scale-100" : "scale-0"
          } duration-300 bg-white text-[18px]
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-10 px-10 rounded-md w-[400px] max-[600px]:w-[300px]  text-center`}>
          Confirm the address once more.
          <br />
          Can you make sure?
          <div className="flex flex-wrap justify-around mt-5">
            <button
              onClick={() => handle()}
              type="button"
              className=" bg-emerald-600 rounded-sm px-5">
              Yes
            </button>
            <button
              type="button"
              onClick={() => handle()}
              className=" bg-red-500 rounded-sm px-5">
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
