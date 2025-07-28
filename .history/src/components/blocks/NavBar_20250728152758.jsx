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
            <li><a href="/about">About</a></li>
            <li className="relative group">
              <a href="/shareholders" className="hover:underline">BEL Shareholders</a>
              {/* Dropdown */}
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded">
                <a href="/shareholders/board" className="block px-4 py-2 hover:bg-slate-100">BEL Board of Directors</a>
              </div>
            </li>
            <li><a href="/events">Events</a></li>
            <li><a href="/newsletters">Newsletters</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        {/* Right - Log in/Sign up */}
        <div className="flex gap-3">
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Log in</a>
          <a href="/signup" className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
