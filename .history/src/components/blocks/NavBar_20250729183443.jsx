import { Link } from "react-router-dom"; // or "next/link" for Next.js
import Logo from "/BraybankLogo.png"; // adjust path

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white/80 z-30 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo Left */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Braybank Logo" className="h-10 w-auto" />
        </div>
        {/* Centered Menu */}
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-6 font-medium text-lg">
  <li><a href="/">Home</a></li>
  
  {/* ABOUT with Dropdown */}
  <li className="relative group">
    <a href="#about" className="hover:underline">About</a>
    {/* Dropdown */}
    <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded min-w-[170px] z-10">
      <a href="#about" className="block px-4 py-2 hover:bg-slate-100">About the Estate</a>
      <a href="#history" className="block px-4 py-2 hover:bg-slate-100">Braybank History</a>
    </div>
  </li>
  
  {/* BEL Shareholders with Dropdown */}
<li className="relative group">
  <a href="/shareholders" className="hover:underline">BEL Shareholders</a>
  {/* Dropdown menu, only shows on hover */}
  <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded border border-slate-200 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition z-30"
  >
    <a
      href="#directors"
      className="block px-4 py-2 text-black hover:bg-blue-100"
    >
      BEL Board of Directors
    </a>
    {/* Add more dropdown links here if needed */}
  </div>
</li>

  
  <li><a href="/events">Events</a></li>
  <li><a href="/newsletters">Newsletters</a></li>
  <li><a href="/contact">Contact Us</a></li>
</ul>

        </div>
        {/* Right - Log in/Sign up
        <div className="flex gap-3">
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Log in</a>
          <a href="/signup" className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Sign up</a>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
