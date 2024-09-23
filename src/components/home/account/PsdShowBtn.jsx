import React from "react";

const PsdShowBtn = ({ setShow, show }) => {
  return (
    <>
      <button
        type="button"
        onClick={() => setShow(!show)}
        className=" absolute bottom-2 right-2"
      >
        {show ? (
          <i className="far fa-eye-slash" />
        ) : (
          <i className="far fa-eye" />
        )}
      </button>
    </>
  );
};
export default PsdShowBtn;
