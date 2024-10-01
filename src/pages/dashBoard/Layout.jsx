import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";

import { useAtom } from "jotai";
import { tokenWithPersistenceAtom } from "../../atoms";

import Header from "../../components/dashBoard/header/Index";
import Footer from "../../components/dashBoard/footer/Index";

const Layout = () => {
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const payload = jwtDecode(token);

      const currentTime = Math.floor(Date.now() / 1000);
      if (currentTime > payload.exp) {
        navigate("/");
        setToken("");
        localStorage.removeItem("token");
      }
    }
  }, [token]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
