import React, { useState, useRef, useEffect } from "react";
import Logo from "/BraybankLogo.png";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef();

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white/80 z-30 shadow-md" ref={navRef}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Braybank Logo" className="h-10 w-auto" />
        </div>
        {/* Menu */}
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-6 font-medium text-lg">
            <li><a href="/">Home</a></li>
            {/* ABOUT with Dropdown */}
            <li className="relative">
              <button
                type="button"
                className="hover:underline focus:outline-none"
                onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}
              >
                About
              </button>
              {openDropdown === "about" && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded min-w-[170px] border border-slate-200 z-30">
                  <a href="#about" className="block px-4 py-2 text-black hover:bg-blue-50">About the Estate</a>
                  <a href="#history" className="block px-4 py-2 text-black hover:bg-blue-50">Braybank History</a>
                </div>
              )}
            </li>
            {/* BEL Shareholders with Dropdown */}
           <li className="relative group">
  <a href="/shareholders" className="hover:underline">BEL Shareholders</a>
  <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded border border-slate-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition z-30">
    <a href="#directors" className="block px-4 py-2 text-black hover:bg-blue-100">BEL Board of Directors</a>
    <a href="/documents" className="block px-4 py-2 text-black hover:bg-blue-100">Documents</a>
  </div>
</li>
            <li><a href="/events">Events</a></li>
            <li><a href="/newsletters">Newsletters</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
