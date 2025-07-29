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
    {/* Dropdown */}
    <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded min-w-[210px] z-10">
      <a href="#directors" className="block px-4 py-2 hover:bg-slate-100">BEL Board of Directors</a>
    </div>
  </li>
  
  <li><a href="/events">Events</a></li>
  <li><a href="/newsletters">Newsletters</a></li>
  <li><a href="/contact">Contact Us</a></li>
</ul>

        </div>
      {/* --- Start of Additional History Info --- */}
<div className="mt-10 bg-blue-50 border border-blue-100 rounded-xl shadow px-6 py-7 text-center max-w-2xl mx-auto">
  <p className="text-base text-gray-800 mb-4">
    The current Braybank estate was built in 1964 on the old hotel's site.<br />
    <span className="text-gray-600 text-sm">
      (With acknowledgements to ‘Bray – Today and Yesterday’ by Nan Birney)
    </span>
  </p>
  <p className="mb-3 text-gray-700">
    We have managed to obtain from a resident, a brochure which details some further
    history of the estate from the 1950’s.
    <br />
    <span>Click an image below to enlarge the photos.</span>
  </p>
  {/* If you have brochure images, insert them here */}
  {/* Example: <img src="/brochure1.jpg" alt="Brochure" className="inline-block w-32 mx-2 rounded shadow" /> */}
  <div className="mt-4">
    <a
      href="mailto:admin@braybank.info?subject=Request%20Brochure%20Images"
      className="inline-block bg-blue-700 text-white px-5 py-2 rounded-full font-medium shadow hover:bg-blue-800 transition"
    >
      Request download of images
    </a>
  </div>
</div>

      </div>
    </nav>
  );
}

export default Navbar;
