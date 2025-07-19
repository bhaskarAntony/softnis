import React, { useState, useEffect } from 'react';
import { ChevronDown, Database, Search, BarChart3, CheckCircle, ArrowRight, Shield, Zap, Target, Users, Activity, FileText, Layers, TrendingUp, Sparkles, Grid3X3, ArrowDownRight, BookOpen, Award, Globe, Code, Eye, Filter, ArrowUpRight } from 'lucide-react';

const HealthcareDataEnrichment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('standard');
  const [hoveredAttribute, setHoveredAttribute] = useState(null);
  const [hoveredValuePair, setHoveredValuePair] = useState(null);
  const [hoveredStandard, setHoveredStandard] = useState(null);
  const [activeClassificationTab, setActiveClassificationTab] = useState('gmdn');
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const standards = [
    { name: "GMDN", color: "bg-blue-500" },
    { name: "ECLASS", color: "bg-emerald-500" },
    { name: "UNSPSC", color: "bg-purple-500" },
    { name: "CPV", color: "bg-orange-500" }
  ];

  const coreServices = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Products Catalog Data Enrichment",
      description: "Our Data Enrichment practice follows the methodology of Product Sourcing, Product Classification to Standard/Custom Taxonomy, Taxonomy Development, Specification Attributes (Schema) Development, Values Gathering, Applications, Features and its Benefits Listing, MSDS (Material Safety Data Sheet) / Technical Data Sheets / Installation Sheets, Description Generation (Unique and Standard) and Image Capturing / Formatting / Resizing."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Product Sourcing",
      description: "Products will be sourced by researching Manufacturer's /Supplier's websites/indexes/catalogues to identify the product and its characteristics. The product will be sourced as per the hierarchy captured below."
    }
  ];

  const sourcingSteps = [
    {
      title: "Manufacturer's Website/Catalogues",
      description: "As a first step we source or corroborate the product information from the manufacturer's website to ensure precise and authenticated results."
    },
    {
      title: "Supplier's Website/Catalogues",
      description: "Just in case product information is not present on the manufacturer's website, and relevant details are not made available, then the next logical step is to source the product information online through related suppliers' or distributors' websites."
    },
    {
      title: "Not Found",
      description: "When product listing or product details are absolutely not found online or/ and there is no relevant information that can be sourced online even after an exhaustive search, we will conclude that the product is 'Not Found'."
    }
  ];

  const attributeCategories = [
    { name: "Application", width: "w-1/4" },
    { name: "Generic Name", width: "w-1/4" },
    { name: "Dosage Form", width: "w-1/4" },
    { name: "Strength", width: "w-1/4" },
    { name: "Color", width: "w-1/4" },
    { name: "Flavor", width: "w-1/4" },
    { name: "Type", width: "w-1/4" },
    { name: "Active Ingredient", width: "w-1/4" },
    { name: "Antibiotic Class", width: "w-1/4" },
    { name: "Target Entity", width: "w-1/4" },
    { name: "Age Group", width: "w-1/4" },
    { name: "Container Type", width: "w-1/4" },
    { name: "Generic Drug Code", width: "w-1/4" },
    { name: "NDC Number", width: "w-1/4" },
    { name: "Storage", width: "w-1/4" },
    { name: "Recommended Dosage", width: "w-1/4" },
    { name: "Administration", width: "w-1/4" },
    { name: "Side Effects", width: "w-1/4" },
    { name: "Drug Interaction", width: "w-1/4" },
    { name: "Handling", width: "w-1/4" },
    { name: "Shelf Life", width: "w-1/2" },
    { name: "Certifications/Compliance", width: "w-1/2" }
  ];

  const attributeValuePairs = [
    { attribute: "Application", value: "Treatment of Bacterial Infections" },
    { attribute: "Generic Name", value: "Amoxicillin" },
    { attribute: "Dosage Form", value: "Powder For Oral Suspension" },
    { attribute: "Strength", value: "125 mg/5 ml" },
    { attribute: "Active Ingredient", value: "Amoxicillin Trihydrate" },
    { attribute: "Antibiotic Class", value: "Beta-Lactam, Penicillin" },
    { attribute: "Age Group", value: "Pediatric" },
    { attribute: "Container Type", value: "Bottle" },
    { attribute: "Recommended Dosage", value: "Child Up to 10 Years 125mg Every 8-12 Hours" },
    { attribute: "Administration", value: "Oral, Otic" },
    { attribute: "Side Effects", value: "Adverse: [Diarrhoea, Nausea, Rash, Urticar..." },
    { attribute: "Drug Interaction", value: "Allopurinol, Contraceptives Oral.." },
    { attribute: "Handling", value: "Transport between +15 Deg C to +25 Deg C" },
    { attribute: "Shelf Life", value: "36 Months" }
  ];

  const classificationStandards = [
    {
      name: "GMDN",
      fullName: "Global Medical Device Nomenclature",
      description: "The standard for naming and grouping medical devices. The main purpose of the GMDN is to provide health authorities and regulators, health care providers, manufacturers and others with a naming system that can be used to exchange medical device information and support patient safety.",
      details: "GMDN is 5 digit numeric code cross-referenced to a precisely defined Term Name and Definition. Examples:",
      color: "from-blue-500 to-blue-600",
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: "ECLASS",
      fullName: "eCl@ss Classification System",
      description: "International standard for the classification and description of products and services. Widely used in e-commerce and procurement systems.",
      color: "from-emerald-500 to-emerald-600",
      icon: <Grid3X3 className="w-6 h-6" />
    },
    {
      name: "UNSPSC",
      fullName: "United Nations Standard Products and Services Code",
      description: "Global classification system for products and services used in e-commerce and procurement applications.",
      color: "from-purple-500 to-purple-600",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "CPV",
      fullName: "Common Procurement Vocabulary",
      description: "European Union's classification system for public procurement, providing a single classification system for public procurement.",
      color: "from-orange-500 to-orange-600",
      icon: <Code className="w-6 h-6" />
    }
  ];

  // Classification data from the images
  const gmdnData = [
    { productSource: "MSF-33-71-27--", number: "esurfobi27c", description: "forcep-Bone-cutting-liston-stille-dbl-act.-27cm", gmdnCode: "46688", gmdnDescription: "Bone cutting forceps" },
    { productSource: "MSF-ESUDFOME16C", number: "332-20-20", description: "forceps, Meriam, 16 cm, double bent, serrated", gmdnCode: "31814", gmdnDescription: "Dental dressing forceps, reusable" },
    { productSource: "MSF-ESUDFODE17", number: "300-01-70", description: "Forceps, Dental, n°17, upper right molars", gmdnCode: "35552", gmdnDescription: "Tooth extraction forceps" },
    { productSource: "MSF-SCTDTUGF06-", number: "sctdtugf06", description: "nasogastric-tube-enfit-tip-s.u.-40-cm-ch06-light", gmdnCode: "14221", gmdnDescription: "Nasogastric feeding tube" },
    { productSource: "MSF--ESURCL8D10C", number: "15-17-10", description: "Clamp, Bulldoq, DeBAKEY, atraumatic100mm", gmdnCode: "62470", gmdnDescription: "Surgical bulldog clamp, reusable" },
    { productSource: "MSF-ESURCUBV10", number: "29-51-53", description: "curette-bone-volkmann-17-cm-10-mm", gmdnCode: "31335", gmdnDescription: "Bone curette" },
    { productSource: "UNICEF", number: "S0366020", description: "syringe-feeding-50ml-luer-tip-ster", gmdnCode: "59040", gmdnDescription: "Oral/enteral syringe, single-use" },
    { productSource: "MSF-SSURSCIS14S1", number: "ssurscis14s1", description: "surgical-scissors-14.5-cm-straight-sharp-blunt", gmdnCode: "58949", gmdnDescription: "General-purpose surgical scissors, single-use" }
  ];

  const eclassData = [
    { manufacturerSupplier: "IVF Hartmann AG Neuhausen", partNumber: "9315744", description: "Varolast Zinkleimbinde 10cmx5m, 1 Stk>", eclassCode: "34-20-01-01", eclassDescription: "Zinc paste bandage" },
    { manufacturerSupplier: "3M (Schweiz) AG Rüschlikon", partNumber: "SR-3", description: "Precise, Einweg-Hautklammerentferner, 1 Stk (10)", eclassCode: "34-33-07-05", eclassDescription: "Skin Staple Remover" },
    { manufacturerSupplier: "Mölnlycke Health Care AG Diet", partNumber: "6863280", description: "MEPITEL 5x7cm 1 Stk (5)>", eclassCode: "34-21-04-10", eclassDescription: "Wound dressing (silver-containing)" },
    { manufacturerSupplier: "B. Braun Medical AG Sempach S", partNumber: "4894111N", description: "StimuplexD Kanüle 25G, 55mm, 1 Stk (25)>", eclassCode: "34-22-03-02", eclassDescription: "Safety cannula (disposable)" },
    { manufacturerSupplier: "Polymed Medical Center Glattb", partNumber: "8687775", description: "ACCU-CHEK AVIVA Teststreifen 1 Stk (50)", eclassCode: "42-01-07-01", eclassDescription: "Glucose (blood test strip)" },
    { manufacturerSupplier: "IVF Hartmann AG Neuhausen", partNumber: "9995811", description: "PAGAVIT Glyc Mundpflegestäbchen 1 Stk (75)>", eclassCode: "34-40-07-04", eclassDescription: "Oral hygiene stick" },
    { manufacturerSupplier: "IVF Hartmann AG Neuhausen", partNumber: "928916", description: "Idealcrepe Binde 4mx6cm, 1 Stk (10)>", eclassCode: "34-20-05-01", eclassDescription: "Crepe bandage" },
    { manufacturerSupplier: "Erbe Swiss AG Winterthur", partNumber: "20193-082", description: "ERBE-Neutralelektrode Nessy-Omega, 1 Stk (50)>", eclassCode: "34-58-01-08", eclassDescription: "Electrode (electrosurgery)" }
  ];

  const unspscData = [
    { productSource: "Arthrex", number: "", description: "Bio Composite Interference Screw 11x35mm", unspscCode: "42321506", unspscDescription: "Bone screws" },
    { productSource: "", number: "00-9981-210-33", description: "Porous Stem 21.0 X 220mm Bow", unspscCode: "42321708", unspscDescription: "Femoral hip stems" },
    { productSource: "", number: "B57861S103F40", description: "Thermistor NTC 10KOhm 1% 2 Pin Radial Bulk", unspscCode: "32121810", unspscDescription: "Thermistor" },
    { productSource: "ABRACON", number: "ABM11-16.000", description: "Crystal", unspscCode: "32111706", unspscDescription: "Crystal oscillators" },
    { productSource: "", number: "MXM-072-19", description: "Mini MaxLock Extreme 1.9mm Drill Bit", unspscCode: "42203402", unspscDescription: "Diagnostic or interventional vascular catheters for general use" },
    { productSource: "三商", number: "15-1655", description: "ワットマン ミニユニ un203apeorg", unspscCode: "41121806", unspscDescription: "Laboratory vials" },
    { productSource: "三商", number: "23-0312", description: "ピアクリーン 213 スプレー式", unspscCode: "46181806", unspscDescription: "Lens cleaner" },
    { productSource: "3M", number: "1448レッド", description: "スコッチプレミアムシザーズ", unspscCode: "44121618", unspscDescription: "Scissors" }
  ];

  const cpvData = [
    { productSource: "MSF-33-71-27--", number: "esurfobi27c", description: "forcep-Bone-cutting-liston-stille-dbl-act.-27cm", cpvCode: "33169000-2", cpvDescription: "Surgical instruments" },
    { productSource: "MSF -ESURCL8D10C", number: "15-17-10", description: "Clamp, Bulldoq, DeBAKEY, atraumatic100mm", cpvCode: "33169000-2", cpvDescription: "Surgical instruments" },
    { productSource: "MSF-ESUDFODE17", number: "300-01-70", description: "Forceps, Dental, n°17, upper right molars", cpvCode: "33131170-9", cpvDescription: "Dental spatulas, tweezers and wax carvers" },
    { productSource: "MSF-SCTDTUGF06-", number: "sctdtugf06", description: "nasogastric-tube-enfit-tip-s.u.-40-cm-ch06-light", cpvCode: "33692300-0", cpvDescription: "Enteral feeds" },
    { productSource: "MSF-ESUDFOME16C", number: "332-20-20", description: "forceps, Meriam, 16 cm, double bent, serrated", cpvCode: "33131170-9", cpvDescription: "Dental spatulas, tweezers and wax carvers" },
    { productSource: "MSF-ESURCUBV10", number: "29-51-53", description: "curette-bone-volkmann-17-cm-10-mm", cpvCode: "33169000-2", cpvDescription: "Surgical instruments" },
    { productSource: "UNICEF", number: "S0366020", description: "syringe-feeding-50ml-luer-tip-ster", cpvCode: "33692300-0", cpvDescription: "Enteral feeds" },
    { productSource: "MSF-SSURSCIS14S1", number: "ssurscis14s1", description: "surgical-scissors-14.5-cm-straight-sharp-blunt", cpvCode: "33169000-2", cpvDescription: "Surgical instruments" }
  ];

  // Statistics data
  const statsData = [
    { number: "20+", label: "Happy Clients" },
    { number: "25M+", label: "Products Classified" },
    { number: "15+", label: "Languages" }
  ];

  // Domains data
  const domainsData = [
    { icon: "🩺", name: "Medical Equipment" },
    { icon: "💊", name: "Pharmaceuticals" },
    { icon: "🧪", name: "Laboratory Products" },
    { icon: "🏥", name: "Clinical Supplies" },
    { icon: "💉", name: "Medical Supplies" }
  ];

  // Testimonials data
  const testimonialsData = [
    {
      company: "Solvoz",
      name: "Robert Simpson",
      position: "Co-founder and CTO",
      location: "Solvoz, Netherlands",
      testimonial: "SoftNis helped us to build an online catalog by providing content for our medical products. The quality content with Taxonomy and Attributes helped us to go live in a short span of time."
    },
    {
      company: "Canada Medical",
      name: "Mark Rodych",
      position: "General Manager",
      location: "Canada Medical Ltd., Canada",
      testimonial: "Hi Yassar, If I remember correctly, you had suggested Softnis as a possible alternative for data enrichment for our new website. I'd like to let you know that we are very happy with the results from Softnis. Indra Kumar (cc'd) was very easy to work with and delivered the quality data enrichment project in a timely manner.Thank you for the suggestion."
    }
  ];

  const getTableData = () => {
    switch (activeClassificationTab) {
      case 'gmdn': return gmdnData;
      case 'eclass': return eclassData;
      case 'unspsc': return unspscData;
      case 'cpv': return cpvData;
      default: return gmdnData;
    }
  };

  const getTableHeaders = () => {
    switch (activeClassificationTab) {
      case 'gmdn': 
        return ['Product Source', 'Number', 'Description', 'GMDN Code', 'GMDN Description'];
      case 'eclass': 
        return ['Manufacturer/Supplier Name', 'Part Number', 'Description', 'ECLASS Code', 'ECLASS Description'];
      case 'unspsc': 
        return ['Product Source', 'Number', 'Description', 'UNSPSC Code', 'UNSPSC Description'];
      case 'cpv': 
        return ['Product Source', 'Number', 'Description', 'CPV Code', 'CPV Description'];
      default: 
        return ['Product Source', 'Number', 'Description', 'GMDN Code', 'GMDN Description'];
    }
  };

  const getRowData = (item) => {
    switch (activeClassificationTab) {
      case 'gmdn': 
        return [item.productSource, item.number, item.description, item.gmdnCode, item.gmdnDescription];
      case 'eclass': 
        return [item.manufacturerSupplier, item.partNumber, item.description, item.eclassCode, item.eclassDescription];
      case 'unspsc': 
        return [item.productSource, item.number, item.description, item.unspscCode, item.unspscDescription];
      case 'cpv': 
        return [item.productSource, item.number, item.description, item.cpvCode, item.cpvDescription];
      default: 
        return [item.productSource, item.number, item.description, item.gmdnCode, item.gmdnDescription];
    }
  };

  const getTabColor = (tab) => {
    switch (tab) {
      case 'gmdn': return 'from-blue-500 to-blue-600';
      case 'eclass': return 'from-emerald-500 to-emerald-600';
      case 'unspsc': return 'from-purple-500 to-purple-600';
      case 'cpv': return 'from-orange-500 to-orange-600';
      default: return 'from-blue-500 to-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-indigo-900/5 to-purple-900/10"></div>
        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-8">
              {standards.map((standard, index) => (
                <div key={standard.name} className={`${standard.color} text-white px-4 py-2 rounded-full text-sm font-semibold transform transition-all duration-500 hover:scale-105 ${isVisible ? 'animate-pulse' : ''}`} style={{ animationDelay: `${index * 200}ms` }}>
                  {standard.name}
                </div>
              ))}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Healthcare Products
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Catalog Data Enrichment
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Professional classification services for GMDN, ECLASS, UNSPSC, and CPV standards
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border border-gray-300 hover:border-gray-400 transition-all duration-300 hover:bg-white hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-500 hover:shadow-3xl">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">About SoftNis</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            SoftNis has over 10 years of robust experience in providing Healthcare Products Catalog Data Enrichment and Classification Services. 
            We strongly believe that Catalog Data Enrichment is a value-adding process to provide more information of the product to the customer 
            while enhancing the quality and richness of the product data.
          </p>
        </div>
      </div>

      {/* Core Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Our Core Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coreServices.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 w-fit">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Sourcing Details */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Product Sourcing Methodology</h3>
            <p className="text-lg text-gray-600 mb-8">
              Products will be sourced by researching Manufacturer's /Supplier's websites/indexes/catalogues to identify the product and its characteristics. 
              The product will be sourced as per the hierarchy captured below:
            </p>
            <div className="space-y-6">
              {sourcingSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Taxonomy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">Taxonomy Development</h2>
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
          Choose between standard taxonomies or custom solutions tailored to your specific product range and requirements.
        </p>
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('standard')}
              className={`flex-1 py-6 px-8 text-lg font-semibold transition-all duration-300 ${
                activeTab === 'standard' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Standard Taxonomy
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`flex-1 py-6 px-8 text-lg font-semibold transition-all duration-300 ${
                activeTab === 'custom' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Custom Taxonomy
            </button>
          </div>
          
          <div className="p-8 md:p-12">
            {activeTab === 'standard' ? (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard Taxonomy</h3>
                <p className="text-gray-600 mb-6">
                  The standard taxonomies are too generic and are developed basically to cover most of the verticals or most of the products in a vertical. 
                  Following few standard taxonomies are predominantly used in the Healthcare sector: ECLASS, GMDN, CPV, UNSPSC, WHO and more.
                </p>
                <div className="flex flex-wrap gap-3">
                  {standards.map((standard) => (
                    <div key={standard.name} className={`${standard.color} text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer`}>
                      {standard.name}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Taxonomy</h3>
                <p className="text-gray-600 mb-6">
                  Custom taxonomy is tailored and focused entirely on the customer's range of products. Accordingly the product classification breakup 
                  is defined in a comprehensive and detailed manner and the hierarchy is suitably followed.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-gray-900">Tailored specifically for your product range</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Input Product Data Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Input Product Data</h2>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sample Input Data</h3>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-700 border-r border-gray-200">Product Source</td>
                        <td className="px-6 py-4 text-gray-900">UNICEF</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-700 border-r border-gray-200">Reference</td>
                        <td className="px-6 py-4 text-gray-900">S1505046</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-700 border-r border-gray-200">Name</td>
                        <td className="px-6 py-4 text-gray-900">Amoxici.pdr/oral sus 125mg/5ml/BOT-100ml</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Classification Hierarchy</h3>
                <div className="space-y-3">
                  <div className="bg-blue-600 text-white p-4 rounded-xl font-semibold text-center">
                    Pharmaceuticals
                  </div>
                  <div className="flex items-center justify-center">
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="bg-blue-500 text-white p-3 rounded-xl font-semibold text-center">
                    Anti-infective
                  </div>
                  <div className="flex items-center justify-center">
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="bg-blue-400 text-white p-3 rounded-xl font-semibold text-center">
                    Antibiotics
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-4 text-sm">Illustration of Custom Taxonomy for Antibiotics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Standard Healthcare Products Dictionary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-full">
              <Grid3X3 className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SoftNis's Standard Healthcare Products Dictionary
            <span className="block text-2xl md:text-3xl text-blue-600 mt-2">(Attributes Set)</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed">
            Currently SoftNis has more than 1,000 unique products attribute set in the dictionary. Each Product set is having minimum of 15 attributes and maximum of 52 attributes with Data types, Descriptions, Sample values, Unit of Measures and Priority Order. As per each client's requirement, the attribute set can be modified and/or rearranged.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8">
            <div className="flex items-center justify-center space-x-3">
              <Sparkles className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-bold text-white text-center">
                Pharmaceuticals/Anti-infectives/Antibiotics
              </h3>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {attributeCategories.map((attr, index) => (
                <div 
                  key={index} 
                  className={`group relative bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-xl font-semibold text-center text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer ${
                    attr.name === "Shelf Life" || attr.name === "Certifications/Compliance" ? "sm:col-span-2" : ""
                  }`}
                  onMouseEnter={() => setHoveredAttribute(index)}
                  onMouseLeave={() => setHoveredAttribute(null)}
                >
                  <div className="relative z-10">
                    {attr.name}
                  </div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl transition-opacity duration-300 ${
                    hoveredAttribute === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  <div className={`absolute inset-0 rounded-xl border-2 border-white/30 transition-all duration-300 ${
                    hoveredAttribute === index ? 'scale-110 border-white/60' : 'scale-100'
                  }`}></div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full">
                <Target className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800 font-medium">Illustration of Attribute set for Antibiotics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attribute Value Capture Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-emerald-100 to-blue-100 p-4 rounded-full">
                <Database className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Attribute Value Capture</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Complete specification of the product is captured as per the Attribute set from the manufacturer's / supplier's website or catalogue.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-6">
              <div className="flex items-center justify-center space-x-3">
                <ArrowDownRight className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white text-center">
                  Pharmaceuticals/Anti-infectives/Antibiotics
                </h3>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {attributeValuePairs.map((pair, index) => (
                  <div 
                    key={index}
                    className="group flex rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    onMouseEnter={() => setHoveredValuePair(index)}
                    onMouseLeave={() => setHoveredValuePair(null)}
                  >
                    <div className={`flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 flex items-center justify-center text-center font-semibold text-sm transition-all duration-300 ${
                      hoveredValuePair === index ? 'from-blue-600 to-indigo-600' : ''
                    }`}>
                      <span>{pair.attribute}</span>
                    </div>
                    
                    <div className={`flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white p-4 flex items-center justify-center text-center font-semibold text-sm transition-all duration-300 ${
                      hoveredValuePair === index ? 'from-red-600 to-pink-600' : ''
                    }`}>
                      <span>{pair.value}</span>
                    </div>
                    
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className={`w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                        hoveredValuePair === index ? 'scale-110 shadow-xl' : ''
                      }`}>
                        <ArrowRight className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 bg-emerald-50 px-6 py-3 rounded-full">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-800 font-medium">Complete Product Specification Captured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Descriptions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-full">
              <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Descriptions</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The unique descriptions are generated with a combination of Product Name, Attributes Name and Values. Long Descriptions are non-abbreviated and length of the description varies depending on the attribute values. To keep the descriptions distinct, only those attributes which perfectly identify the products are used.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
            <div className="flex items-center justify-center space-x-3">
              <FileText className="w-6 h-6 text-white" />
              <h3 className="text-xl font-bold text-white text-center">
                Long Description Example
              </h3>
            </div>
          </div>

          <div className="p-8">
            <div className="flex rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 flex items-center justify-center font-semibold text-lg min-w-[200px]">
                Description
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 flex items-center justify-center font-semibold text-sm flex-1">
                Amoxicillin, Treatment of Bacterial Infections, Powder For Oral Suspension, 125 mg/5 ml, Beta-Lactam, Penicillin, Pediatric, Bottle, Oral, Otic Administration, 36 Months
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 bg-purple-50 px-6 py-3 rounded-full">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-purple-800 font-medium">Illustration of Long Description for Antibiotics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Classification Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-full">
                <Layers className="w-8 h-8 text-indigo-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Product Classification (GMDN, ECLASS, UNSPSC, and CPV)
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We have been working on the Healthcare Products classification and taxonomy method for many years now. We have enhanced our knowledge and adapted to many different facets and aspects of the Product classification over the years. Our team members are trained and specialized similarly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {classificationStandards.map((standard, index) => (
              <div 
                key={standard.name}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredStandard(standard.name)}
                onMouseLeave={() => setHoveredStandard(null)}
              >
                <div className={`bg-gradient-to-r ${standard.color} p-4 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 w-fit`}>
                  {standard.icon}
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{standard.name}</h3>
                  <h4 className="text-lg font-semibold text-gray-600 mb-4">{standard.fullName}</h4>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">{standard.description}</p>
                
                <div className={`mt-6 h-1 bg-gradient-to-r ${standard.color} rounded-full transition-all duration-300 ${
                  hoveredStandard === standard.name ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-wrap border-b bg-gray-50">
              {['gmdn', 'eclass', 'unspsc', 'cpv'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveClassificationTab(tab)}
                  className={`flex-1 min-w-[120px] py-4 px-6 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                    activeClassificationTab === tab
                      ? `bg-gradient-to-r ${getTabColor(tab)} text-white shadow-lg transform scale-105`
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {tab === 'gmdn' && <Globe className="w-4 h-4" />}
                    {tab === 'eclass' && <Grid3X3 className="w-4 h-4" />}
                    {tab === 'unspsc' && <Award className="w-4 h-4" />}
                    {tab === 'cpv' && <Code className="w-4 h-4" />}
                    <span>{tab}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className={`bg-gradient-to-r ${getTabColor(activeClassificationTab)} p-6`}>
              <div className="flex items-center justify-center space-x-3">
                <Eye className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white text-center">
                  Sample Product Classification by {activeClassificationTab.toUpperCase()}
                </h3>
                <Filter className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    {getTableHeaders().map((header, index) => (
                      <th key={index} className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {getTableData().map((item, index) => (
                    <tr 
                      key={index}
                      className={`transition-all duration-300 hover:bg-gradient-to-r hover:${getTabColor(activeClassificationTab).replace('to-', 'to-').replace('from-', 'from-').replace('-500', '-50').replace('-600', '-100')} cursor-pointer transform hover:scale-[1.02] ${
                        hoveredRow === index ? 'shadow-lg' : ''
                      }`}
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                    >
                      {getRowData(item).map((cellData, cellIndex) => (
                        <td key={cellIndex} className={`px-6 py-4 text-sm transition-all duration-300 ${
                          hoveredRow === index ? 'text-gray-900 font-medium' : 'text-gray-600'
                        }`}>
                          <div className="flex items-center space-x-2">
                            {cellIndex === getRowData(item).length - 2 && (
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getTabColor(activeClassificationTab)} animate-pulse`}></div>
                            )}
                            <span className={cellIndex === getRowData(item).length - 2 ? 'font-bold' : ''}>
                              {cellData}
                            </span>
                            {cellIndex === getRowData(item).length - 1 && hoveredRow === index && (
                              <ArrowUpRight className="w-4 h-4 text-blue-500 animate-bounce" />
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-6 border-t">
              <div className="flex items-center justify-center space-x-4">
                <div className={`flex items-center space-x-2 bg-gradient-to-r ${getTabColor(activeClassificationTab)} px-4 py-2 rounded-full`}>
                  <Database className="w-4 h-4 text-white" />
                  <span className="text-white font-medium text-sm">
                    {getTableData().length} Sample Classifications
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-600 font-medium text-sm">
                    Professional Standards
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-slate-800 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">GET TO</h2>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8">
                Know Us!
              </h3>
              <div className="space-y-6">
                <div className="text-white">
                  <h4 className="text-2xl font-bold text-blue-400 mb-4">Multilingual Support</h4>
                  <p className="text-lg leading-relaxed">
                    With the help of in-house built data translation tools together with dependable 
                    translation tools available on search engines, we have worked on more than 15 
                    foreign languages.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {statsData.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 mb-4 transform hover:scale-105 transition-all duration-300">
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-white font-semibold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-3xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Download a</h3>
                <h4 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                  Sample Data
                </h4>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h5 className="text-lg font-bold text-blue-600 mb-2">Sample Data</h5>
                <p className="text-gray-700 mb-4">
                  Healthcare Products Catalog Data Enrichment and Classification Services 
                  (GMDN, eCl@ss, UNSPSC, and CPV)
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multiple Domains Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Multiple <span className="text-blue-600">Domains and Verticals</span>
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            Our experience in Product Classification and Taxonomy spans across many different types in the Healthcare domains. 
            Principal among those include Pharmaceuticals, Medical Equipments, Medical Supplies, Clinical and Laboratory products.
          </p>
          
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-8">
            {domainsData.map((domain, index) => (
              <div key={index} className="group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-3xl">{domain.icon}</span>
                </div>
                <p className="text-center mt-4 font-semibold text-gray-700">{domain.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proof of Concept Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Proof of Concept (PoC) - <span className="text-blue-600">No Cost, No Obligation</span>
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-8">
            We are pleased to work on your data samples as proof of concept that comes with no strings attached. 
            Send us your data samples at <a href="mailto:sales@softnis.com" className="text-blue-600 hover:underline font-semibold">sales@softnis.com</a> for POC.
          </p>
          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Request Free POC
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            What Our <span className="text-blue-600">Clients Say!</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.company.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
    

      {/* Footer */}
     
    </div>
  );
};

export default HealthcareDataEnrichment;