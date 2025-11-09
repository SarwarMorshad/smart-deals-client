import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
