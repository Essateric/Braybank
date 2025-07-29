import React, { useState } from "react";
import Logo from "/BraybankLogo.png";

function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [shareholdersOpen, setShareholdersOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white/80 z-30 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Braybank Logo" className="h-10 w-auto" />
        </div>
        {/* Centered Menu */}
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-6 font-medium text-lg">
            <li><a href="/">Home</a></li>

            {/* ABOUT with Dropdown - wrapper to stop flicker */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <li>
                <a href="#about" className="hover:underline">About</a>
              </li>
              {aboutOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded min-w-[170px] border border-slate-200 z-30">
                  <a href="#about" className="block px-4 py-2 text-black hover:bg-blue-50">About the Estate</a>
                  <a href="#history" className="block px-4 py-2 text-black hover:bg-blue-50">Braybank History</a>
                </div>
              )}
            </div>

            {/* BEL Shareholders with Dropdown - wrapper to stop flicker */}
            <div
              className="relative"
              onMouseEnter={() => setShareholdersOpen(true)}
              onMouseLeave={() => setShareholdersOpen(false)}
            >
              <li>
                <a href="/shareholders" className="hover:underline">BEL Shareholders</a>
              </li>
              {shareholdersOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded min-w-[170px] border border-slate-200 z-30">
                  <a href="#directors" className="block px-4 py-2 text-black hover:bg-blue-50">
                    BEL Board of Directors
                  </a>
                </div>
              )}
            </div>

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
