import React, { useEffect, useState } from "react";

const CalInput = ({ value, setState, points }) => {
  const [values, setValues] = useState(0);
  useEffect(() => {
    setValues(value);
  }, [value]);
  return (
    <>
      <div className="py-2 ">
        <p className="py-1">
          1 {points[0]} = {points[1]} Points
        </p>
        <input
          placeholder="0"
          className={`${
            value === 0 && "text-transparent"
          } w-[230px] border-[1px] border-gray-400 py-[2px] px-2`}
          type="number"
          value={values}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </>
  );
};
export default CalInput;
