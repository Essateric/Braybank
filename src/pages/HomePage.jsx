// src/pages/HomePage.jsx
import React from "react";
import Hero from "../components/blocks/hero";
import AboutSection from "../components/blocks/about";
import HistorySection from "../components/blocks/history";
import DirectorsSection from "../components/blocks/directors";
import ContactSection from "../components/blocks/contact";
import Footer from "../components/blocks/footer";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <HistorySection />
      <DirectorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
