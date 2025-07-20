import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  Home,
  Info,
  FileText,
  UserCheck,
  MessageSquare,
  Star,
  Shield,
  Leaf,
  Building2,
  Calendar,
  ChevronDown,
  Download
} from 'lucide-react';
import AdminApp from './components/AdminApp';
import { useSpring, animated } from '@react-spring/web';
import { HeroDemo1 } from './components/blocks/demo';
import { AboutSection } from './components/blocks/about';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

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
      {/* Hero Section */}
      <div className="overflow-x-hidden">
        <HeroDemo1 />
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <animated.div key={index} style={statAnimations[index]} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-light text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />
    </div>

      {/* Documents Section */}
      <section id="documents" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">Documents & Resources</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Access important documents, newsletters, and community resources for Braybank Estate residents
            </p>
          </div>
          
          {/* Document Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Board Minutes",
                description: "Official minutes from board meetings and community decisions.",
                count: "12 Documents",
                icon: FileText,
                color: "blue"
              },
              {
                title: "Newsletters",
                description: "Community newsletters and important announcements.",
                count: "8 Documents",
                icon: FileText,
                color: "green"
              },
              {
                title: "Guidelines & Policies",
                description: "Estate guidelines, policies, and community regulations.",
                count: "6 Documents",
                icon: Shield,
                color: "purple"
              },
              {
                title: "Financial Reports",
                description: "Annual reports, budgets, and financial statements.",
                count: "4 Documents",
                icon: TrendingUp,
                color: "red"
              }
            ].map((category, index) => (
              <div key={index} className="group" onClick={category.title === "Newsletters" ? () => setCurrentPage('newsletters') : undefined}>
                <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 cursor-pointer">
                  <div className={`bg-gradient-to-br ${
                    category.color === 'blue' ? 'from-blue-100 to-blue-50' :
                    category.color === 'green' ? 'from-green-100 to-green-50' :
                    category.color === 'purple' ? 'from-purple-100 to-purple-50' :
                    'from-orange-100 to-orange-50'
                  } w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`h-8 w-8 ${
                      category.color === 'blue' ? 'text-blue-600' :
                      category.color === 'green' ? 'text-green-600' :
                      category.color === 'purple' ? 'text-purple-600' :
                      'text-red-600'
                    }`} />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-3">{category.title}</h3>
                  <p className="text-slate-600 mb-4 font-light leading-relaxed text-sm">{category.description}</p>
                  <p className="text-xs text-slate-500 font-medium">{category.count}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Documents */}
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-8 py-6 border-b border-slate-200">
              <h3 className="text-2xl font-light text-slate-900 mb-2">Recent Documents</h3>
              <p className="text-slate-600 font-light">Latest documents and announcements for residents</p>
            </div>
            
            <div className="p-8">
              <div className="space-y-4">
                {[
                  {
                    title: "Community Newsletter - January 2024",
                    type: "Newsletter",
                    date: "January 15, 2024",
                    size: "2.4 MB",
                    description: "Monthly community updates, upcoming events, and important announcements.",
                    restricted: false
                  },
                  {
                    title: "Board Meeting Minutes - December 2023",
                    type: "Minutes",
                    date: "January 10, 2024",
                    size: "1.8 MB",
                    description: "Official minutes from the December board meeting covering budget discussions.",
                    restricted: true
                  },
                  {
                    title: "Estate Guidelines Update",
                    type: "Guidelines",
                    date: "January 8, 2024",
                    size: "3.2 MB",
                    description: "Updated community guidelines including new parking regulations.",
                    restricted: true
                  },
                  {
                    title: "Annual Financial Report 2023",
                    type: "Financial",
                    date: "December 20, 2023",
                    size: "4.1 MB",
                    description: "Comprehensive financial report for the 2023 fiscal year.",
                    restricted: true
                  },
                  {
                    title: "Christmas Carol Event Photos",
                    type: "Photos",
                    date: "December 18, 2023",
                    size: "12.5 MB",
                    description: "Photo collection from our annual Christmas carol gathering.",
                    restricted: false
                  }
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-6 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-200 transition-colors">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <h4 className="font-medium text-slate-900">{doc.title}</h4>
                          {doc.restricted && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                              <Shield className="h-3 w-3 mr-1" />
                              Residents Only
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 mb-2">{doc.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-slate-500">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {doc.date}
                          </span>
                          <span>{doc.size}</span>
                          <span className="px-2 py-1 bg-slate-100 rounded-full">{doc.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {doc.restricted ? (
                        <button className="flex items-center px-4 py-2 text-slate-500 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors text-sm">
                          <Shield className="h-4 w-4 mr-2" />
                          Login Required
                        </button>
                      ) : (
                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm group-hover:shadow-lg">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Access Notice */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl border border-blue-100">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Document Access</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Some documents are restricted to registered leaseholders only. To access these documents, please log in to your resident account.
                    </p>
                    <p className="text-sm text-slate-600">
                      Need access? Contact <a href="mailto:admin@braybank.info" className="text-blue-600 hover:text-blue-800 font-medium">admin@braybank.info</a> to register for an account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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