import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import HomeApi from "../../../api/homeApi";

import Search from "../common/Search";
import Members from "./Members";
import Button from "./Button";

const Index = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [role, setRole] = useState("All");
  const [members, setMembers] = useState([]);
  const [fltSignal, setFltSignal] = useState(false);

  const { op, GetMembers } = HomeApi();

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
      <div className="mt-4 border-[1px] border-gray-200 rounded-lg p-10 pb-5 max-[700px]:p-2">
        <div className="flex flex-wrap justify-between gap-3 pb-3">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {!fltSignal ? (
              <>
                <Button
                  label={t("all")}
                  handle={() => setRole(t("all"))}
                  select={role}
                />
                <Button
                  label={t("admin")}
                  handle={() => setRole(t("admin"))}
                  select={role}
                />
                <Button
                  label={t("manager")}
                  handle={() => setRole(t("manager"))}
                  select={role}
                />
                <Button
                  label={t("ffiliate")}
                  handle={() => setRole(t("ffiliate"))}
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
