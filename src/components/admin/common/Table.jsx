import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import HomeApi from "../../../api/homeApi";
import Spinner from "../../../utils/Spinner";

const Table = ({ members, setMembers, role }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { DeleteMember } = HomeApi();
  const [loading, setLoading] = useState(false);

  const submitDeleteAffiliate = async (affId) => {
    setLoading(true);
    const res = await DeleteMember({ _id: affId, role: role });
    setLoading(false);
    if (res.data.status) setMembers(res.data.members);
  };

  return (
    <>
      {loading && <Spinner />}
      <table className=" w-full text-[14px] font-medium">
        <thead className="h-14 text-left text-center">
          <tr className="border-t-gray-300 border-b-[1px]">
            <th>{t("name")}</th>
            <th>{t("country")}</th>
            <th>{t("email")}</th>
            <th>{t("phNumber")}</th>
            <th>{role === "Admin" ? t("delete") : t("action")}</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {members.length !== 0 ? (
            members?.map((item, index) => (
              <tr
                key={index}
                className={`border-t-gray-300 border-b-[1px] text-gray-600 h-9`}
              >
                <td>{item.fullName}</td>
                <td>{item.country}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  {role === "Affiliate" && (
                    <i
                      className="fa fa-eye text-indigo-600 hover:bg-indigo-600 hover:text-white px-2 py-1 rounded-md duration-150 cursor-pointer"
                      onClick={() =>
                        navigate("/admin/affiliate/view", {
                          state: {
                            affId: item._id,
                          },
                        })
                      }
                    />
                  )}

                  <i
                    className="fa fa-trash text-indigo-600 hover:bg-indigo-600 hover:text-white px-2 py-1 rounded-md duration-150 cursor-pointer"
                    onClick={() => submitDeleteAffiliate(item._id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr
              className={`border-t-gray-300 border-b-[1px] text-gray-600 h-9`}
            >
              <td colSpan={5}>{t("noData")}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
