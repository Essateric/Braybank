import React from "react";

function NavBar() {
  return (
    <nav className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#hero">
          <img src="/BraybankLogo.png" alt="Braybank Logo" className="h-8" />
        </a>
        <div className="flex gap-6 items-center">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#directors" className="hover:text-blue-600">Directors</a>
          <a href="#documents" className="hover:text-blue-600">Documents</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <a href="/login" className="text-blue-600 font-semibold">Login</a>
          <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold transition">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
