import React from "react";

function AboutSection() {
  return (
    <section id="about" className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Main About Content */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#F7C873] mb-5">
            About The Braybank Estate
          </h2>
          <p className="text-lg text-gray-800 mb-5 leading-relaxed">
            The Braybank Estate is situated on the banks of the River Thames in Bray village, some
            2 miles from Maidenhead and 4 miles from Windsor, Berkshire. The gated community is
            home to 62 properties of which 14 are town houses and 48 flats.
          </p>
          <p className="text-gray-700 mb-5">
            The estate is managed by a board of directors under a limited company. The objective
            of the board is to ensure the smooth running of the estate and work with a managing
            agent to oversee the day-to-day running of the estate.
          </p>
          <p className="text-gray-700 mb-5">
            All dwellings are Leasehold and the Freehold of Braybank is owned by Braybank
            Estates Limited (BEL) in which most Leaseholders hold one of the 62 shares. The
            Company is managed by a Board of up to seven Directors, all themselves
            Shareholders, who are elected at an Annual General Meeting. The Board is in place as a
            requirement of the Companies Act to carry out a legal and co-ordinating role on behalf
            of all Shareholders.
          </p>
          <p className="text-gray-700 mb-5">
            <b>Click&nbsp;
            <a href="#shareholders" className="text-blue-600 underline">here</a>
            &nbsp;to view the list of Braybank Directors currently serving.</b> <br />
            <span className="text-sm">You’ll find this under the "Shareholders" tab, with a sub-tab for "BEL Board of Directors".</span>
          </p>
          <p className="text-gray-700 mb-6">
            Board Meetings are held at regular intervals.
          </p>

          {/* Managing Agent Info */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-7 shadow-sm">
            <span className="font-semibold text-blue-800 block mb-1">Current Managing Agents for Braybank:</span>
            <div className="text-gray-900 text-base leading-relaxed">
              Cleaver Property Management Ltd<br />
              Unit 4 Anvil Court<br />
              Denmark Street<br />
              Wokingham
            </div>
          </div>
        </div>

        {/* Right: About Image */}
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src="/about.jpeg"
            alt="Braybank Estate"
            className="rounded-lg shadow-xl w-full h-auto object-cover border-2 border-[#F7C873]"
            style={{ minHeight: "260px", maxHeight: "330px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
