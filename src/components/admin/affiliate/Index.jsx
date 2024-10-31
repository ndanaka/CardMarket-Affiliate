import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import HomeApi from "../../../api/homeApi";

import Search from "../common/Search";
import Table from "../common/Table";
import Spinner from "../../../utils/Spinner";

const Index = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [members, setMembers] = useState([]);
  const [fltSignal, setFltSignal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { GetMembers } = HomeApi();

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    setLoading(true);
    const res = await GetMembers("Affiliate");
    setLoading(false);
    const affiliates = res.data.members.filter(
      (affiliate) => affiliate.role === "Affiliate"
    );
    setMembers(affiliates);
  };

  return (
    <div className="mt-4 border-[1px] border-gray-200 rounded-lg p-10 pb-5 max-[700px]:p-2">
      {loading && <Spinner />}
      <div className="flex flex-wrap justify-between gap-3 pb-3">
        <div className="flex flex-wrap gap-2 justify-center items-center">
          <Search
            setMembers={setMembers}
            setFltSignal={setFltSignal}
            searchHolder={t("searchHolder")}
            role="Affiliate"
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
          onClick={() => navigate("/admin/affiliate/add")}
          className="bg-indigo-600 rounded-md px-3 py-1 text-white hover:opacity-85 duration-50"
        >
          {t("add") + " " + t("affiliate")}
        </button>
      </div>
      <div className=" overflow-auto">
        <Table members={members} setMembers={setMembers} role={"Affiliate"} />
      </div>
    </div>
  );
};

export default Index;
