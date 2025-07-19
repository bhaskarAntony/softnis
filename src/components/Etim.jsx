import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Database, Search, Tag, Settings, FileText, BarChart3, CheckCircle, ArrowRight, Play, Zap } from 'lucide-react';

function Etim() {
  const [activeStep, setActiveStep] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Defining The Communication Standard",
      icon: <Settings className="w-6 h-6" />,
      description: "The first step would be defining the manner in which the data has to be delivered. The choice of the communication standard to be used depends on the customer's ERP/PIM software. Data shall be delivered in any of the following formats:",
      formats: ["ETIM BMEcat", "PAB7", "XML", "Excel /CSV", "Any custom format"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Product Sourcing",
      icon: <Search className="w-6 h-6" />,
      description: "Products are sourced from respective Manufacturer's/Supplier's website or catalogues, to make sure that products are identified appropriately. The objective of sourcing is to ensure that the product identification and subsequent process is carried out suitably.",
      example: {
        product: "RCCBs F202 B-63/0.03",
        url: "https://new.abb.com/products/2CSF202592R1630/f202-b-63-0-03-residual-current-circuit-breaker"
      },
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Product Identification",
      icon: <Tag className="w-6 h-6" />,
      description: "Product is identified by refering the the sourced information and input description.",
      productName: "Residual Current Circuit Breaker",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Assigning ETIM Class (Version 7.1)",
      icon: <Database className="w-6 h-6" />,
      description: "The product is mapped to most appropriate ETIM Group and underneath Class.",
      classification: {
        group: "Circuit breakers and fuses",
        class: "Residual Current Circuit Breaker (RCCB)"
      },
      color: "from-red-500 to-red-600"
    },
    {
      id: 5,
      title: "Defining Product Information",
      icon: <FileText className="w-6 h-6" />,
      description: "In this step, we define attributes that are required to identify the product and further ordering process. The attributes are defined based on the customer's requisite.",
      categories: [
        "Product Information: Part Number, Article Number, GTIN/GLN, EAN, Series, Model, Description and more.",
        "Manufacturer Information: Manufacturer's Name, Brand and Manufactured country and more.",
        "Order information: Minimum Quantity and more.",
        "Price information: Gross price, conversion factor, price unit and more.",
        "Logistics information: Packaging dimensions and weight"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 6,
      title: "Values Gathering as per ETIM Standards",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Values are captured from the sourced website/catalogue as per the CHARACTERISTICS defined in the ETIM Class.",
      note: "Missing Attributes: If any important (Necessary) Properties are missing in the ETIM Dictionary, then it will be added with Custom Codes.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const productInfo = [
    { label: "Manufacturer", value: "ABB" },
    { label: "EAN", value: "8012542629634" },
    { label: "Brand", value: "ABB" },
    { label: "Series", value: "F 200" },
    { label: "Description", value: "Residual Current Circuit Breaker" },
    { label: "Type Code", value: "F202 B-63/0.03" },
    { label: "Order Code", value: "2CSF202592R1630" },
    { label: "Minimum Order Quantity", value: "1 Piece" },
    { label: "Customs Tariff Number", value: "85363030" },
    { label: "E-Number (Sweden)", value: "2160056" },
    { label: "Packaging Quantity", value: "1 Piece" },
    { label: "Package Width", value: "0.073 m" },
    { label: "Package Height", value: "0.078 m" },
    { label: "Package Depth / Length", value: "0.05 m" },
    { label: "Package Gross Weight", value: "0.245 kg" }
  ];

  const attributes = [
    { name: "Number of poles", value: "2", unit: "" },
    { name: "Rated voltage", value: "230", unit: "V" },
    { name: "Rated current", value: "63", unit: "A" },
    { name: "Rated fault current", value: "30", unit: "mA" },
    { name: "Rated insulation voltage Ui", value: "500", unit: "V" },
    { name: "Rated impulse withstand voltage Uimp", value: "4", unit: "kV" },
    { name: "Mounting method", value: "DIN Rail", unit: "" },
    { name: "Leakage current type", value: "B", unit: "" },
    { name: "Selective protection", value: "YES", unit: "" },
    { name: "Short-time delayed tripping", value: "YES", unit: "" },
    { name: "Short-circuit breaking capacity (Icw)", value: "1", unit: "kA" },
    { name: "Surge current capacity", value: "3", unit: "kA" },
    { name: "Frequency", value: "50/60", unit: "Hz" },
    { name: "Additional equipment possible", value: "YES", unit: "" },
    { name: "With interlocking device", value: "< Not Available >", unit: "" },
    { name: "Degree of protection (IP)", value: "IP4X : IP2X", unit: "" },
    { name: "Width in number of modular spacings", value: "35", unit: "Mm" },
    { name: "Built-in depth", value: "69", unit: "Mm" },
    { name: "Ambient temperature during operating", value: "-25 To 60", unit: "°C" },
    { name: "Pollution degree", value: "< Not Available >", unit: "" },
    { name: "Connectable conductor cross section multi-wired", value: "1 To 25", unit: "mm²" },
    { name: "Connectable conductor cross section solid-core", value: "10 X 10", unit: "mm²" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Modern Header */}
      <header className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col justify-center min-h-screen">
          {/* Top Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300">
              <Database className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Professional Classification Solutions</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-white block mb-2">ETIM</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Classification
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                With Properties & Values
              </span>
            </h2>
            <p className="text-xl text-blue-200 mb-4">English / Non-English Data</p>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-blue-100 leading-relaxed">
              The success of business organizations essentially depends on the quality of its product data. We at SoftNis have 
              been working on ETIM Classification with Properties and Values for over years, growing with expertise skills 
              while applying the ETIM hierarchy structure.
            </p>
          </div>

          {/* Action Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Get Started
            </button>
            <button className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div> */}

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            With more than a decade of our experience and knowledge in providing Production Classification and Values Gathering Services as according to Custom and standard taxonomies, we have extended our services to ETIM Classification - The international classification standard for technical products
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Our consolidated ETIM experience has been highlighted in the following salient points</h3>
          </div>
        </div>
      </section>
 {/* Steps */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                activeStep === step.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className={`bg-gradient-to-r ${step.color} p-6`}>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">STEP {step.id}</h3>
                    <h4 className="text-xl text-white/90">{step.title}</h4>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-slate-700 leading-relaxed mb-6">{step.description}</p>
                
                {step.formats && (
                  <div className="space-y-3">
                    {step.formats.map((format, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700">{format}</span>
                      </div>
                    ))}
                  </div>
                )}

                {step.example && (
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h5 className="font-semibold text-green-800 mb-2">Sample Product:</h5>
                    <p className="text-green-700 mb-2">{step.example.product}</p>
                    <p className="text-sm text-green-600">
                      <span className="font-medium">Sourced URL:</span> 
                      <a href={step.example.url} className="hover:underline ml-1 break-all">{step.example.url}</a>
                    </p>
                  </div>
                )}

                {step.productName && (
                  <div className="flex items-center justify-center p-6">
                    <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-3 rounded-lg">
                      <span className="bg-blue-600 px-3 py-1 rounded text-sm">Product Name</span>
                      <ArrowRight className="w-4 h-4" />
                      <span className="bg-red-600 px-3 py-1 rounded text-sm">{step.productName}</span>
                    </div>
                  </div>
                )}

                {step.classification && (
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="text-center">
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 inline-block">
                          {step.classification.group}
                        </div>
                        <div className="flex justify-center">
                          <ArrowRight className="w-6 h-6 text-slate-400" />
                        </div>
                        <div className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 inline-block">
                          {step.classification.class}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step.categories && (
                  <div className="space-y-4">
                    <div className="bg-slate-800 text-white p-4 rounded-lg">
                      <h5 className="text-lg font-semibold text-center">Product Information</h5>
                    </div>
                    <div className="space-y-3">
                      {step.categories.map((category, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                          <p className="text-slate-700">{category}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {step.note && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                    <p className="text-amber-800">
                      <span className="font-semibold">Missing Attributes:</span> {step.note.replace('Missing Attributes: ', '')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Information Tables */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Product Data & Attributes</h2>
          <p className="text-xl text-slate-600">Comprehensive product information and technical specifications</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Information Table */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 transform hover:scale-[1.02] transition-all duration-500">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6">
              <h3 className="text-xl font-bold text-center">Product Information</h3>
            </div>
            <div className="overflow-hidden">
              <div className="max-h-96 overflow-y-auto">
                <table className="w-full">
                  <tbody>
                    {productInfo.map((item, idx) => (
                      <tr key={idx} className={`hover:bg-blue-50 transition-colors duration-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                        <td className="px-6 py-4 text-slate-700 font-semibold border-b border-slate-200">{item.label}</td>
                        <td className="px-6 py-4 text-slate-600 border-b border-slate-200">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Attributes Table */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 transform hover:scale-[1.02] transition-all duration-500">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="font-bold">Attributes</div>
                <div className="font-bold">Values</div>
                <div className="font-bold">UOM</div>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="max-h-96 overflow-y-auto">
                <table className="w-full">
                  <tbody>
                    {attributes.map((attr, idx) => (
                      <tr key={idx} className={`hover:bg-blue-50 transition-colors duration-200 ${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                        <td className="px-4 py-4 text-slate-700 text-sm font-medium border-b border-slate-200">{attr.name}</td>
                        <td className="px-4 py-4 text-slate-600 text-sm text-center border-b border-slate-200 font-medium">{attr.value}</td>
                        <td className="px-4 py-4 text-slate-600 text-sm text-center border-b border-slate-200 font-medium">{attr.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}

export default Etim;