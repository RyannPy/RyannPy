import React from "react";
import HamburgerButton from "./HamburgerButton";
import logo from "../../assets/images/profile/mainlogo-w.png";

const MobileNavbar = ({ isActive, onToggle }) => (
  <nav className="bg-none fixed w-full z-50 md:hidden flex items-center justify-between px-6 h-15">
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="RyannPy Logo"
        className="w-8 h-8 object-contain"
      />
      <span className="text-white text-2xl font-bold">RyannPy</span>
    </div>

    <HamburgerButton isActive={isActive} onClick={onToggle} />
  </nav>
);

export default MobileNavbar;
