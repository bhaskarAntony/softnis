import React, { useState, useEffect } from 'react';
import { 
  Database, Globe, Shield, Zap, Brain, Package, Settings, TrendingUp, 
  Users, CheckCircle, ArrowRight, Play, Star, Award, Target, Layers,
  BarChart3, FileText, Search, Filter, Download, ChevronRight,
  Factory, Cpu, Heart, Car, Zap as Lightning, Wrench, Mail, Phone
} from 'lucide-react';

function Eclass() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "Competency and know-how",
      description: "Our Subject Matter Experts (SMEs), are well-versed in the ECLASS categorization and classification. They come with wide-ranging experience that was gathered when working on many ECLASS projects that ran on older versions.",
      color: "from-blue-500 to-cyan-500",
      delay: "0"
    },
    {
      icon: CheckCircle,
      title: "Quality and SLAs",
      description: "Quality is our mainstay. We have always ensured maximum accuracy in data as one of our key highlights and qualifies as our strong point. We adhere to all service level agreements.",
      color: "from-green-500 to-emerald-500",
      delay: "200"
    },
    {
      icon: Package,
      title: "Product Sourcing",
      description: "Products are sourced from respective Manufacturer's/Supplier's website or catalogues, to make sure that products are identified appropriately. The objective of sourcing is to ensure that the product identification and subsequent classification process is carried out suitably.",
      color: "from-purple-500 to-pink-500",
      delay: "400"
    },
    {
      icon: TrendingUp,
      title: "Version upgrade",
      description: "As the ECLASS classification system is ever-changing and newer versions are introduced by the governing body. In the course of the project undertaking, if there are any newer versions introduced, or upgrades to the existing versions, we ensure to extend our support for the same.",
      color: "from-orange-500 to-red-500",
      delay: "600"
    },
    {
      icon: Settings,
      title: "Customized process",
      description: "We offer tailored, customized processes that are best-suited and cater to different client requisites and project requirements.",
      color: "from-indigo-500 to-blue-500",
      delay: "800"
    },
    {
      icon: Shield,
      title: "Data Confidentiality",
      description: "We adhere to, and have incorporated the latest data security measures and policies. We vouch for a fact that our client's data is safe and secure with us.",
      color: "from-teal-500 to-green-500",
      delay: "1000"
    }
  ];

  const stats = [
    { number: "5+", label: "Happy Clients", icon: Users },
    { number: "2M+", label: "Products Classified", icon: Package },
    { number: "5+", label: "Languages", icon: Globe },
    { number: "15+", label: "Industry Domains", icon: Factory }
  ];

  const industries = [
    { icon: Factory, name: "Manufacturing", color: "text-blue-500" },
    { icon: Cpu, name: "Electronics", color: "text-green-500" },
    { icon: Heart, name: "Healthcare", color: "text-red-500" },
    { icon: Car, name: "Automotive", color: "text-purple-500" },
    { icon: Lightning, name: "Oil & Gas", color: "text-yellow-500" },
    { icon: Wrench, name: "MRO", color: "text-indigo-500" }
  ];

  const classificationData = [
    { code: "23-00-00-00", category: "Maschinenelement, Befestigungsmittel, Beschlag", level: 1 },
    { code: "23-05-00-00", category: "Wälzlager, Gleitlager, Gelenklager", level: 2 },
    { code: "23-05-08-00", category: "Radial-Kugellager", level: 3 },
    { code: "23-05-08-01", category: "Rillenkugellager", level: 4 }
  ];

  const productData = [
    { id: "Custom", property: "Produktname", value: "Rillenkugellager", unit: "" },
    { id: "AAQ326", property: "zusätzlicher Online-Verweis", value: "https://www.skf.com", unit: "" },
    { id: "AAO676", property: "Herstellerartikelnummer", value: "6004-2ZNR", unit: "" },
    { id: "AAO677", property: "Hersteller-Name", value: "SKF", unit: "" },
    { id: "AAO742", property: "Marke", value: "SKF", unit: "" },
    { id: "AAO736", property: "Lieferantenartikelnummer", value: "70037754", unit: "" },
    { id: "AAF040", property: "Nettogewicht", value: "0.069", unit: "kg" },
    { id: "AAO829", property: "Normnummer", value: "DIN 625", unit: "" },
    { id: "BAA563", property: "Innendurchmesser", value: "20", unit: "mm" },
    { id: "BAB376", property: "Außendurchmesser", value: "42", unit: "mm" },
    { id: "BAF016", property: "Breite", value: "12", unit: "mm" },
    { id: "BAB049", property: "dynamische Tragzahl", value: "9950", unit: "N" },
    { id: "BAB050", property: "statische Tragzahl", value: "5000", unit: "N" },
    { id: "AAH842", property: "max. Drehzahl", value: "38000", unit: "1/min" },
    { id: "BAB864", property: "Werkstoff", value: "Rostfreier Stahl", unit: "" },
    { id: "Custom", property: "Ermüdungsgrenze", value: "2120", unit: "N" },
    { id: "Custom", property: "Zeilentyp", value: "Single", unit: "" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Database className="w-5 h-5 text-blue-300" />
              <span className="text-white/90 font-medium">Professional Classification Solutions</span>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              ECLASS Classification
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                With Properties & Values
              </span>
            </h1>
            
            <p className={`text-xl text-white/80 mb-4 max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              English / Non-English Data
            </p>
            
            <p className={`text-lg text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              The success of business organizations essentially depends on the quality of its product data. 
              We at SoftNis have been working on ECLASS Classification with Properties and Values for over years, 
              growing with expertise skills while applying the ECLASS hierarchy structure.
            </p>

            {/* <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  Get Started
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
              <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </span>
              </button>
            </div> */}

            {/* Floating feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Database, title: "Expert Classification", desc: "Professional ECLASS categorization", delay: "1000" },
                { icon: Shield, title: "Data Security", desc: "Latest security measures & policies", delay: "1200" },
                { icon: Globe, title: "Multilingual", desc: "Support for 15+ languages", delay: "1400" },
                { icon: Zap, title: "Fast Processing", desc: "Efficient classification pipeline", delay: "1600" }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${feature.delay}ms` }}
                >
                  <feature.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">GET TO Know Us!</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{stat.number}</div>
                <div className="text-white/70 font-medium group-hover:text-white/90 transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our consolidated ECLASS Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">has been highlighted in the following salient points</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn more <ArrowRight className="w-5 h-5 ml-2 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Multilingual Section */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 transform rotate-12 scale-150"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Multilingual
                </span> Support
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With the help of in-house built data translation tools together with dependable 
                translation tools available on search engines, we have worked on more than 15 
                foreign languages.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['German', 'French', 'Spanish', 'Italian', 'Portuguese', 'Dutch', 'Russian', 'Chinese'].map((lang, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    WELCOME
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-600">BIENVENIDO</div>
                    <div className="text-gray-600">WILLKOMMEN</div>
                    <div className="text-gray-600">BIENVENUE</div>
                    <div className="text-gray-600">BENVENUTO</div>
                    <div className="text-gray-600">WELKUMIN</div>
                    <div className="text-gray-600">BEM-VINDO</div>
                    <div className="text-gray-600">ДОБРО ПОЖАЛОВАТЬ</div>
                    <div className="text-gray-600">欢迎</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Domains */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Multiple <span className="text-blue-600">Domains</span> and Verticals
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our experience in ECLASS classification and taxonomy spans across many different industry types, 
              domains and verticals. Principal among those include MRO, pharmaceuticals and healthcare, 
              electrical and electronics, oil and gas and automotive sectors.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group relative">
                <div className="w-32 h-32 bg-gradient-to-br from-white to-gray-50 rounded-full shadow-lg border-4 border-gray-100 flex items-center justify-center transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <industry.icon className={`w-12 h-12 ${industry.color} group-hover:scale-125 transition-transform duration-300`} />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{industry.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample Classification */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Sample Product <span className="text-blue-600">Classification</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Classification Hierarchy</h3>
              <div className="space-y-4">
                {classificationData.map((item, index) => (
                  <div key={index} className="group flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {item.level}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="font-bold text-blue-600 mb-1">{item.code}</div>
                      <div className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{item.category}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Product Enhancement Data</h3>
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-bold text-blue-800 mb-2">Specification Properties</h4>
                  <p className="text-gray-600 text-sm">All the product Specification Properties listed under each ECLASS category is considered.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl">
                  <h4 className="font-bold text-green-800 mb-2">Non-Specification Properties</h4>
                  <p className="text-gray-600 text-sm">There are number of Non-Specification properties listed under each category. As per the customer requirement the Non-Specification properties are considered.</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-xl">
                  <h4 className="font-bold text-orange-800 mb-2">Missing Properties</h4>
                  <p className="text-gray-600 text-sm">If any important (Necessary) Properties are missing in the ECLASS category, then it will be added with Custom Codes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Data Table */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Product Data Enhancement as per ECLASS Standards</h3>
            <p className="text-gray-600 mb-6">
              Product Sourced URL: <a href="https://www.skf.com/ca/en/products/bearings-units-housings/ball-bearings/deep-groove-ball-bearings/deep-groove-ball-bearings/index.html?designation=6004-2ZNR" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                https://www.skf.com/ca/en/products/bearings-units-housings/ball-bearings/deep-groove-ball-bearings/deep-groove-ball-bearings/index.html?designation=6004-2ZNR
              </a>
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Merkmal - ID</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Merkmalsbezeichnung_DE</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">WERTE_DE</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">UOM</th>
                  </tr>
                </thead>
                <tbody>
                  {productData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">{row.id}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.property}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.value}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h4 className="text-lg font-bold text-blue-800 mb-3">Key Enhancement Points:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Specification Properties:</strong> All the product Specification Properties listed under each ECLASS category is considered.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Non-Specification Properties:</strong> There are number of Non-Specification properties listed under each category. As per the customer requirement the Non-Specification properties are considered. Example: Herstellername, Herstellerartikelnummer, Herstellerprodukttyp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Missing Properties:</strong> If any important (Necessary) Properties are missing in the ECLASS category, then it will be added with Custom Codes. Example: Material, Fatigue Load Limit, and Row Type are added for "23050801 – Rillenkugellager" ECLASS Version 10.1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Proof of Concept Section */}
      <div className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Proof of Concept (PoC) - <span className="text-green-600">No Cost, No Obligation</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Free Proof of Concept</h3>
                  <p className="text-gray-600">Experience our expertise with no strings attached</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We are pleased to work on your data samples as proof of concept that comes with no strings attached. 
                Send us your data samples at <a href="mailto:sales@softnis.com" className="text-blue-600 hover:underline font-semibold">sales@softnis.com</a> for POC.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">Send Your Data</h4>
                  <p className="text-gray-600 text-sm">Share your product data samples with us</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">We Process</h4>
                  <p className="text-gray-600 text-sm">Our experts classify using ECLASS standards</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">You Evaluate</h4>
                  <p className="text-gray-600 text-sm">Review the quality of our classification work</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span className="flex items-center gap-2">
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    Start Your Free PoC
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Eclass;