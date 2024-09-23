import React from "react";
import { Outlet } from "react-router";

import Header from "../../components/dashBoard/header/Index";
import Footer from "../../components/dashBoard/footer/Index";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
