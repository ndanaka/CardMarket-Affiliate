import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Item = ({ item, icon }) => {
  const [path, setPath] = useState("");
  const location = useLocation();
  useEffect(() => {
    const name = location.pathname.split("/", 3);
    setPath(name[2]);
  }, [location]);
  return (
    <>
      <li
        className={` border-b-[2px] hover:border-b-gray-400  ${
          path === item.toLowerCase()
            ? "border-b-purple-600 hover:border-b-purple-600 text-black"
            : "border-b-transparent text-gray-600"
        } text-[14px]  hover:text-black py-6 max-[900px]:py-3`}
      >
        <Link to={`/admin/${item.toLowerCase()}`}>{item}</Link>
      </li>
    </>
  );
};
export default Item;
