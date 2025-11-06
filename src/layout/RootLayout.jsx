import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";

const RootLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
