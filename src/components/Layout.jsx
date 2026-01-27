import React from "react";
import backgroundImg from "../assets/backgroung.jpeg";

const Layout = ({ children }) => {
  const navButtons = ["Home", "Sobre", "Projetos", "Contato"];

  return (
    <div
      className="h-screen w-screen overflow-hidden flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="pt-0.5 flex justify-center gap-15 mt-2">
        {navButtons.map((buttonName, index) => (
          <button
            key={index}
            className="bg-transparent hover:bg-[#FFB5C5] text-black border border-black   px-8 py-1 rounded-full transition-all duration-300"
          >
            {buttonName}
          </button>
        ))}
      </div>

      {children}
    </div>
  );
};

export default Layout;
