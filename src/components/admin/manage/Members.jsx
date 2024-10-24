import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import Pagination from "../common/Pagination";

const Members = ({ members }) => {
  const { t } = useTranslation();
  const [count, setCount] = useState(1);
  const [member, setMember] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const Piece = members.slice(10 * (count - 1), 10 * count);
    setMember(Piece);
  }, [count, members]);

  return (
    <>
      <table className=" w-full text-[14px]  font-medium">
        <thead className="h-14 text-left">
          <tr className="border-t-gray-300 border-b-[1px]">
            <th>{t("name")}</th>
            <th>{t("country")}</th>
            <th>{t("email")}</th>
            <th>{t("role")}</th>
            <th className="w-[10%]">{t("action")}</th>
          </tr>
        </thead>
        <tbody className="">
          {member?.map((item, index) => (
            <tr
              key={index}
              className={`border-t-gray-300 border-b-[1px] text-gray-600 h-9`}
            >
              <td className="w-[25%]">{item.fullName}</td>
              <td className=" w-[25%]">{item.country}</td>
              <td>{item.email}</td>
              <td
                className={`${
                  item.role === "Manager" && "text-red-600"
                } w-[15%] `}
              >
                {t(item.role)}
              </td>
              <td className="w-[10%]">
                <button
                  onClick={() =>
                    navigate("/admin/manage/view", {
                      state: {
                        affId: item._id,
                      },
                    })
                  }
                  className="text-indigo-600 hover:bg-indigo-600 hover:text-white p-2 py-1 rounded-md duration-150"
                >
                  {t("view")}
                </button>
                <button
                  onClick={() => navigate("/admin/manage/edit")}
                  className="text-indigo-600 hover:bg-indigo-600 hover:text-white p-2 py-1 rounded-md duration-75"
                >
                  {t("edit")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination
        pages={Math.ceil(members.length / 10)}
        count={count}
        setCount={setCount}
        results={members.length}
      /> */}
    </>
  );
};

export default Members;
