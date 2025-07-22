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

    <StatsSection />  {/* ✅ Replaces the old hardcoded stats section */}

    <AboutSection />
<DocumentsSection setCurrentPage={setCurrentPage} />

<DirectorsSection />

     <ContactSection />


      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-lg font-medium text-white">Braybank Estate</div>
              </div>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                An exclusive private residential leasehold estate situated on the banks of the River Thames at Bray, Berkshire.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors font-light">About the Estate</a></li>
                <li><a href="#directors" className="hover:text-white transition-colors font-light">Board of Directors</a></li>
                <li><a href="#documents" className="hover:text-white transition-colors font-light">Documents</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-light">Community Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6">Resident Resources</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors font-light">Board Minutes</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-light">Community Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-light">Lease Information</a></li>
                <li><a href="https://www.braybank.info/Landlord's%20Regulations%20A4%20V4ma.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-light">Do's & Don'ts Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="mailto:admin@braybank.info" className="hover:text-blue-400 transition-colors font-light">admin@braybank.info</a></li>
                <li className="font-light">John Mortimer Property Management Ltd</li>
                <li className="font-light">Porter/Groundsman on-site</li>
                <li className="font-light">Access codes available via email</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p className="font-light">&copy; Copyright 2025 Braybank Estates Ltd. All rights reserved.</p>
            <p className="mt-2 font-light">Designed by <a href="https://www.essateric.com" className="hover:text-blue-400 transition-colors">Essateric Solutions</a></p>
          </div>
        </div>
      </footer>
    </div>
  );  
}

export default App;