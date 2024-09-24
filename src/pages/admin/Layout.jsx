import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";

import { useAtom } from "jotai";
import { tokenWithPersistenceAtom } from "../../atoms";

import AdminHeader from "../../components/admin/header/Index";

const Layout = () => {
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      const payload = jwtDecode(token);

      if (payload?.fullName === "Affiliate") {
        navigate("/homepage");
      } else {
        navigate("/admin");
      }
    }
  }, [token]);

  return (
    <>
      <div className="mx-36 max-[1000px]:mx-10 max-[700px]:mx-2">
        {!token ? <Navigate to="/" /> : <AdminHeader />}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
