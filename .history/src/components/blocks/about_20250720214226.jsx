import { Users, Award, TrendingUp } from "lucide-react";

function AboutSection() {
  const features = [
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
        "Day-to-day operations handled by John Mortimer Property Management Ltd with dedicated property manager support.",
      color: "green",
    },
    {
      icon: TrendingUp,
      title: "Community Life",
      description:
        "Residents enjoy community gatherings including summer BBQs and Christmas carols, following clear community guidelines.",
      color: "purple",
    },
  ];

  return (
    <section id="about" className="relative py-24 text-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Banner.jpg"
          alt="About background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            About The Estate
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the history, governance, and community life of our exclusive riverside estate
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-light mb-8">Our Heritage & Location</h3>
            <p className="leading-relaxed font-light">
              The Braybank Estate is situated on the banks of the River Thames at Bray, about two miles south of the centre of Maidenhead in Berkshire...
            </p>
            <p className="leading-relaxed font-light">
              The estate comprises 62 leasehold properties: 48 apartments and 14 townhouses, with beautifully landscaped gardens...
            </p>
            <div className="pt-6">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Learn More About Our History
              </button>
            </div>
          </div>

          {/* Optional: Image layer removed as background handles visual appeal */}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 backdrop-blur-md">
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
                <h3 className="text-xl font-medium text-white text-center mb-4">{item.title}</h3>
                <p className="text-white/90 text-center leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
