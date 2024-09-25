import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";

import { useAtom } from "jotai";
import { tokenWithPersistenceAtom } from "../../atoms";

import HomeHeader from "../../components/homepage/homeHeader/Index";

const Layout = () => {
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      const payload = jwtDecode(token);

      if (payload?.role === "Affiliate") {
        navigate("/homepage");
      } else {
        navigate("/admin");
      }
    }
  }, [token]);

  return (
    <>
      {!token ? <Navigate to="/" /> : <HomeHeader />}
      <Outlet />
    </>
  );
};
export default Layout;
