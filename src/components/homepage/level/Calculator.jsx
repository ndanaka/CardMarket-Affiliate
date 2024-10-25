import { useEffect, useState } from "react";

import CalInput from "./CalInput";

const Calculator = () => {
  const [regPoint, setRegPoint] = useState(0);
  const [gachaPoint, setGachaPoint] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);

  useEffect(() => {
    const total = regPoint * 3 + 0.001 * gachaPoint;
    setTotalPoint(total);
  }, [regPoint, gachaPoint]);

  return (
    <div className="bg-white p-10 shadow-md shadow-gray-400 w-[20%] max-[900px]:w-full max-[1400px]:w-[30%]">
      <h3 className="py-3 font-semibold">Points Calculation</h3>
      <p className="text-gray-500">
        You can calculate the points you earn from your clients' actions using
        the points map and calculator below.
      </p>
      <div className="flex flex-col items-center">
        {/* Registration Points Input */}
        <CalInput
          value={Math.floor(regPoint)}
          setState={setRegPoint}
          points={["REGISTRATION", 3]}
        />

        {/* Gacha Points Input */}
        <CalInput
          value={gachaPoint / 1}
          setState={setGachaPoint}
          points={["¥", 0.001]}
        />

        <div className="flex mt-4">
          {/* Total Points Display */}
          <div className="relative w-[150px] h-[65px] bg-red-500">
            <p className="absolute left-3 top-1 text-white">Total Points</p>
            <p className="absolute left-[50%] -translate-x-1/2 top-6 text-3xl font-semibold text-white">
              {totalPoint.toFixed(3)}
            </p>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
              setRegPoint(0);
              setGachaPoint(0);
            }}
            className="ml-4 border border-gray-400 text-gray-800 font-semibold w-[80px] py-1"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
