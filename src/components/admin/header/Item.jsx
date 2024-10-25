import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Item = ({ item, icon }) => {
  const { t } = useTranslation();
  const [path, setPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    const name = location.pathname.split("/", 3);
    location.pathname === "/admin" ? setPath(name[1]) : setPath(name[2]);
  }, [location]);

  return (
    <li
      className={` border-b-[2px] hover:border-b-gray-400 ${
        path === item
          ? "border-b-purple-600 hover:border-b-purple-600 text-black"
          : "border-b-transparent text-gray-600"
      } text-[14px]  hover:text-black py-1 max-[900px]:py-3`}
    >
      <Link to={item === "admin" ? `/admin` : `/admin/${item}`}>{t(item)}</Link>
    </li>
  );
};

export default Item;
