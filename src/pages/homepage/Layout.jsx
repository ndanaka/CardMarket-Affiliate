import { useEffect } from "react";
import { useAtom } from "jotai";
import { Navigate, Outlet, useNavigate } from "react-router";

import HomeHeader from "../../components/homepage/homeHeader/Index";

import { tokenAtom } from "../../store";

const Layout = () => {
  const [token, setToken] = useAtom(tokenAtom);
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
