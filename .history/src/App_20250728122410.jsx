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
import StatsSection from './components/blocks/stats';
import DocumentsSection from './components/blocks/documents';
import DirectorsSection from './components/blocks/directors';
import ContactSection from './components/blocks/contact';
import Footer from './components/blocks/footer';
import NavBar from "./NavBar"; // Adjust path if needed



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

  const stats = [
    { number: '62', label: 'Properties', icon: Building2 },
    { number: '48', label: 'Apartments', icon: Home },
    { number: '14', label: 'Townhouses', icon: Building2 },
    { number: '5', label: 'Board Directors', icon: Users }
  ];

  const statAnimations = stats.map((_, index) =>
    useSpring({ from: { opacity: 0, y: 30 }, to: { opacity: 1, y: 0 }, delay: index * 200 })
  );

  if (showAdmin) return <AdminApp />;

  return (
  <div>
    <div className="overflow-x-hidden">
      <HeroDemo1 />
    </div>
    <NavBar />s
    <AboutSection />
    <DirectorsSection />

    <StatsSection />  {/* ✅ Replaces the old hardcoded stats section */}

<DocumentsSection setCurrentPage={setCurrentPage} />



     <ContactSection />
<Footer />

    </div>
  );  
}

export default App;