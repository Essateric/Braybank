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
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight animate-fade-in-up">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text
