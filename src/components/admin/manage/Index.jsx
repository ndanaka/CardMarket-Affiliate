import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Search from "../common/Search";
import member from "./manager.json";
import Members from "./Members";
import Button from "./Button";

const Manage = () => {
  const [select, setSelect] = useState("All");
  const [members, setMembers] = useState([]);
  const [fltSignal, setFltSignal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (select === "All") {
      setMembers(member);
      return;
    }
    const filter = member.filter(
      (t) => t.role.toUpperCase() === select.toUpperCase()
    );
    setMembers(filter);
  }, [select, fltSignal]);
  return (
    <>
      <div className="mt-10 border-[1px] border-gray-200 rounded-lg p-10 pb-5 max-[700px]:p-2">
        <div className="flex flex-wrap justify-between pr-10 gap-3 pb-3">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {!fltSignal ? (
              <>
                <Button
                  label={"All"}
                  handle={() => setSelect("All")}
                  select={select}
                />
                <Button
                  label={"Manager"}
                  handle={() => setSelect("Manager")}
                  select={select}
                />
                <Button
                  label={"Affiliate"}
                  handle={() => setSelect("Affiliate")}
                  select={select}
                />
              </>
            ) : (
              <div className="w-[229px] font-semibold px-3">
                Search results...
              </div>
            )}
            <Search
              setMembers={setMembers}
              setFltSignal={setFltSignal}
            />
          </div>
          <button
            onClick={() => navigate("/admin/manage/adduser")}
            className="bg-indigo-600 rounded-md px-2 py-1 text-white hover:opacity-85 duration-50"
          >
            Add User
          </button>
        </div>
        <div className=" overflow-auto">
          <Members members={members} />
        </div>
      </div>
    </>
  );
};
export default Manage;
