import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Shield, 
  Zap, 
  Target, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Star,
  Quote,
  Award,
  Globe,
  Users,
  TrendingUp,
  Database,
  Search,
  Settings,
  Mail,
  Menu,
  X,
  Building,
  Layers
} from 'lucide-react';

function Unsp() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      icon: Search,
      title: "Product Sourcing",
      description: "Products are sourced from respective Manufacturer's/Supplier's website or catalogues, to make sure that products are identified appropriately. The objective of sourcing is to ensure that the product identification and subsequent classification process is carried out suitably.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: TrendingUp,
      title: "Version upgrade",
      description: "UNSPSC classification system is ever-changing. While newer versions are frequently introduced by the governing body, in the course of the project undertaking, just in case any newer versions or upgrades to the existing versions are introduced, we ensure to extend our support for the same.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: Target,
      title: "Better Accuracy",
      description: "Our customized approach has conformed to the best-suited classification processes uniquely for every customer requisites, data and product types individually with consistency and accuracy in data.",
      color: "from-green-500 to-teal-400"
    },
    {
      icon: Settings,
      title: "Tools",
      description: "In order to aid, streamline and improve our classification process, we have developed and adapted a couple of in-house auto classification tools to simplify the process of classification.",
      color: "from-orange-500 to-red-400"
    },
    {
      icon: Layers,
      title: "Commodity Level Classification",
      description: "By in-depth understanding of the product type / class and by referring sourced data and input description, we ensure that the product is classified as per its exactly available category at the Commodity level.",
      color: "from-indigo-500 to-blue-400"
    },
    {
      icon: Shield,
      title: "Data Confidentiality",
      description: "We adhere to, and have incorporated the latest data security measures and policies. We vouch for a fact that our client's data is safe and secure with us.",
      color: "from-cyan-500 to-blue-400"
    }
  ];

  const caseStudies = [
    {
      title: "UNSPSC Non-English Data Classification Challenges and Overcomes",
      icon: FileText,
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "UNSPSC Product Classification at Commodity Level",
      icon: Database,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const testimonials = [
    {
      company: "COMPNOVA",
      logo: "COMPNOVA",
      name: "Hanumesh Srinivas",
      position: "Vice President",
      location: "Compnova, Texas, USA",
      quote: "SoftNis has incorporated the UNSPSC way of classification and classified over a million products for us up until now. More importantly, they delivered it within the stipulated time and more than 80% of the products were classified at the commodity level and they achieved almost 95% accuracy! I would definitely recommend SoftNis to any organization who is looking for UNSPSC way of classification."
    },
    {
      company: "hippomini",
      logo: "hippomini",
      name: "Mathias Pedersen",
      position: "Solution Architect",
      location: "Hippomini, Denmark",
      quote: "We were in search of UNSPSC service providers to classify our products to upload it to the TrueTrade platform. As the TrueTrade platform accepts only UNSPSC codes at the Commodity level, SoftNis helped us classify all our products well in time and with good quality. Most importantly they understood our products, type, and application and classified all our products to the Commodity level."
    }
  ];

  const unspscLevels = [
    { level: "Segment", description: "Logical aggregation of families for analytical purposes", color: "bg-blue-500" },
    { level: "Family", description: "Commonly recognized group of inter-related commodity categories", color: "bg-red-500" },
    { level: "Class", description: "Stands for a group of commodities sharing a common use or functional element", color: "bg-blue-500" },
    { level: "Commodity", description: "defines a group of substitutable products and services", color: "bg-red-500" },
    { level: "Business Function", description: "represents a function performed by an organization in support of the concerned commodity", color: "bg-blue-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
     

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800/20 to-slate-800/40"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`flex items-center justify-between transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  United Nations Standard Products and Services Code{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    (UNSPSC)
                  </span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  (English / Non-English Data)
                </p>
              </div>
              
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="w-32 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">UNSPSC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-lg text-blue-600 mb-4 font-medium">
              We have been working on the UNSPSC-determined classification and taxonomy method for many years now. We have enhanced our knowledge and adapted to many different facets and aspects of the UNSPSC-way of classification over the years. Our team members are trained and specialized similarly.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Our consolidated UNSPSC Experience has been highlighted in the following salient points
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100 ${
                  activeCard === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${experience.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <experience.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-blue-600 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {experience.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {experience.description}
                </p>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-blue-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Download a{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Case Study
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${study.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <study.icon className="w-full h-full text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      UNSPSC
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      {study.title}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Download className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" size={24} />
                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                      <FileText className="text-white" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of Concept Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
            Proof of Concept (PoC) - No Cost, No Obligation
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100">
            <p className="text-lg text-slate-700 leading-relaxed">
              We are pleased to work on your data samples as proof of concept that comes with no strings attached. Send us your data samples at{' '}
              <a href="mailto:sales@softnis.com" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300">
                sales@softnis.com
              </a>{' '}
              for POC.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              What Our Clients Say!
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Building className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">{testimonial.company}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-slate-600 font-medium">{testimonial.name}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500">{testimonial.position}</span>
                    </div>
                    <p className="text-sm text-slate-400 mt-1">{testimonial.location}</p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-blue-200" size={32} />
                  <p className="text-slate-600 leading-relaxed pl-6 italic">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="flex items-center gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About UNSPSC Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-8">
                About UNSPSC
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  UNSPSC is a leading global standard, universally accepted in classifying products and services to provide wider visibility in attaining a concise analysis and management of financial expenses of an organization. The UNSPSC code is designed as an 8 digit number which has 4 levels of UNSPSC Code hierarchy with a scope for addition of 2 more digits in the form of an optional fifth level. Presently, the latest UNSPSC version is 22.0601.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    The benefits of using the UNSPSC
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span className="text-slate-600">Wider Visibility of spend analysis in an organization.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span className="text-slate-600">Identification of relevant suppliers for specific product or services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                      <span className="text-slate-600">Allows listing of similar products and servers under one category.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {unspscLevels.map((level, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className={`w-24 h-12 ${level.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{level.level}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {level.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Ready to Get Started with UNSPSC Classification?
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="text-cyan-400" size={28} />
              <a 
                href="mailto:sales@softnis.com" 
                className="text-2xl text-white hover:text-cyan-300 transition-colors duration-300 font-medium"
              >
                sales@softnis.com
              </a>
            </div>
            
            <p className="text-blue-100 text-lg">
              Contact us today for your UNSPSC classification needs
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 SoftNis UNSPSC Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Unsp;