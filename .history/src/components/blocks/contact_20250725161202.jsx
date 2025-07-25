import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    title: "Estate Location",
    content: "River Thames at Bray, near Maidenhead, Berkshire"
  },
  {
    icon: Phone,
    title: "Property Management",
    content: "John Mortimer Property Management Ltd"
  },
  {
    icon: Mail,
    title: "Estate Administration",
    content: "admin@braybank.info"
  },
  {
    icon: Clock,
    title: "Access Codes",
    content: "Available from admin@braybank.info"
  }
];

export default function ContactSection() {
  return (
    <div className="flex justify-center mb-20 animate-fade-in">
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight animate-fade-in-up">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            Questions about the Braybank Estate? Contact our property management team or board of directors for assistance with community matters.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              {contactItems.map((item, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="bg-blue-600/20 p-3 rounded-2xl mr-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-lg mb-1">{item.title}</p>
                    <p className="text-slate-300 font-light">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
            <h3 className="text-2xl font-light mb-8">Contact Estate Management</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-slate-300 backdrop-blur-sm"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-slate-300 backdrop-blur-sm"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-slate-300 backdrop-blur-sm"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-slate-300 backdrop-blur-sm"
              />
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white backdrop-blur-sm">
                <option className="text-slate-900">Select Inquiry Type</option>
                <option className="text-slate-900">Leaseholder Inquiry</option>
                <option className="text-slate-900">Maintenance Request</option>
                <option className="text-slate-900">Board/Community Matter</option>
                <option className="text-slate-900">Access Codes</option>
                <option className="text-slate-900">Community Guidelines</option>
              </select>
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-slate-300 backdrop-blur-sm resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-2xl hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section></div>
  );
}
