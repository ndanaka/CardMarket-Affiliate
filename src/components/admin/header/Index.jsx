import { useState } from "react";
import { useNavigate } from "react-router";

import AccountInfo from "../../homepage/homeHeader/top/AccountInfoModal";
import Item from "./Item";

const Index = () => {
  const [show, setShow] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="pt-4 py-2 flex flex-wrap justify-between items-baseline gap-2 text-slate-900 border-b-[1px] border-b-slate-300">
      <div className="flex flex-wrap gap-10 max-[1200px]:gap-2 justify-center items-baseline hidden sm:flex">
        <h1
          onClick={() => navigate("/")}
          className="font-[Segoe] text-3xl font-semibold tracking-tight cursor-pointer "
        >
          Pro Affiliate
        </h1>
        <ul className="flex gap-10 max-[1200px]:gap-5 font-medium ml-4">
          <Item item={"Manage"} />
          <Item item={"Payment"} />
          <Item item={"Message"} />
          <Item item={"Rank"} />
        </ul>
      </div>

      <button
        className="text-black text-xl block sm:hidden items-center px-1"
        onClick={() => setCollapse(true)}
      >
        <i className="fa fa-navicon"></i>
      </button>
      <div
        className={`${
          collapse ? "blcok" : "hidden"
        } w-[200px] lg:hidden fixed left-0 top-0 z-10 flex
       flex-col items-start h-full bg-gray-600 tracking-tighter overflow-hidden font-sans pl-4 pt-10 !text-white`}
      >
        <button
          className="absolute right-3 top-3 text-white"
          onClick={() => setCollapse(false)}
        >
          Close
        </button>
        <button
          onClick={() => {
            navigate("/admin/manage");
            setCollapse(false);
          }}
          className={`text-gray-300 m-3 border-white font-semibold`}
        >
          Manage
        </button>
        <button
          onClick={() => {
            navigate("/admin/payment");
            setCollapse(false);
          }}
          className={`text-gray-300 m-3 border-white font-semibold`}
        >
          Payment
        </button>
        <button
          onClick={() => {
            navigate("/admin/message");
            setCollapse(false);
          }}
          className={`text-gray-300 m-3 border-white font-semibold`}
        >
          Message
        </button>
        <button
          onClick={() => {
            navigate("/admin/rank");
            setCollapse(false);
          }}
          className={`text-gray-300 m-3 border-white font-semibold`}
        >
          Rank
        </button>
      </div>
      <AccountInfo show={show} setShow={setShow} />
    </div>
  );
};

export default Index;
