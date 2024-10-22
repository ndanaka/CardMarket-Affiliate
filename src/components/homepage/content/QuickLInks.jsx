import Links from "./Links";

import { ORIPA_BASE_URL } from "../../../constant/baseUrl";

const QuickLinks = () => {
  return (
    <>
      <div className="flex flex-col justify-center md:w-4/5 lg:w-3/5 max-[900px]:px-[5px] mx-auto mb-4">
        <div className="border-[1px] border-gray-400 ">
          {/* <Links
            label={"Homepage"}
            icon={"fas fa-home"}
            link={`${ORIPA_BASE_URL}/user/index`}
          /> */}
          <Links
            label={"Register"}
            icon={"fas fa-user-plus"}
            link={`${ORIPA_BASE_URL}/auth/register`}
          />
          {/* <Links
            label={"Login"}
            icon={"fas fa-key"}
            link={`${ORIPA_BASE_URL}/auth/login`}
          /> */}
        </div>
      </div>
    </>
  );
};

export default QuickLinks;
