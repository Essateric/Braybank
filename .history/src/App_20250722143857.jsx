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


           {/* Directors Section */}
      <section id="directors" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">Board of Directors</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              The following resident Shareholders constitute the Board of Directors of Braybank Estates Limited
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[
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
              }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm font-light leading-relaxed">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Get in Touch</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
              Questions about the Braybank Estate? Contact our property management team or board of directors for assistance with community matters.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                {[
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
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
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
      </section>

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