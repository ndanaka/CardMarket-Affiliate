import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import MemberApi from "../../../api/memberApi";

import Search from "../common/Search";
import Members from "./Members";
import Button from "./Button";

const Index = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("All");
  const [members, setMembers] = useState([]);
  const [fltSignal, setFltSignal] = useState(false);

  const { op, GetMembers } = MemberApi();

  useEffect(() => {
    getMembers();
  }, [role]);

  const getMembers = async () => {
    try {
      const res = await GetMembers(role);
      setMembers(res.data.members);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mt-10 border-[1px] border-gray-200 rounded-lg p-10 pb-5 max-[700px]:p-2">
        <div className="flex flex-wrap justify-between pr-10 gap-3 pb-3">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {!fltSignal ? (
              <>
                <Button
                  label={"All"}
                  handle={() => setRole("All")}
                  select={role}
                />
                <Button
                  label={"Admin"}
                  handle={() => setRole("admin")}
                  select={role}
                />
                <Button
                  label={"Manager"}
                  handle={() => setRole("manager")}
                  select={role}
                />
                <Button
                  label={"Affiliate"}
                  handle={() => setRole("affiliate")}
                  select={role}
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
              setRole={setRole}
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

export default Index;
