import React from "react";
import backgroundImg from "../assets/backgroung.jpeg";

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {children}
    </div>
  );
};

export default Layout;
