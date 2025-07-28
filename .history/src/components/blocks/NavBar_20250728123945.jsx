import React from "react";

export default function NavBar() {
  return (
<nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow px-8 py-2 flex items-center justify-between">
  {/* Logo on the left */}
  <div className="flex-shrink-0">
    <img
      src="/BraybankLogo.png"
      alt="Braybank Estate Logo"
      className="h-12 w-auto"
    />
  </div>

  {/* Spacer/gap in the middle */}
  <div className="flex-1"></div>

  {/* Menu links on the right */}
  <div className="flex items-center space-x-6">
    <a href="#about" className="text-slate-800 font-medium hover:text-blue-600 transition">About</a>
    <a href="#documents" className="text-slate-800 font-medium hover:text-blue-600 transition">Documents</a>
    <a href="#contact" className="text-slate-800 font-medium hover:text-blue-600 transition">Contact</a>
    <a href="/login" className="text-blue-600 font-semibold hover:underline">Login</a>
    <a href="/signup" className="ml-3 bg-blue-600 text-white px-4 py-1.5 rounded-full shadow hover:bg-blue-700 transition">Sign Up</a>
  </div>
</nav>

  );
}
