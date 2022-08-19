import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/HeaderComponent";

const Layout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

export default Layout;
