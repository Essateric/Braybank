import React from "react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow px-8 py-2 flex justify-center items-center">
      <div className="max-w-5xl mx-auto flex justify-center items-center py-4">
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <a href="#about" className="hover:text-blue-700 transition">About</a>
          </li>
          <li>
            <a href="#directors" className="hover:text-blue-700 transition">Directors</a>
          </li>
          <li>
            <a href="#documents" className="hover:text-blue-700 transition">Documents</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
          </li>
          <li>
            <a
              href="/login"
              className="px-4 py-2 rounded hover:bg-blue-100 transition text-blue-700 border border-blue-600"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/signup"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition font-semibold shadow"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
