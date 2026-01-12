import React from "react";
import logo from "../../assets/images/profile/mainlogo-w.png";
import DownloadSvg from "../../assets/images/pages/logososmed/download-svgrepo-com.svg?react";
import WhatsappSvg from "../../assets/images/pages/logososmed/whatsapp-svgrepo-com.svg?react";

const DesktopNavbar = ({ activeSection, onNavClick }) => {
  const navItems = [
    "home",
    "about",
    "services",
    "skills",
    "project",
    "contact",
  ];

  return (
    <nav className="hidden md:flex flex-col items-center justify-between bg-none w-48 h-screen fixed left-0 top-0 py-8">
      <div className="flex items-center gap-3">
        <img src={logo} alt="RyannPy Logo" className="w-8 h-8 object-contain" />
        <span className="text-white text-2xl font-bold">RyannPy</span>
      </div>

      <ul
        className="flex flex-col items-start space-y-6 text-white mt-10"
        id="navbar"
      >
        {navItems.map((item) => (
          <li key={item} className="w-22.5">
            <a
              href={`#${item}`}
              onClick={(e) => onNavClick(e, item)}
              className={`nav-link relative px-4 py-2 text-gray-300 transition-colors duration-300 group no-underline ${
                activeSection === item ? "nav-active" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 text-xl text-white">
        <a href="#" className="flex items-center gap-3 group">
          <DownloadSvg className="w-5 h-5 transition-transform duration-300 group-hover:scale-125" />
        </a>
        <a href="#" className="flex items-center gap-3 group">
          <WhatsappSvg className="w-5 h-5 transition-transform duration-300 group-hover:scale-125" />
        </a>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
