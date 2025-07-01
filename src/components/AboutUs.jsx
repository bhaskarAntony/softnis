import React, { useState, useEffect } from 'react';
import { Users, Target, Award, Globe, ChevronRight, Sparkles, Building2, Calendar, MapPin, Heart, Zap, Shield } from 'lucide-react';

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, label: 'Core Engineers', value: '35+', color: 'text-blue-600' },
    { icon: Globe, label: 'Countries Served', value: '15+', color: 'text-green-600' },
    { icon: Award, label: 'Years Experience', value: '10+', color: 'text-purple-600' },
    { icon: Building2, label: 'Industries', value: '8+', color: 'text-orange-600' }
  ];

  const milestones = [
    { year: '2010', event: 'Founded by Indra Kumar', desc: 'Started as a small team of five members' },
    { year: '2015', event: 'Major Transition', desc: 'Transitioned from proprietorship to private limited company' },
    { year: '2020', event: 'Global Expansion', desc: 'Expanded services across Asia, USA, Canada, and Europe' },
    { year: '2024', event: 'Industry Leader', desc: 'Leading provider of data management solutions' }
  ];

  const services = [
    { name: 'Material Master Data Cleansing', icon: Shield },
    { name: 'Data Enrichment', icon: Sparkles },
    { name: 'Data Classification', icon: Target },
    { name: 'Supply Chain Management', icon: Globe },
    { name: 'E-commerce Solutions', icon: Zap },
    { name: 'Quality Assurance', icon: Award }
  ];

  const values = [
    { icon: Users, title: 'Collaboration', desc: 'Working together to achieve excellence', color: 'blue' },
    { icon: Target, title: 'Innovation', desc: 'Continuously pushing boundaries', color: 'green' },
    { icon: Award, title: 'Excellence', desc: 'Committed to delivering quality', color: 'purple' },
    { icon: Heart, title: 'Integrity', desc: 'Building trust through transparency', color: 'red' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-3 group cursor-pointer mb-8">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SoftNis
            </h1>
          </div>
          
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 hover:bg-blue-200 transition-colors duration-300">
            <Calendar className="w-4 h-4" />
            <span>Established 2010 • Trusted Partner</span>
          </div>
          
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            About SoftNis
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Empowering businesses worldwide with exceptional data management solutions and unwavering commitment to excellence. Founded by Indra Kumar with the vision to help organizations focus on their core business while we handle their data complexities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/20 group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${stat.color} bg-current/10 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Our Story */}
          <div className={`lg:col-span-2 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300 mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Building2 className="w-7 h-7 mr-3 text-blue-600" />
                Our Story
              </h3>
              <div className="prose prose-gray max-w-none space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  SoftNis was founded by <span className="font-semibold text-blue-600">Indra Kumar</span> with the core intention of helping manufacturers, e-commerce distributors, and supply chain organizations manage their item data efficiently, allowing them to focus on their core business operations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In the early days, SoftNis started as a small team of five members, working as a sub-vendor for several service providers. Through perseverance and dedication, the company expanded its operations, taking on diverse clients and projects. In February 2015, SoftNis transitioned from a proprietorship to a private limited company, marking a significant milestone in its journey.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, SoftNis has grown into a team of <span className="font-semibold text-green-600">35+ core engineers</span>, delivering exceptional services to clients across Asia, the USA, Canada, and Europe. Over the years, we have built a reputation for providing high-quality Material Master Data Cleansing, Enrichment, and Classification services, earning trust across various industries, including MRO, Healthcare, Pharmaceuticals, Electrical, and Mining.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our expertise is rooted in over a decade of industry experience, processing millions of items and developing tailored solutions to meet the unique needs of our clients.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Expertise</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group border border-transparent hover:border-blue-200"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-200">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Sidebar */}
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-xl transition-all duration-300 sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                Our Journey
              </h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="relative pl-6 pb-4 border-l-2 border-blue-100 last:border-l-0 group hover:border-blue-300 transition-colors duration-200"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <div className="bg-blue-50 rounded-lg p-3 group-hover:bg-blue-100 transition-colors duration-200">
                      <div className="text-sm font-bold text-blue-600 mb-1">{milestone.year}</div>
                      <div className="text-sm font-semibold text-gray-800 mb-1">{milestone.event}</div>
                      <div className="text-xs text-gray-600">{milestone.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className={`mb-16 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 border border-white/20 hover:shadow-xl transition-all duration-300 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Vision
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
              To be the preferred partner for product data management and data quality services globally, empowering businesses with clean, enriched, and standardized data.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
              <p className="text-gray-600 italic text-lg">
                "We envision a world where businesses can harness the true power of their data to drive innovation, efficiency, and growth."
              </p>
            </div>
          </div>
        </div>

        {/* Leadership & Values */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* CEO Profile */}
          <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Leadership</h3>
              <div className="text-center">
                <div className="relative group mb-6">
                  <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src="https://www.softnis.com/img/Leadership-Team-Pics/Indra-Kumar.jpg" 
                      alt="Indra Kumar - CEO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-12 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Indra Kumar</h4>
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Building2 className="w-4 h-4" />
                  <span>Chief Executive Officer</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Indra Kumar, the founder and CEO of SoftNis, is the visionary behind the company's success. With a focus on data management excellence, he has guided SoftNis through its transformational journey, from a small startup to a trusted global service provider.
                </p>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className={`transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className={`p-4 rounded-xl hover:bg-${value.color}-50 transition-colors duration-200 border border-transparent hover:border-${value.color}-200`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-${value.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <value.icon className={`w-6 h-6 text-${value.color}-600`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{value.title}</h4>
                        <p className="text-sm text-gray-600">{value.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Data?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Join hundreds of satisfied clients who trust SoftNis for their data management needs. Let's discuss how we can help streamline your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg">
                  <span>Get Started Today</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  <span>Learn More</span>
                  <Target className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;