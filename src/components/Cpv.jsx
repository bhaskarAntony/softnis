import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Database, 
  Shield, 
  Target, 
  Zap, 
  FileText, 
  CheckCircle, 
  ArrowRight,
  Code,
  Search,
  Users,
  BarChart3
} from 'lucide-react';

function Cpv() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Search,
      title: "Product Sourcing",
      description: "Products are sourced from respective Manufacturer's/Supplier's website or catalogues, to make sure that products are identified appropriately. The objective of sourcing is to ensure that the product identification and subsequent classification process is carried out suitably.",
      color: "bg-blue-500"
    },
    {
      icon: Zap,
      title: "Version Upgrade",
      description: "CPV classification system is ever-changing. While newer versions are frequently introduced by the governing body, in the course of the project undertaking, just in case any newer versions or upgrades to the existing versions are introduced, we ensure to extend our support for the same.",
      color: "bg-green-500"
    },
    {
      icon: Target,
      title: "Better Accuracy",
      description: "Our customized approach has conformed to the best-suited classification processes uniquely for every customer's requisites, data and product types individually with consistency and accuracy in data.",
      color: "bg-purple-500"
    },
    {
      icon: Database,
      title: "Tools",
      description: "In order to aid, streamline and improve our classification process, we have developed and adapted a couple of in-house auto classification tools to simplify the process of classification.",
      color: "bg-orange-500"
    },
    {
      icon: BarChart3,
      title: "Commodity Level Classification",
      description: "By in-depth understanding of the product type / class and by referring sourced data and input description, we ensure that the product is classified as per its exactly available category.",
      color: "bg-red-500"
    },
    {
      icon: Shield,
      title: "Data Confidentiality",
      description: "We adhere to, and have incorporated the latest data security measures and policies. We vouch for a fact that our client's data is safe and secure with us.",
      color: "bg-indigo-500"
    }
  ];

  const cpvStructure = [
    { label: "The first two digits identify the divisions", code: "(XX000000-0)", color: "bg-blue-600" },
    { label: "The first three digits identify the groups", code: "(XXX00000-0)", color: "bg-blue-500" },
    { label: "The first four digits identify the classes", code: "(XXXX0000-0)", color: "bg-blue-400" },
    { label: "The first five digits identify the categories", code: "(XXXXX000-0)", color: "bg-red-500" },
    { label: "The last three digits gives a greater degree of precision", code: "(XX000000-0)", color: "bg-red-600" },
    { label: "A ninth digit serves to verify the previous digits", code: "(XXXXXXXX-Y)", color: "bg-red-700" }
  ];

  const sampleData = [
    {
      source: "MSF-33-71-27--",
      number: "esurfobi27c",
      description: "forcep-Bone-cutting-liston-stile-dbl-act.-27cm",
      gmdn: "33169000-2",
      gmdn_desc: "Surgical instruments"
    },
    {
      source: "MSF -ESURCLBD10C",
      number: "15-17-10",
      description: "Clamp, Bulldoq, DeBAKEY, atraumatic100mm",
      gmdn: "33169000-2",
      gmdn_desc: "Surgical instruments"
    },
    {
      source: "MSF-ESUDFODE17",
      number: "300-01-70",
      description: "Forceps, Dental, n°17, upper right molars",
      gmdn: "33131170-9",
      gmdn_desc: "Dental spatulas, tweezers and wax carvers"
    },
    {
      source: "MSF-SCTDTUGF06-",
      number: "sctdtugf06",
      description: "nasogastric-tube-entit-tip-s.u.-40-cm-ch06-light",
      gmdn: "33692300-0",
      gmdn_desc: "Enteral feeds"
    },
    {
      source: "MSF-ESUDFOME16C",
      number: "332-20-20",
      description: "forceps, Meriam, 16 cm, double bent, serrated",
      gmdn: "33131170-9",
      gmdn_desc: "Dental spatulas, tweezers and wax carvers"
    },
    {
      source: "MSF-ESURCUBV10",
      number: "29-51-53",
      description: "curette-bone-volkmann-17-cm-10-mm",
      gmdn: "33169000-2",
      gmdn_desc: "Surgical instruments"
    },
    {
      source: "UNICEF",
      number: "S0366020",
      description: "syringe-feeding-50ml-luer-tip-ster",
      gmdn: "33692300-0",
      gmdn_desc: "Enteral feeds"
    },
    {
      source: "MSF-SSURSCIS14S1",
      number: "ssurscis14s1",
      description: "surgical-scissors-14.5-cm-straight-sharp-blunt",
      gmdn: "33169000-2",
      gmdn_desc: "Surgical instruments"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 text-blue-200 text-sm font-medium mb-8 backdrop-blur-sm border border-blue-400/30">
              <Code className="w-4 h-4 mr-2" />
              Professional Classification System
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Common Procurement Vocabulary
              <span className="block text-blue-300 text-3xl md:text-4xl lg:text-5xl mt-2">
                (CPV) Codification
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Establishing a single classification system for public procurement aimed at standardizing 
              the references used by contracting authorities and entities to describe procurement contracts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                Explore CPV System
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30">
                Learn More
                <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Consolidated CPV Coding Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highlighted features of our comprehensive classification approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  isVisible['features'] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* About CPV Section */}
      <div id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`${isVisible['about'] ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-blue-300">CPV</span>
              </h2>
              
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                The CPV consists of a primary vocabulary to define the subject of a contract, and a 
                supplementary vocabulary to add further qualitative information. The primary vocabulary 
                is based on a tree structure comprising codes of up to 9 digits (an 8 digit code plus 
                a check digit) associated with a wording that describes the type of supplies, works or 
                services forming the subject of the contract.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-200">The benefits of using the CPV</h3>
                <div className="space-y-3">
                  {[
                    "Wider scope and visibility of spend analysis in an organization",
                    "Identification of relevant suppliers for specific product or services",
                    "CPV allows classification of similar products and services under one category"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${isVisible['about'] ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">CPV Code Structure</h3>
                
                <div className="space-y-4">
                  {cpvStructure.map((item, index) => (
                    <div
                      key={index}
                      className="group hover:bg-white/10 rounded-xl p-4 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-sm text-blue-200 mb-1">{item.label}</p>
                        </div>
                        <div className={`${item.color} text-white px-4 py-2 rounded-lg font-mono text-sm group-hover:scale-105 transition-transform`}>
                          {item.code}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sample Data Table */}
      <div id="sample" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sample Product Classification by CPV
          </h2>
          <p className="text-xl text-gray-600">
            Real-world examples of our classification system in action
          </p>
        </div>

        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 ${
          isVisible['sample'] ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Product Source</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Number</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Description</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">GMDN Code</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">GMDN Description</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-blue-50 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-mono text-blue-600 font-medium">
                      {row.source}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-gray-900">
                      {row.number}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 max-w-xs">
                      <div className="truncate" title={row.description}>
                        {row.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-red-600 font-medium">
                      {row.gmdn}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {row.gmdn_desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Procurement Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with our professional CPV classification services and experience 
            the benefits of standardized procurement vocabulary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
            <button className="bg-blue-700/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700/70 transition-all duration-300 backdrop-blur-sm border border-white/20">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>

    
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}

export default Cpv;