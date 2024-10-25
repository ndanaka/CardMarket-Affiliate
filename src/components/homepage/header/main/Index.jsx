import { useNavigate } from "react-router";

import LanguageBar from "../../../../utils/LanguageBar";
import BalanceStatus from "./BalanceStatus";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-between max-[1230px]:justify-center items-center lg:px-10 px-2 border-b-[1px] bg-white border-b-gray-600 py-3 leading-6">
      <img
        className="cursor-pointer"
        src="/image/title/title2.png"
        onClick={() => navigate("/")}
      />
      <div className="flex flex-wrap max-lg:justify-center max-lg:gap-3">
        <BalanceStatus />
        <p className="h-8 mb-3 font-medium">
          <LanguageBar className="h-full text-[15px] !bg-white !text-black" />
        </p>
      </div>
    </div>
  );
};

export default Main;
