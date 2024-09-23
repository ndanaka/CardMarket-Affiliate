import React, { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import { useNavigate } from "react-router";

const Members = ({ members }) => {
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
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody className="">
          {member?.map((item, index) => (
            <tr
              key={index}
              className={` border-t-gray-300 border-t-[1px] text-gray-600  h-9`}
            >
              <td className="w-[25%] ">{item.name}</td>
              <td className=" w-[25%] ">{item.country}</td>
              <td>{item.email}</td>
              <td
                className={`${
                  item.role === "manager" && "text-red-600"
                } w-[10%] `}
              >
                {item.role}
              </td>
              <td className="text-right w-[5%] ">
                <button
                  onClick={() => navigate("/admin/manage/view")}
                  className="text-indigo-600 hover:bg-indigo-600 hover:text-white px-2 py-1 rounded-md duration-150"
                >
                  View
                </button>
              </td>
              <td className="text-right w-[5%] ">
                <button
                  onClick={() => navigate("/admin/manage/edit")}
                  className="text-indigo-600 hover:bg-indigo-600 hover:text-white px-2 py-1 rounded-md duration-75"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pages={Math.ceil(members.length / 10)}
        count={count}
        setCount={setCount}
        results={members.length}
      />
    </>
  );
};
export default Members;
