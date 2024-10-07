const NavBar = ({ setNavItem, navItem }) => {
  return (
    <>
      <div className="">
        <p className="text-[16px] font-semibold w-full flex">
          <button
            onClick={() => setNavItem("account")}
            className={`py-2 px-10 lg:px-24 border-gray-500 border-[1px] border-t-4 ${
              navItem === "account" &&
              "border-t-4 border-t-[red] border-b-0 bg-gray-100"
            }`}
          >
            Account
          </button>
          <button
            onClick={() => setNavItem("withdrawing")}
            className={`py-2 px-10 lg:px-24 max-[500px]:px-3  border-gray-500 border-[1px] border-t-4 border-l-0 ${
              navItem === "withdrawing" &&
              "border-t-4 border-t-[red] border-b-0 bg-gray-100"
            }`}
          >
            Withdrawing
          </button>
          <button
            onClick={() => setNavItem("history")}
            className={`py-2 px-10 lg:px-24 max-[500px]:px-3  border-gray-500 border-[1px] border-t-4 border-l-0 ${
              navItem === "history" &&
              "border-t-4 border-t-[red] border-b-0 bg-gray-100"
            }`}
          >
            History
          </button>
          <button className="border-b-[1px] border-gray-500 w-full"></button>
        </p>
      </div>
    </>
  );
};

export default NavBar;
