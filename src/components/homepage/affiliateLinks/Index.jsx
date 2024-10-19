import Link from "./Link";

import { ORIPA_BASE_URL } from "../../../constant/baseUrl";

import Button from "../../admin/manage/Button";
import QuickLinks from "../content/QuickLInks";

const AffiLinks = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-between px-10 mt-4 mb-4 pb-1">
        <p className="font-sans font-semibold text-[26px]">Affiliate Links</p>

        <button
          className="bg-blue-500 hover:bg-blue-400 hover:text-gray-300 rounded-md px-3 py-1 font-semibold text-white"
          onClick={() => console.log("SDF")}
        >
          Add Link
        </button>
      </div>
      <QuickLinks />
      <div className="flex flex-wrap w-full justify-center mx-auto">
        <Link pageName={"Homepage"} link={`${ORIPA_BASE_URL}/user/index`} />
        <Link pageName={"Regester"} link={`${ORIPA_BASE_URL}/auth/register`} />
        <Link pageName={"LogIn"} link={`${ORIPA_BASE_URL}/auth/login`} />
      </div>
    </div>
  );
};

export default AffiLinks;
