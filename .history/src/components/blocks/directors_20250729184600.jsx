import React from "react";

const directors = [
  {
    name: "Richard Severn",
    role: "Chair",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
    experience: "Community leadership & estate governance"
  },
  {
    name: "Peter Hill",
    role: "Stewardship",
    image: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=400",
    experience: "Estate stewardship & maintenance oversight"
  },
  {
    name: "Gloria Kinghorn",
    role: "Health & Safety",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400",
    experience: "Health & safety compliance & resident welfare"
  },
  {
    name: "Margit Walker",
    role: "Secretary",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
    experience: "Board administration & resident communications"
  },
  {
    name: "Oscar Wingham",
    role: "Treasurer",
    image: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=400",
    experience: "Financial management & budgeting"
  },
    {
    name: "Amita Krishna",
    role: "Governance, Legal, Website",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400", // <--- Use your own image if you have one!
    experience: "Governance, legal compliance, and website management"
  }
];

export default function DirectorsSection() {
  return (
    <section id="directors" className="py-24 bg-gradient-to-b from-slate-50 to-white relative text-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-6 tracking-tight animate-fade-in-up">
            Board of Directors
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            The following resident Shareholders constitute the Board of Directors of Braybank Estates Limited
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          {directors.map((member, index) => (
            <div key={index} className="group card-hover">
              <div className="bg-white rounded-3xl p-8 text-center shadow-luxury border ring-1 ring-blue-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg border-4 border-blue-200 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm font-light leading-relaxed">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
