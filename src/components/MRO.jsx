import React from 'react';
import { 
  CheckCircle, 
  Shield, 
  Database, 
  BookOpen, 
  Headphones,
  ArrowRight,
  Download,
  Search,
  Users,
  Award,
  TrendingUp,
  FileText,
  Target,
  Settings,
  ArrowDownRight,
  Layers,
  BarChart3,
  Copy,
  AlertTriangle,
  Eye
} from 'lucide-react';

function MRO() {
  const processActivities = [
    { icon: <Search className="w-4 h-4" />, text: "Data Evaluation and PoC" },
    { icon: <Download className="w-4 h-4" />, text: "PDF Download - Safety Data Sheets, MDSD Sheets, More" },
    { icon: <Users className="w-4 h-4" />, text: "Material Sourcing" },
    { icon: <Target className="w-4 h-4" />, text: "Unit of Measure - UoM Standards" },
    { icon: <FileText className="w-4 h-4" />, text: "Identification of right MFR name and Part Numbers" },
    { icon: <TrendingUp className="w-4 h-4" />, text: "Long and Short Description Generation" },
    { icon: <Settings className="w-4 h-4" />, text: "Normalization of MFR's / Vendor's name" },
    { icon: <Award className="w-4 h-4" />, text: "Material De-Duplication" },
    { icon: <BookOpen className="w-4 h-4" />, text: "Noun-Modifier assignment" },
    { icon: <Database className="w-4 h-4" />, text: "Data Classification (UNSPSC / ECLASS / ANY)" },
    { icon: <FileText className="w-4 h-4" />, text: "SoftNis' Noun-Modifier Dictionary" },
    { icon: <Search className="w-4 h-4" />, text: "Unidentified materials for Physical Verification" },
    { icon: <Target className="w-4 h-4" />, text: "Populate Attribute Values" },
    { icon: <Settings className="w-4 h-4" />, text: "Obsolete and alternate part" }
  ];

  const commitmentFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Data Security",
      description: "Latest data security measures and policies to ensure client data is always safe and secure."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Data Quality",
      description: "Process and repositories optimized over the decade to ensure data quality."
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "Noun-Modifier Dictionary",
      description: "Meticulous industry standard dictionary constructed over the decade."
    },
    {
      icon: <Headphones className="w-8 h-8 text-orange-600" />,
      title: "Ongoing Support",
      description: "Support client's ongoing phase even after project completion."
    }
  ];

  const materialsHierarchy = [
    { level: "MANUFACTURER", description: "Source material information from actual Manufacturer's website for authenticated, reliable results." },
    { level: "VENDOR", description: "If not found on Manufacturer's website, source from Vendor's websites." },
    { level: "SUPPLIER", description: "If not found on Manufacturer's or Vendor's website, source from Supplier's websites." },
    { level: "NOT FOUND", description: "When material details are not found after exhaustive search, attribute values are captured from client's input data." }
  ];

  const partNumberStandardization = [
    { legacy: "440LR4K1600YD", standardized: "440L-R4K1600YD" },
    { legacy: "440LT-4K1600YD", standardized: "440L-T4K1600YD" },
    { legacy: "440LT-4K1600YD", standardized: "440L-R4K0320YD" },
    { legacy: "440.LT4K0320YD", standardized: "440L-T4K0320YD" },
    { legacy: "440.LT4K.0640.YD", standardized: "440L-T4K0640YD" }
  ];

  const nounModifierExamples = [
    { legacy: "DODGE BALL INSERT 4 \"# 037645 SCREEN FOR CH5 DEINKING", nounModifier: "BEARING, ROLLER" },
    { legacy: "SHOCK # MA S3325 SA 1/2 x 1 ACE CONTROLS FOR WINDER LINE CHECK", nounModifier: "ABSORBER, SHOCK" },
    { legacy: "435Y89 48x16 SANDING BELT", nounModifier: "ABRASIVE, BELT" }
  ];

  const uomStandards = [
    { type: "ANGLE", uom: "DEGREE", standard: "DEG" },
    { type: "ANGLE", uom: "RADIAN", standard: "RAD" },
    { type: "LOAD", uom: "KILOGRAM", standard: "KG" },
    { type: "AREA SQUARE", uom: "CENTIMETER", standard: "CM2" }
  ];

  const unidentifiedMaterials = [
    { number: "F2_17964", description: "#20301 UNIVERSAL REF" },
    { number: "F2_17955", description: "#213968,two 5309M,MR" },
    { number: "F2_17948", description: "#2154 MULTI-MATERIAL" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 mt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              MRO Data Enrichment, Cleansing, 
              <span className="text-blue-300 block">De-Duplication and Classification</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
              SoftNis has over 10 years of robust experience in providing (Maintenance Repair and Overhaul) MRO Data Enrichment, Cleansing, De-Duplication, and Classification Services.
            </p>
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started Today
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Process Activities Section - Compact */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 ">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Our MRO Data Enhancement Process
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Our MRO Data Enrichment / MRO Data Cleansing process includes the following major activities:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {processActivities.map((activity, index) => (
              <div 
                key={index}
                className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105 hover:shadow-md group"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors duration-300">
                  {activity.icon}
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-gray-800 font-medium text-sm group-hover:text-blue-900 transition-colors duration-300">
                    {activity.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Before and After Section - Compact */}
      <div className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Before and After Data Sample
            </h2>
            <p className="text-base text-gray-600">
              See the transformation from legacy data to enriched, classified material data
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Legacy Data */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <h3 className="text-lg font-bold text-gray-900">LEGACY MATERIAL DATA</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-24">ITEM NUMBER:</span>
                  <span className="text-gray-600">589654127</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-24">DESCRIPTION:</span>
                  <span className="text-gray-600">DPG Dixon, 41D948, 0-500PSIG</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-24">MANUFACTURER:</span>
                  <span className="text-gray-600 italic">Not specified</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-24">VENDOR:</span>
                  <span className="text-gray-600">Grainger</span>
                </div>
              </div>
            </div>

            {/* Cleansed Data */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <h3 className="text-lg font-bold text-gray-900">CLEANSE/ENRICHED & CLASSIFIED MATERIAL DATA</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-32">ITEM NUMBER:</span>
                  <span className="text-gray-600">589654127</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-32">MANUFACTURER:</span>
                  <span className="text-gray-600 font-medium">DIXON</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-32">MFR PART NUMBER:</span>
                  <span className="text-gray-600 font-medium">DPGA-11</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-32">VENDOR:</span>
                  <span className="text-gray-600">GRAINGER</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-32">VENDOR PART NUMBER:</span>
                  <span className="text-gray-600">41D948</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-32">SHORT DESCRIPTION:</span>
                  <span className="text-gray-600">GAUGE-PRSR;0 TO 500 PSIG,2-1/2 IN</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-3 rounded-lg mt-3">
                  <div className="text-xs space-y-1">
                    <p><span className="font-semibold">LONG DESCRIPTION:</span> GAUGE-PRESSURE; MEASURING RANGE:0 TO 500 PSIG, DIAL SIZE:2-1/2 IN, ACCURACY:+/-1.0%, MATERIAL:ABS PLASTIC</p>
                    <p><span className="font-semibold">UNSPSC:</span> 41112412 Pressure gauge</p>
                    <p><span className="font-semibold">ECLASS:</span> 27-20-06-01 Pressure gauge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Commitment Section - Compact */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Our Commitment
            </h2>
            <p className="text-base text-gray-600">
              Delivering excellence through proven expertise and dedication
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {commitmentFeatures.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group border border-gray-100"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Evaluation Section */}
      <div className="py-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
              <Search className="w-6 h-6 mr-3 text-blue-600" />
              Data Evaluation and PoC
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We request our prospecting firm to send us few lines of sample material data for evaluation and processing. During evaluation, we analyze input data in terms of precision, completeness and standardization. A customized process is defined based on initial data analysis.
            </p>
          </div>
        </div>
      </div>

      {/* Material Sourcing Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
              <Users className="w-6 h-6 mr-3 text-blue-600" />
              Material Sourcing
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Materials are sourced from respective Manufacturer's / Vendor's / Supplier's websites or catalogues to identify material and specifications concisely. Materials are sourced as per hierarchy:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {materialsHierarchy.map((item, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors duration-300 hover:shadow-md">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
                      {index + 1}
                    </div>
                    <h4 className="font-bold text-blue-900 text-sm">{item.level}</h4>
                  </div>
                  <p className="text-gray-700 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturer Identification Section */}
      <div className="py-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
              <Target className="w-6 h-6 mr-3 text-blue-600" />
              Identification of right Manufacturer name and Part Numbers
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Many times, Vendor details are tagged as Manufacturer details. We validate and identify exact manufacturer details. Example:
            </p>
            
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-900 mb-2 text-sm">LEGACY MATERIAL DATA</h4>
                <p className="text-xs text-red-800">3VX71, Grainger, 24x1/2 Belt</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-2 text-sm">CLEANSE/ENRICHED & CLASSIFIED MATERIAL DATA</h4>
                <div className="text-xs text-green-800 space-y-1">
                  <p><strong>MANUFACTURER:</strong> NORTON</p>
                  <p><strong>MFR PART NUMBER:</strong> 78072728564</p>
                  <p><strong>VENDOR:</strong> GRAINGER</p>
                  <p><strong>VENDOR PART NUMBER:</strong> 3VX71</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Normalization Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
              <Settings className="w-6 h-6 mr-3 text-blue-600" />
              Normalization of Manufacturer and Vendor Names
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Manufacturer and Vendor names are standardized as per legal name. Part numbers are validated and standardized. Example: The following names are standardized to Allen-Bradley
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
              {['ALLEN-BRADLEY', 'ALLEN BRADLEY', 'A&B', 'A-B', 'A/B'].map((name, index) => (
                <div key={index} className="bg-blue-50 p-2 rounded-lg border border-blue-200 text-center hover:border-blue-400 transition-colors duration-300">
                  <span className="text-xs font-medium text-blue-900">{name}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-4">
              <h4 className="font-bold mb-3 text-sm">Manufacturer and Vendor Part number Standardization</h4>
              <p className="text-xs mb-4">The following part numbers are standardized as per Allen-Bradley format:</p>
              
              <div className="bg-white/20 rounded-lg p-3">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-white/30">
                        <th className="text-left py-1 text-blue-100">Legacy Part numbers</th>
                        <th className="text-left py-1 text-blue-100">Standardized Part numbers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {partNumberStandardization.map((item, index) => (
                        <tr key={index} className="border-b border-white/20 hover:bg-white/10 transition-colors duration-300">
                          <td className="py-1">{item.legacy}</td>
                          <td className="py-1 font-medium">{item.standardized}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Noun-Modifier Assignment Section */}
      <div className="py-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
              <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
              Noun-Modifier Assignment
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Materials are identified by defining the Noun Modifier. Noun modifiers are defined based on legacy descriptions and/or external source information. Example:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Legacy description</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Noun, Modifier</th>
                  </tr>
                </thead>
                <tbody>
                  {nounModifierExamples.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-300">
                      <td className="py-2 px-3 text-gray-800">{item.legacy}</td>
                      <td className="py-2 px-3 font-medium text-blue-900">{item.nounModifier}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* SoftNis Noun-Modifier Dictionary Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
              <Database className="w-6 h-6 mr-3 text-blue-600" />
              SoftNis Noun-Modifier Dictionary
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Currently SoftNis has more than 4,000 unique Noun modifier combinations. The dictionary is a two-tiered classification schema with consistent naming convention. Each Schema consists of Noun/Class and Modifier/Sub-Class with associated characteristics.
            </p>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="text-base font-bold text-blue-900 mb-4 text-center">Attribute Hierarchy Example - GAUGE</h4>
              
              <div className="space-y-3">
                {/* Level 1 */}
                <div className="flex justify-center">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center text-sm min-w-24">
                    GAUGE
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowDownRight className="w-4 h-4 text-gray-400" />
                </div>
                
                {/* Level 2 */}
                <div className="flex justify-center">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center text-sm min-w-24">
                    PRESSURE
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowDownRight className="w-4 h-4 text-gray-400" />
                </div>
                
                {/* Level 3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold text-center text-xs">
                    TYPE
                  </div>
                  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold text-center text-xs">
                    MEASURING RANGE
                  </div>
                  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold text-center text-xs">
                    PROCESS CONNECTION SIZE
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowDownRight className="w-4 h-4 text-gray-400" />
                </div>
                
                {/* Level 4 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold text-center text-xs">
                    END CONNECTION
                  </div>
                  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold text-center text-xs">
                    MATERIAL
                  </div>
                  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold text-center text-xs">
                    DISPLAY TYPE
                  </div>
                </div>
                
                {/* Continue with remaining levels in compact format */}
                <div className="text-center text-xs text-gray-500">
                  ... and continues through 7 levels of detailed attributes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Populate Attribute Values Section */}
      <div className="py-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
              <Target className="w-6 h-6 mr-3 text-blue-600" />
              Populate Attribute Values
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              As per the Attributes defined for a Noun-Modifier, values are captured for each material from respective input description or from source.
            </p>
          </div>
        </div>
      </div>

      {/* Unit of Measure Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
              <BarChart3 className="w-6 h-6 mr-3 text-blue-600" />
              Unit of Measure - UoM Standards
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Referring to Standard Units (SI units) and Military Standards (MIL-STD-12D), we selected the most used units of measurement abbreviations in the industry. Example:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">TYPE</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">UoM</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">SoftNis STANDARD</th>
                  </tr>
                </thead>
                <tbody>
                  {uomStandards.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-300">
                      <td className="py-2 px-3 text-gray-800">{item.type}</td>
                      <td className="py-2 px-3 text-gray-800">{item.uom}</td>
                      <td className="py-2 px-3 font-medium text-blue-900">{item.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Description Generation Section */}
      <div className="py-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
              <FileText className="w-6 h-6 mr-3 text-blue-600" />
              Description Generation
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              For each material Long and short descriptions are generated from Standardized, Enriched and Cleansed data. Short descriptions are abbreviated and truncated to 40 chars to fit SAP's short text. Format is customized per unique customer requirement.
            </p>
          </div>
        </div>
      </div>

      {/* Material De-Duplication Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
              <Copy className="w-6 h-6 mr-3 text-blue-600" />
              Material De-Duplication
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Throughout the MRO data cleansing/enrichment process, the following two types of duplicate materials are identified:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors duration-300">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center text-sm">
                  <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2">1</div>
                  Exact Duplicates:
                </h4>
                <p className="text-gray-700 text-xs">
                  Exact duplicates are ones for which manufacturer's name and part Number are exactly the same.
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors duration-300">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center text-sm">
                  <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2">2</div>
                  Function equivalent Duplicates:
                </h4>
                <p className="text-gray-700 text-xs">
                  Function equivalent duplicates have different manufacturer's name and/or part number but same specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Classification Section */}
      <div className="py-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
              <Layers className="w-6 h-6 mr-3 text-blue-600" />
              Data Classification (UNSPSC / ECLASS / ANY)
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              As per client requirement, materials are classified to any standard taxonomies like UNSPSC, ECLASS, CPV or any custom build taxonomies. UNSPSC / ECLASS consists of four levels of hierarchy. Complete 4 level hierarchy codes with descriptions are provided.
            </p>
          </div>
        </div>
      </div>

      {/* Obsolete and Alternate Part Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
              Obsolete and Alternate Part
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              During enrichment process if we come across any material marked as obsolete, such parts are tagged as "Obsolete". If there is any alternate part number suggested in manufacturer's website then the same will be captured.
            </p>
          </div>
        </div>
      </div>

      {/* Unidentified Materials Section */}
      <div className="py-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-blue-900 flex items-center mb-4">
              <Eye className="w-6 h-6 mr-3 text-blue-600" />
              Unidentified materials for Physical Verification
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              A list of materials which could not be identified are marked and submitted to client for physical verification. These materials can be processed after receiving required additional information.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Material Number</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {unidentifiedMaterials.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-300">
                      <td className="py-2 px-3 font-medium text-blue-900">{item.number}</td>
                      <td className="py-2 px-3 text-gray-800">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default MRO;