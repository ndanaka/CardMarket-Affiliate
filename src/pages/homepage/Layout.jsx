import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";

import { useAtom } from "jotai";
import { tokenWithPersistenceAtom } from "../../atoms";

import HomeHeader from "../../components/homepage/homeHeader/Index";

const Layout = () => {
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      {!token ? <Navigate to="/" /> : <HomeHeader />}
      <Outlet />
    </>
  );
};
export default Layout;
