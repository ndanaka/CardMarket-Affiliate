import React from "react";
const Step = ({ title, redContent, footer, arrow }) => {
  return (
    <>
      <div className="font-bold text-[16px] flex flex-col items-center text-gray-700 w-[150px]">
        <p className="text-center">{title}</p>
        <p className="text-[red] text-xl font-bold">{redContent}</p>
        <p>{footer}</p>
      </div>
      {arrow && (
        <i className="fas fa-angle-double-right text-3xl text-[red] text-center my-auto" />
      )}
    </>
  );
};
export default Step;
