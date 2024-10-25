import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import HomeApi from "../../../api/homeApi";

import Search from "../common/Search";
import Table from "../common/Table";

const Index = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [members, setMembers] = useState([]);
  const [fltSignal, setFltSignal] = useState(false);

  const { GetMembers } = HomeApi();

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    const res = await GetMembers("Admin");
    const admins = res.data.members.filter((admin) => admin.role === "Admin");
    setMembers(admins);
  };

  return (
    <div className="mt-4 border-[1px] border-gray-200 rounded-lg p-10 pb-5 max-[700px]:p-2">
      <div className="flex flex-wrap justify-between gap-3 pb-3">
        <div className="flex flex-wrap gap-2 justify-center items-center">
          <Search
            setMembers={setMembers}
            setFltSignal={setFltSignal}
            searchHolder={t("searchHolder")}
            role="Admin"
          />
          {!fltSignal ? (
            ""
          ) : (
            <div className="w-[229px] font-semibold px-3">
              {t("searchResults")}
            </div>
          )}
        </div>
        <button
          onClick={() => navigate("/admin/add")}
          className="bg-indigo-600 rounded-md px-3 py-1 text-white hover:opacity-85 duration-50"
        >
          {t("add") + " " + t("admin")}
        </button>
      </div>
      <div className=" overflow-auto">
        <Table members={members} setMembers={setMembers} role={"Admin"} />
      </div>
    </div>
  );
};

export default Index;
