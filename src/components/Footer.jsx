import React from 'react';
import { ChevronRight, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/logo.png'
function Footer() {
  return (
     <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-teal-500/20"></div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
          {/* Logo Section - Compact */}
          <div className="text-center mb-8">
           <img src={logo} alt="softnis" width={150} />
           
          </div>


          {/* Main Footer Links Grid - Compact */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            
            {/* Services Column */}
            <div className="group">
              <h3 className="text-sm font-semibold mb-3 text-blue-400 relative inline-block">
                Services
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </h3>
              <ul className="space-y-2">
                {[
                  'MRO Data Management',
                  'Vendor Data Management', 
                  'Healthcare Catalog Data'
                ].map((item, index) => (
                  <li key={index} className="group/item">
                    <a href="#" className="flex items-center text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm">
                      <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                      <span className="group-hover/item:text-blue-400 transition-colors duration-200">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Classification Column */}
            <div className="group">
              <h3 className="text-sm font-semibold mb-3 text-purple-400 relative inline-block">
                Data Classification
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
              </h3>
              <ul className="space-y-2">
                {[
                  'UNSPSC',
                  'ECLASS',
                  'ETIM',
                  'NAICS code',
                  'SIC code'
                ].map((item, index) => (
                  <li key={index} className="group/item">
                    <a href="#" className="flex items-center text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm">
                      <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                      <span className="group-hover/item:text-purple-400 transition-colors duration-200">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Product Taxonomy Column */}
            <div className="group">
              <h3 className="text-sm font-semibold mb-3 text-teal-400 relative inline-block">
                Google Product Taxonomy
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-green-400 group-hover:w-full transition-all duration-300"></div>
              </h3>
              <ul className="space-y-2">
                {[
                  'Product Classification',
                  'Find GTIN',
                  'Brand and Part Number'
                ].map((item, index) => (
                  <li key={index} className="group/item">
                    <a href="#" className="flex items-center text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm">
                      <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                      <span className="group-hover/item:text-teal-400 transition-colors duration-200">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spend Management Column */}
            <div className="group">
              <h3 className="text-sm font-semibold mb-3 text-orange-400 relative inline-block">
                Spend Management
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 group-hover:w-full transition-all duration-300"></div>
              </h3>
              <ul className="space-y-2">
                {[
                  'Spend Analysis',
                  'Procurement Management'
                ].map((item, index) => (
                  <li key={index} className="group/item">
                    <a href="#" className="flex items-center text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm">
                      <ChevronRight className="w-3 h-3 mr-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                      <span className="group-hover/item:text-orange-400 transition-colors duration-200">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Secondary Footer Section - Compact */}
          <div className="border-t border-slate-700 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* SoftNis Section */}
              <div className="group">
                <h4 className="text-sm font-semibold mb-2 text-blue-400 relative inline-block">
                  SoftNis
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blueiejs-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                </h4>
                <ul className="space-y-1">
                  {[
                    'About US',
                    'Careers'
                  ].map((item, index) => (
                    <li key={index} className="group/item">
                      <a href="#" className="flex items-center text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm">
                        <ExternalLink className="w-3 h-3 mr-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                        <span className="group-hover/item:text-blue-400 transition-colors duration-200">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results Section */}
              <div className="group">
                <h4 className="text-sm font-semibold mb-2 text-purple-400 relative inline-block">
                  RESULTS
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                </h4>
                <ul className="space-y-1">
                  {[
                    'Case Studies',
                    'Download Data Samples',
                    'Testimonials',
                    'Clientele'
                  ].map((item, index) => (
                    <li key={index} className="group/item">
                      <a href="#" className="flex items-center text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm">
                        <ExternalLink className="w-3 h-3 mr-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                        <span className="group-hover/item:text-purple-400 transition-colors duration-200">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Section */}
              <div className="group">
                <h4 className="text-sm font-semibold mb-2 text-teal-400 relative inline-block">
                  FAQ
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-green-400 group-hover:w-full transition-all duration-300"></div>
                </h4>
                <ul className="space-y-1">
                  {[
                    'UNSPSC',
                    'CPV'
                  ].map((item, index) => (
                    <li key={index} className="group/item">
                      <a href="#" className="flex items-center text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1 text-sm">
                        <ExternalLink className="w-3 h-3 mr-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                        <span className="group-hover/item:text-teal-400 transition-colors duration-200">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
         </div>
            <div className="border-t border-slate-700 pt-4 mt-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
                  <div className="flex items-center text-slate-300 hover:text-white transition-colors duration-200 group text-sm">
                    <Mail className="w-4 h-4 mr-2 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                    <span>contact@softnis.com</span>
                  </div>
                  <div className="flex items-center text-slate-300 hover:text-white transition-colors duration-200 group text-sm">
                    <Phone className="w-4 h-4 mr-2 text-purple-400 group-hover:scale-110 transition-transform duration-200" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-slate-300 hover:text-white transition-colors duration-200 group text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-teal-400 group-hover:scale-110 transition-transform duration-200" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-3">
                  {[
                    { Icon: Github, color: 'hover:text-gray-400' },
                    { Icon: Linkedin, color: 'hover:text-blue-400' },
                    { Icon: Twitter, color: 'hover:text-sky-400' }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className={`w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-slate-400 ${social.color} transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                    >
                      <social.Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
              <div className="mb-2 md:mb-0">
                © 2024 SoftNis. All rights reserved.
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
    );
}

export default Footer;