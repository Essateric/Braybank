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

<div className="flex justify-center w-full mt-10">
  <div className="border-4 border-[#F7C873] rounded-xl bg-white shadow-lg px-8 py-8 max-w-3xl w-full text-center">
    <h2 className="text-3xl font-semibold text-[#F7C873] mb-6 text-center">
      About The Braybank Estate
    </h2>
    <p className="mb-4 text-gray-800 text-base">
      The Braybank Estate is situated on the banks of the River Thames at Bray, about two miles south of the centre of Maidenhead in Berkshire. It is also about one mile from Junction 8/9 of the motorway M4, 13 miles south from Junction 4 of the motorway M40 and about 26 miles to the west of central London.
    </p>
    <p className="mb-4 text-gray-800 text-base">
      It is an estate containing 62 properties of which 14 are town houses and 48 flats. A panoramic view of the East wing of the estate is shown at the top of the page. To the right is a view up the river from the Hard.
    </p>
    <div className="text-left md:text-center">
      <div className="mb-2">
        <span className="font-semibold">Board of Directors:</span> Up to seven elected directors – <a href="#directors" className="text-blue-600 underline">see current directors</a>. Access codes from <a href="mailto:admin@braybank.info" className="text-blue-600 underline">admin@braybank.info</a>.
      </div>
      <div className="mb-2">
        <span className="font-semibold">Managing Agents:</span> Cleaver Property Management Ltd, Charley Howdle (Property Manager) Tel: 0118 972 7182.
      </div>
      <div className="mb-4">
        Residents’ BBQ sometimes held in summer. <a href="#gallery" className="text-blue-600 underline">See pictures</a>.
      </div>
    </div>
    <button className="bg-blue-600 text-white px-7 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md">
      Braybank "Do’s and Don’ts" booklet
    </button>
  </div>
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
      {/* --- Start of Additional History Info --- */}
<div className="mt-10 bg-blue-50 border border-blue-100 rounded-xl shadow px-6 py-7 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-6 tracking-tight animate-fade-in-up">
           History of Braybank
          </h2>
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

    </section>
  );
}

export default AboutSection;
