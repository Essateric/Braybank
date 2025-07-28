import React from "react";

function HeroSection() {
  return (
    <section
      className="relative h-[90vh] min-h-[500px] flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/BBStich2.png')", // This is your hero background image!
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-6 tracking-tight">
          Braybank Estates
        </h1>
        <p className="text-lg md:text-2xl font-light mb-10 drop-shadow">
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
