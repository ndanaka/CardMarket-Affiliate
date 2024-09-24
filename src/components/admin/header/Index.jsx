import { useState } from "react";
import { useNavigate } from "react-router";

import AccountInfo from "../../homepage/homeHeader/top/AccountInfoModal";
import Item from "./Item";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-wrap justify-between items-baseline gap-2 text-slate-900 border-b-[1px] border-b-slate-300">
        <div className="flex flex-wrap gap-10 max-[1200px]:gap-2 justify-center items-baseline mt-3">
          <h1
            onClick={() => navigate("/")}
            className="font-[Segoe] text-3xl font-semibold tracking-tight cursor-pointer max-[1000px]:hidde "
          >
            Pro Affiliate
          </h1>
          <ul className="flex gap-10 max-[1200px]:gap-5 font-medium">
            <Item item={"Manage"} />
            <Item item={"Payment"} />
            <Item item={"Message"} />
          </ul>
          {/* <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-2 py-1 rounded-md "
            onClick={() => navigate("/")}
          >
            Dashboard
          </button> */}
        </div>
        <AccountInfo show={show} setShow={setShow} />
      </div>
    </>
  );
};

export default Header;
