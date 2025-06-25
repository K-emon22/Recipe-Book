import React from "react";
import {Outlet} from "react-router";
import Footer from "../Footer/Footer";
import HomeNav from "../Home/HomeNav/HomeNav";

const Root = () => {
  return (
    <div>
      <div className="px-[2%] sticky top-0 z-50 ">
        <HomeNav></HomeNav>
      </div>

      <div className="min-h-screen px-[2%]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
