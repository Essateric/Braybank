import React, { useState, useEffect } from 'react';
import {
  Users,
  TrendingUp,
  FileText,
  Shield,
  Building2,
  Home,
  Calendar,
  Download,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import AdminApp from './components/AdminApp';
import { useSpring, animated } from '@react-spring/web';
import { HeroDemo1 } from './components/blocks/demo';
import AboutSection from './components/blocks/about';
import DocumentsSection from './pages/DocumentsPage.jsx';
import DirectorsSection from './components/blocks/directors';
import ContactSection from './components/blocks/contact';
import Footer from './components/blocks/footer';
import NavBar from "./components/blocks/NavBar"; // Adjust path if needed
import Hero from "./components/blocks/hero"; // Adjust path if needed
import HistorySection from "./components/blocks/history";



function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
      setShowAdmin(true);
    }
  }, []);

  if (showAdmin) return <AdminApp />;

  return (
  <div>
    {/* <div className="overflow-x-hidden">
      <HeroDemo1 />
    </div> */}
    <Hero />
    <NavBar />
    <AboutSection />
     <HistorySection />
    <DirectorsSection />
     <ContactSection />
<Footer />

    </div>
  );  
}

export default App;