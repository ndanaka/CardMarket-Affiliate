import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";

import { useAtom } from "jotai";
import { tokenWithPersistenceAtom } from "../../atoms";

import Header from "../../components/admin/header/Index";

const Layout = () => {
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });

  return (
    <>
      <div className="mx-36 max-[1000px]:mx-10 max-[700px]:mx-2">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
