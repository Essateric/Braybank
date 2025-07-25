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
    <section id="contact" className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-semibold">Get in Touch</h2>
      <div className="w-24 h-1 bg-blue-400 mx-auto my-4"></div>
      <p className="text-lg text-white/80 max-w-2xl mx-auto">
        Questions about the Braybank Estate? Contact our property management team or board of directors for assistance with community matters.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Left: Contact Info */}
      <div className="space-y-6">
        <ContactItem icon="📍" title="Estate Location" text="River Thames at Bray, near Maidenhead, Berkshire" />
        <ContactItem icon="📞" title="Property Management" text="John Mortimer Property Management Ltd" />
        <ContactItem icon="📧" title="Estate Administration" text="admin@braybank.info" />
        <ContactItem icon="🔐" title="Access Codes" text="Available from admin@braybank.info" />
      </div>

      {/* Right: Contact Form */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg w-full max-w-xl mx-auto">
        <h3 className="text-xl font-semibold mb-6 text-white">Contact Estate Management</h3>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input type="text" placeholder="First Name" className="flex-1 input-field" />
            <input type="text" placeholder="Last Name" className="flex-1 input-field" />
          </div>
          <input type="email" placeholder="Email Address" className="input-field" />
          <input type="tel" placeholder="Phone Number" className="input-field" />
          <select className="input-field">
            <option value="">Select Inquiry Type</option>
            <option>General</option>
            <option>Property Issue</option>
            <option>Access Codes</option>
          </select>
          <textarea rows="4" placeholder="How can we help you?" className="input-field" />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
  );
}
