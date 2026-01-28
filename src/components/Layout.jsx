import React from "react";
import { useLocation, Link } from "react-router-dom";
import backgroundImg from "../assets/backgroung.jpeg";

const Layout = ({ children }) => {
  const navButtons = ["Home", "Sobre", "Projetos", "Contato"];
  const location = useLocation();

  const isActive = (buttonName) => {
    const path = `/${buttonName.toLowerCase()}`;
    return location.pathname === "/" && buttonName === "Home"
      ? true
      : location.pathname === path;
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="pt-0.5 flex justify-center gap-15 mt-2">
        {navButtons.map((buttonName, index) => (
          <Link
            key={index}
            to={buttonName === "Home" ? "/" : `/${buttonName.toLowerCase()}`}
          >
            <button
              className={`transition-all duration-300 text-black border border-black px-8 py-1 rounded-full ${
                isActive(buttonName)
                  ? "bg-[#FFB5C5] 0"
                  : "bg-transparent hover:bg-[#FFB5C5]"
              }`}
            >
              {buttonName}
            </button>
          </Link>
        ))}
      </div>

      {children}
    </div>
  );
};

export default Layout;
