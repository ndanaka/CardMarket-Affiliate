import Links from "./Links";

const QuickLinks = () => {
  return (
    <>
      {/* <div className="px-16 gap-10 max-[900px]:px-3 mt-3"> */}
      <div className="flex flex-col justify-center md:w-4/5 lg:w-3/5 max-[900px]:px-[5px] px-12 mx-auto mt-4">
        <div className="font-sans font-semibold text-gray-500 text-[13px] pb-1">
          Quick Link
        </div>
        <div className="border-[1px] border-gray-400 ">
          <Links
            label={"Homepage"}
            icon={"fas fa-home"}
            link={"http://localhost:3000/user/index"}
          />
          <Links
            label={"Register"}
            icon={"fas fa-user-plus"}
            link={"http://localhost:3000/auth/register"}
          />
          {/* <Links
            label={"Login"}
            icon={"fas fa-key"}
            link={"http://localhost:3000/auth/login"}
          /> */}
        </div>
      </div>
    </>
  );
};

export default QuickLinks;
