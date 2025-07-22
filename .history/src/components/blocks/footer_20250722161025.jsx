import React from "react";

export default function Footer() {
  return (
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
              <li>
                <a
                  href="https://www.braybank.info/Landlord's%20Regulations%20A4%20V4ma.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-light"
                >
                  Do&apos;s &amp; Don&apos;ts Guide
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="mailto:admin@braybank.info"
                  className="hover:text-blue-400 transition-colors font-light"
                >
                  admin@braybank.info
                </a>
              </li>
              <li className="font-light">John Mortimer Property Management Ltd</li>
              <li className="font-light">Porter/Groundsman on-site</li>
              <li className="font-light">Access codes available via email</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p className="font-light">
            &copy; Copyright 2025 Braybank Estates Ltd. All rights reserved.
          </p>
           <p className="mt-2 font-light">Designed by <a href="https://www.essateric.com" className="hover:text-blue-400 transition-colors">Essateric Solutions</a></p>
          </div>
      </div>
    </footer>
  );
}
