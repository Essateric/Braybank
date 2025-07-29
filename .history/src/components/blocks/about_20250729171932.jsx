import { Users, Award, TrendingUp } from "lucide-react";

function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      {/* --- Welcome Notice at the Top --- */}
      <div className="max-w-3xl mx-auto mb-12 bg-[#e0e2ec] rounded-xl shadow-lg px-7 py-6 text-[#000000]">
        <h2 className="text-xl font-semibold mb-2 text-center" style={{ fontFamily: "inherit" }}>
          Welcome to the Braybank Estate Official Website.
        </h2>
        <p className="text-sm mb-2 text-[#000000]">
          This site is maintained as a source of information for Shareholders/Leaseholders and other residents.
          To register for access, send a message to{" "}
          <a
            href="mailto:admin@braybank.info"
            className="underline text-blue-400 hover:text-blue-200"
          >
            admin@braybank.info
          </a>.
        </p>
      </div>
      {/* ------------------------------- */}

      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left: Main About Content */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#F7C873] mb-4">
            About The Braybank Estate
          </h2>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            The Braybank Estate is situated on the banks of the River Thames at Bray, about two miles south of the centre of Maidenhead in Berkshire. 
            It is also about one mile from Junction 8/9 of the motorway M4, 13 miles south from Junction 4 of the motorway M40 and about 26 miles to the west of central London.
          </p>
          <p className="mb-4 text-gray-700">
            It is an estate containing 62 properties of which 14 are town houses and 48 flats. A panoramic view of the East wing of the estate is shown at the top of the page. To the right is a view up the river from the Hard.
          </p>
          <div className="mt-6 space-y-3 text-[16px]">
            <div>
              <span className="font-semibold text-gray-800">Board of Directors:</span> Up to seven elected directors – 
              <a href="#directors" className="text-blue-600 underline mx-1">see current directors</a>. 
              Access codes from <a href="mailto:admin@braybank.info" className="text-blue-600 underline">admin@braybank.info</a>.
            </div>
            <div>
              <span className="font-semibold text-gray-800">Managing Agents:</span> Cleaver Property Management Ltd, Charley Howdle (Property Manager) Tel: 0118 972 7182.
            </div>
            <div>
              Residents’ BBQ sometimes held in summer. <a href="#gallery" className="text-blue-600 underline">See pictures</a>.
            </div>
          </div>
          <div className="mt-8">
            <a
              href="#"
              className="bg-blue-600 text-white px-7 py-3 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md"
            >
              Braybank "Do’s and Don’ts" booklet
            </a>
          </div>
        </div>

        {/* Right: Main About Image
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src="/about.jpeg"
            alt="View from the Hard"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
            style={{ minHeight: "260px", maxHeight: "330px" }}
          />
        </div> */}
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-6xl mx-auto mt-16 px-4 sm:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Ownership & Governance",
              description:
                "Owned by Braybank Estates Limited, where each leaseholder holds one share. Managed by a volunteer board of elected directors.",
              color: "blue",
            },
            {
              icon: Award,
              title: "Property Management",
              description:
                "Day-to-day operations handled by Cleaver Property Management Ltd, with dedicated property manager support.",
              color: "green",
            },
            {
              icon: TrendingUp,
              title: "Community Life",
              description:
                "Residents enjoy gatherings including summer BBQs and Christmas carols, with clear community guidelines.",
              color: "purple",
            },
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-2xl transition-all duration-300 text-center">
                <div
                  className={`bg-gradient-to-br ${
                    item.color === "blue"
                      ? "from-blue-100 to-blue-50"
                      : item.color === "green"
                      ? "from-green-100 to-green-50"
                      : "from-purple-100 to-purple-50"
                  } w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon
                    className={`h-8 w-8 ${
                      item.color === "blue"
                        ? "text-blue-600"
                        : item.color === "green"
                        ? "text-green-600"
                        : "text-purple-600"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
