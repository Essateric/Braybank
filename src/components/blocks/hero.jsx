import React from "react";

function HeroSection() {
  return (
    <section
      className="relative h-[90vh] min-h-[500px] flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/BBStich2.png')", // Use your chosen background
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <img
          src="/BraybankLogo.png"
          alt="Braybank Logo"
          className="w-72 max-w-xs md:w-96 md:max-w-lg mb-8 drop-shadow-xl"
        />
        <p className="text-lg md:text-2xl font-light mb-10 text-white drop-shadow">
          Exclusive riverside living in Bray, Berkshire
        </p>
        <a
          href="#about"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 transition text-lg"
        >
          Discover More
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
