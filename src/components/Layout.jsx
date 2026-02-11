import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons-react";
import backgroundImg from "../assets/backgroung.jpeg";

const Layout = ({ children }) => {
  const navButtons = ["Home", "About", /* "Projects" ,*/ "Contact"];
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (buttonName) => {
    const path = `/${buttonName.toLowerCase()}`;
    return location.pathname === "/" && buttonName === "Home"
      ? true
      : location.pathname === path;
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex pt-0.5 justify-center gap-15 mt-2">
        {navButtons.map((buttonName, index) => (
          <Link
            key={index}
            to={buttonName === "Home" ? "/" : `/${buttonName.toLowerCase()}`}
          >
            <button
              className={`transition-all duration-300 text-black border border-black px-8 py-1 rounded-full text-lg ${
                isActive(buttonName)
                  ? "bg-[#FFB5C5]"
                  : "bg-transparent hover:bg-[#FFB5C5]"
              }`}
            >
              {buttonName}
            </button>
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-end pt-4 px-4 relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-black hover:bg-[#FFB5C5] rounded-full transition-colors"
        >
          <IconMenu2 size={28} stroke={1.5} />
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-4 bg-pink-50 rounded-3xl shadow-lg z-50 overflow-hidden animate-dropdown-open">
            {navButtons.map((buttonName, index) => (
              <Link
                key={index}
                to={
                  buttonName === "Home" ? "/" : `/${buttonName.toLowerCase()}`
                }
                onClick={handleLinkClick}
              >
                <button
                  className={`w-full text-left px-6 py-3 transition-colors text-black ${
                    isActive(buttonName) ? "bg-[#FFB5C5]" : "hover:bg-[#FFB5C5]"
                  } ${index !== navButtons.length - 1 ? "border-b border-gray-300" : ""}`}
                >
                  {buttonName}
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>

      {children}
    </div>
  );
};

export default Layout;
