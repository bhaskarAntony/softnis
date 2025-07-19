import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Star,
  Award,
  Users,
  Globe,
  TrendingUp
} from 'lucide-react';
import logo from '../assets/logo.png'


function Header() {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
     <header className={`fixed top-0 w-full z-50 transition-all duration-500 bg-white/95 backdrop-blur-md shadow-sm`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="softnis" width={200} />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {/* COMPANY */}
        <div className="relative group">
          <button className="text-gray-700 hover:text-blue-600 font-semibold transition duration-300 py-2">
            COMPANY
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-40">
            <a href="/aboutus" className="block px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-700">About Us</a>
            <a href="/faq" className="block px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-700">FAQ</a>
          </div>
        </div>

        {/* SERVICES */}
        <div className="relative group">
          <button className="text-gray-700 hover:text-blue-600 font-semibold transition duration-300 py-2">
            SERVICES
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-0 py-2 w-[300px]">
            <a href="/health" className="block px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-700">Healthcare Products Catalog Data Enrichment & Classification Services</a>
            <a href="/mro" className="block px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-700">MRO Data Enrichment Cleansing, De-Duplication and Classification</a>
            <a href="/eclass" className="block px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-700">ECLASS Classification With Properties and Values</a>
            <a href="/etim" className="block px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-700">ETIM Classification and Values Gathering</a>
            <a href="/staff" className="block px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-700">Staffing Solutions</a>
            <a href="/unspc" className="block px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-700">UNSPSC</a>
            <a href="/cpv" className="block px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-700">CPV</a>
          </div>
        </div>

        {/* SOFTWARE */}
        <div className="relative group">
          <button className="text-gray-700 hover:text-blue-600 font-semibold transition duration-300 py-2">
            SOFTWARE
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg  py-2 w-56">
            <a href="#" className="block px-4 py-2 hover:bg-blue-500 hover:text-white hover:text-white text-white-700">Data Cleaning Tool</a>
            <a href="#" className="block px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-700">Web Scraping Tool</a>
          </div>
        </div>

        {/* RESULTS */}
        <div className="relative group">
          <button className="text-gray-700 hover:text-blue-600 font-semibold transition duration-300 py-2">
            RESULTS
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg  py-2 w-40">
            <a href="#" className="block px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-700">Case Studies</a>
            <a href="#" className="block px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-700">Download Data Samples</a>
            <a href="#" className="block px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-700">Testimonials</a>
            <a href="#" className="block px-4 py-2 hover:bg-blue-500 hover:text-white text-gray-700">Clientele</a>
          </div>
        </div>

        {/* CONTACT US */}
        <a href="/contactus" className="text-gray-700 hover:text-blue-600 font-semibold transition duration-300 py-2">
          CONTACT US
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Navigation */}
    {mobileMenuOpen && (
      <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-4 space-y-2 rounded-b-lg shadow-lg">
        {/* COMPANY */}
        <div className="px-4">
          <span className="font-semibold text-gray-700">COMPANY</span>
          <a href="#" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">About Us</a>
          <a href="#" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">FAQ</a>
        </div>
        {/* SERVICES */}
        <div className="px-4">
          <span className="font-semibold text-gray-700">SERVICES</span>
          {[
            'Healthcare Products Catalog Data Enrichment & Classification Services',
            'MRO Data Enrichment Cleansing, De-Duplication and Classification',
            'ECLASS Classification With Properties and Values',
            'ETIM Classification and Values Gathering',
            'Staffing Solutions',
            'UNSPSC',
            'CPV',
          ].map((service) => (
            <a key={service} href="#" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">{service}</a>
          ))}
        </div>
        {/* SOFTWARE */}
        <div className="px-4">
          <span className="font-semibold text-gray-700">SOFTWARE</span>
          <a href="#" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">Data Cleaning Tool</a>
          <a href="#" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">Web Scraping Tool</a>
        </div>
        {/* RESULTS */}
        <div className="px-4">
          <span className="font-semibold text-gray-700">RESULTS</span>
          <a href="#" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">Case Studies</a>
          <a href="#" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">Download Data Samples</a>
          <a href="#" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">Testimonials</a>
          <a href="#" className="block py-2 pl-4 text-gray-600 hover:text-blue-600">Clientele</a>
        </div>
        {/* CONTACT US */}
        <a href="#" className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold">CONTACT US</a>
      </div>
    )}
  </div>
</header>
  )
}

export default Header