import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Clock, 
  Shield, 
  Zap, 
  UserCheck, 
  BarChart3, 
  PhoneCall, 
  Mail,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Cpu,
  Zap as Lightning,
  Car,
  Briefcase,
  Syringe,
  Star,
  Globe,
  Award
} from 'lucide-react';

function Staff() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Globe,
      title: "The Domain we expertise",
      description: "We provide the resources in the domain which we have been through the industry for more than 10 years. Refer the Detailed Skill sets below.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Users,
      title: "Fresh Engineers to Domain Experts", 
      description: "We have a team of engineers ranging from fresh engineering graduate to Domain experts/Subject matter experts up to 25 years of experience. The engineers are from Mechanical, Electrical, Electronics and Software.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: Shield,
      title: "Data Confidentiality",
      description: "We adhere to and have incorporated the latest data security measures and policies to invariably vouch for a fact that our client's data is always safe and secure with us.",
      color: "from-green-500 to-teal-400"
    },
    {
      icon: Zap,
      title: "How Fast",
      description: "As we have hands on experience in the industry, having worked with our established clientele base for over the years, we are in a better position to deploy the resources at the right place, within a short span of time.",
      color: "from-orange-500 to-red-400"
    },
    {
      icon: UserCheck,
      title: "In house SME and Managers",
      description: "The in-house Domain expert's and manager's support which comes free of cost can assist you in streamlining the requirement and instructions from the client and passing it on to our resources. We ensure that the deployed resource is efficient and has delivered the data as per the client's expectations.",
      color: "from-indigo-500 to-blue-400"
    },
    {
      icon: BarChart3,
      title: "Tracking and Transparency",
      description: "The customers can directly interact with the hired resources. We work via Drop box, where our customers get instant access to the working files.",
      color: "from-cyan-500 to-blue-400"
    },
    {
      icon: PhoneCall,
      title: "Cancellation",
      description: "Hire when really needed. Resources can be hired on interim basis, any number of hours in a month for a Minimum of 8 hours in a month. The contract can be cancelled at any instance without giving any prior notification.",
      color: "from-red-500 to-pink-400"
    },
    {
      icon: Clock,
      title: "Reporting and Billing",
      description: "Daily, or weekly recursive meetings as per customer needs to update the status. Total consumed number of hours are calculated and billed monthly.",
      color: "from-yellow-500 to-orange-400"
    }
  ];

  const skills = [
    "Material Master Data Management",
    "Vendor Master Data Management", 
    "Catalogue Content Management",
    "Schema Development",
    "Custom/Standard Taxonomy Development",
    "Excel ERP Data Import/Export",
    "Image Customization/Redesign",
    "Product or Service Classification",
    "Product Sourcing"
  ];

  const domains = [
    { icon: Stethoscope, name: "HealthCare", color: "from-teal-400 to-cyan-500" },
    { icon: Syringe, name: "Pharmaceutical", color: "from-blue-400 to-indigo-500" },
    { icon: Lightning, name: "Electrical & Electronics", color: "from-yellow-400 to-orange-500" },
    { icon: Cpu, name: "Oil & Gas", color: "from-green-400 to-teal-500" },
    { icon: Car, name: "Automotive", color: "from-red-400 to-pink-500" },
    { icon: Briefcase, name: "Office Supplies & Safety", color: "from-purple-400 to-indigo-500" }
  ];

  const resourceTypes = [
    {
      title: "Fresh Engineers In",
      subtitle: "Mechanical, Electrical, Electronics, Software",
      experience: "Experience",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Experienced Production and QC Resources", 
      subtitle: "1 to 10 years",
      experience: "1 to 10 years",
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Subject Mater experts (SME) / Data Stewards",
      subtitle: "10 – 25 Years",
      experience: "10 – 25 Years", 
      color: "from-green-500 to-teal-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-slate-900/40"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Let the{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Right Candidates
              </span>{' '}
              work for you.
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Hire when there is a need. Skilled Professionals. Hourly/Monthly Billing.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3">
                Get Started Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              <button className="group border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-6">
              SoftNis Staffing Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We provide organizations with an agile, flexible workforce well equipped to operate, when needed. 
              We have a customized contract flexible enough, to accommodate even the smallest requirements 
              which may involve a few hours' effort.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                  activeCard === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {service.description}
                </p>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Resource Types
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resourceTypes.map((type, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${type.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {type.title}
                  </h3>
                  
                  <p className="text-blue-100 text-lg mb-6">
                    {type.subtitle}
                  </p>

                  <div className="flex items-center gap-3">
                    <Award className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" size={24} />
                    <span className="text-white font-semibold">
                      {type.experience}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Skill Set
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-6">
              Multiple Domains and Verticals
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              MRO HealthCare and Pharmaceutical Electrical and Electronics Oil & Gas Automotive Office Supplies and Safety Products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${domain.color} p-5 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <domain.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {domain.name}
                </h3>

                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${domain.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Pricing and Quality
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <div className="flex items-center justify-center mb-8">
              <Star className="text-yellow-400 animate-pulse" size={40} />
            </div>
            
            <p className="text-2xl sm:text-3xl text-white font-light leading-relaxed">
              Hire the quality resourced at the pricing starts with as low as{' '}
              <span className="font-bold text-cyan-300 text-4xl">USD 3</span>{' '}
              per hour.
            </p>
          </div>
        </div>
      </section>

    

     
    </div>
  );
}

export default Staff;