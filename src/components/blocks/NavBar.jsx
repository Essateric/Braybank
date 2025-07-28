import React from "react";

export default function NavBar() {
  return (
<nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
  <img src="/BraybankLogo.png" alt="Braybank Logo" className="w-20" />
  <div className="flex space-x-6 font-semibold text-base">
    <a href="/" className="hover:underline">Home</a>
    <a href="/about" className="hover:underline">About</a>
    <a href="/shareholders" className="hover:underline">BEL Shareholders</a>
    <a href="/events" className="hover:underline">Events</a>
    <a href="/newsletters" className="hover:underline">Newsletters</a>
    <a href="/contact" className="hover:underline">Contact us</a>
    {/* Keep your Sign Up and Login buttons if needed */}
  </div>
</nav>


  );
}
