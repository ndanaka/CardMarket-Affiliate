import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";

import { useAtom } from "jotai";
import { tokenWithPersistenceAtom } from "../../atoms";

import Header from "../../components/homepage/header/Index";

const Layout = () => {
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      const payload = jwtDecode(token);

      const currentTime = Math.floor(Date.now() / 1000);
      if (currentTime > payload.exp) {
        setToken("");
        localStorage.removeItem("token");
        navigate("/");
      }

      if (payload?.role === "Admin" || payload?.role === "Manager") {
        navigate("/admin");
      } else {
        navigate("/homepage");
      }
    }
  }, [token]);

  return (
    <>
      {!token ? <Navigate to="/" /> : <Header />}
      <Outlet />
    </>
  );
};
export default Layout;
