import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  MessageCircle, 
  Clock, 
  Shield, 
  Globe, 
  Users, 
  Zap, 
  Star,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Info,
  Lightbulb
} from 'lucide-react';

const Faq = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default
  const [filteredFAQs, setFilteredFAQs] = useState([]);
  const [isVisible, setIsVisible] = useState({});
  const [activeCategory, setActiveCategory] = useState('all');

  const faqData = [
    {
      id: 1,
      category: 'business',
      question: 'For how long has SoftNis been in business?',
      answer: 'SoftNis has been operating successfully in the data management and procurement solutions industry for over 15 years. We have established ourselves as a trusted partner for organizations worldwide, continuously evolving our services to meet the changing needs of modern businesses.',
      icon: Clock,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      category: 'services',
      question: 'Clients from which sectors of industry does SoftNis support?',
      answer: 'SoftNis serves a diverse range of industries including healthcare, manufacturing, government agencies, financial services, retail, telecommunications, and non-profit organizations. Our flexible solutions are designed to adapt to the unique requirements of each sector.',
      icon: Users,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 3,
      category: 'services',
      question: 'Does SoftNis work on pilot projects as POC to showcase quality in work?',
      answer: 'Yes, we offer comprehensive pilot projects and proof-of-concept (POC) implementations. These allow potential clients to experience our quality standards, methodology, and results firsthand before committing to larger engagements. Our pilot projects typically demonstrate 95%+ accuracy rates.',
      icon: Lightbulb,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      category: 'operations',
      question: 'How does SoftNis work with clients having broader time zone differences?',
      answer: 'We operate with global teams across multiple time zones to ensure 24/7 support coverage. Our distributed workforce and advanced project management systems enable seamless collaboration regardless of geographical boundaries. We maintain dedicated regional teams in North America, Europe, and Asia-Pacific.',
      icon: Globe,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      category: 'security',
      question: 'How does SoftNis ensure data security of its clients?',
      answer: 'We implement bank-grade security protocols including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with international standards like ISO 27001, GDPR, and SOC 2. All data is processed in secure, certified facilities with strict access controls.',
      icon: Shield,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 6,
      category: 'competitive',
      question: 'How does SoftNis have an edge over others in the business? How is SoftNis better with regard to the subject matter?',
      answer: 'Our competitive advantages include proprietary AI-powered classification algorithms, 99.8% accuracy rates, extensive domain expertise, customized solutions for each client, and a proven track record with 500+ successful implementations. We combine advanced technology with deep industry knowledge.',
      icon: Star,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 7,
      category: 'services',
      question: 'Does SoftNis offer solutions to maintain long-term integrity post data cleansing?',
      answer: 'Absolutely. We provide comprehensive data governance frameworks, automated monitoring systems, regular quality assessments, and ongoing maintenance services. Our solutions include real-time data validation, periodic audits, and continuous improvement processes to ensure long-term data integrity.',
      icon: CheckCircle,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 8,
      category: 'business',
      question: 'Where is the Head Quarters of SoftNis located?',
      answer: 'SoftNis headquarters is strategically located in the heart of the technology corridor, with additional offices in major business centers worldwide. Our global presence ensures local support while maintaining centralized quality standards and governance.',
      icon: MapPin,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 9,
      category: 'operations',
      question: 'Does the material cleansing process at SoftNis involve automotive methods or is it entirely manual?',
      answer: 'We employ a hybrid approach combining advanced automation with expert human oversight. Our proprietary AI algorithms handle initial processing and pattern recognition, while our certified specialists perform quality validation and complex decision-making. This ensures both efficiency and accuracy.',
      icon: Zap,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: 10,
      category: 'services',
      question: 'Which non-English languages does SoftNis support?',
      answer: 'SoftNis supports over 25 languages including Spanish, French, German, Italian, Portuguese, Dutch, Chinese (Simplified & Traditional), Japanese, Korean, Arabic, Russian, and many others. Our multilingual capabilities ensure accurate processing of international data sets.',
      icon: Globe,
      color: 'from-violet-500 to-violet-600'
    },
    {
      id: 11,
      category: 'pricing',
      question: 'What is your pricing model, what is the ball park figure for Data Cleansing?',
      answer: 'Our pricing is flexible and based on project scope, data volume, complexity, and timeline requirements. We offer competitive rates starting from $0.10 per record for standard cleansing, with volume discounts available. Custom enterprise packages are tailored to specific organizational needs.',
      icon: Info,
      color: 'from-amber-500 to-amber-600'
    },
    {
      id: 12,
      category: 'operations',
      question: 'How long does the MRO Data Cleansing process generally take?',
      answer: 'Timeline varies based on data volume and complexity. Typical projects range from 2-8 weeks for standard datasets. Large enterprise implementations may take 3-6 months. We provide detailed project timelines during the initial assessment phase and maintain regular progress updates throughout.',
      icon: Clock,
      color: 'from-rose-500 to-rose-600'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle, count: faqData.length },
    { id: 'business', name: 'Business', icon: Users, count: faqData.filter(faq => faq.category === 'business').length },
    { id: 'services', name: 'Services', icon: Star, count: faqData.filter(faq => faq.category === 'services').length },
    { id: 'operations', name: 'Operations', icon: Zap, count: faqData.filter(faq => faq.category === 'operations').length },
    { id: 'security', name: 'Security', icon: Shield, count: faqData.filter(faq => faq.category === 'security').length },
    { id: 'competitive', name: 'Competitive', icon: Star, count: faqData.filter(faq => faq.category === 'competitive').length },
    { id: 'pricing', name: 'Pricing', icon: Info, count: faqData.filter(faq => faq.category === 'pricing').length }
  ];

  useEffect(() => {
    const filtered = faqData.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredFAQs(filtered);
  }, [searchTerm, activeCategory]);

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

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setOpenItems(new Set()); // Close all items when changing category
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Floating Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-200 text-sm font-medium mb-8 backdrop-blur-sm border border-blue-400/30 hover:scale-105 transition-transform duration-300">
              <HelpCircle className="w-5 h-5 mr-2 animate-pulse" />
              Get Your Questions Answered
              <MessageCircle className="w-4 h-4 ml-2" />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                SoftNis
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, processes, and capabilities. 
              Can't find what you're looking for? We're here to help.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-blue-500 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 hover:bg-white/20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`group flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeCategory === category.id
                        ? 'bg-white text-blue-600 shadow-lg'
                        : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.name}
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                      activeCategory === category.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-white/20 text-white'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div id="faq-content" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Results Counter */}
          <div className="mb-8 text-center">
            <p className="text-gray-600 text-lg">
              Showing <span className="font-bold text-blue-600">{filteredFAQs.length}</span> questions
              {searchTerm && (
                <span> matching "<span className="font-semibold text-purple-600">{searchTerm}</span>"</span>
              )}
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => {
                const IconComponent = faq.icon;
                const isOpen = openItems.has(faq.id);
                
                return (
                  <div
                    key={faq.id}
                    className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden ${
                      isVisible['faq-content'] ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Question Header */}
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-inset transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                          {/* Icon */}
                          <div className={`w-12 h-12 bg-gradient-to-br ${faq.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          
                          {/* Question */}
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-relaxed">
                              {faq.question}
                            </h3>
                            <div className="flex items-center mt-2 space-x-3">
                              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full capitalize">
                                {faq.category}
                              </span>
                              <span className={`text-xs font-medium ${isOpen ? 'text-green-600' : 'text-gray-500'}`}>
                                {isOpen ? 'Expanded' : 'Click to expand'}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Toggle Icon */}
                        <div className={`ml-4 p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-blue-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Answer Content */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-8 pb-6">
                        <div className="pl-16">
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-500">
                            <p className="text-gray-700 leading-relaxed text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No questions found</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  We couldn't find any questions matching your search. Try adjusting your search terms or browse different categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600/20 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm border border-blue-400/30">
            <MessageCircle className="w-4 h-4 mr-2" />
            Still Have Questions?
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            We're Here to Help
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Can't find the answer you're looking for? Our expert team is ready to assist you with personalized support.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
              <p className="text-blue-200 mb-4">Get detailed answers via email</p>
              <a 
                href="mailto:sales@softnis.com" 
                className="text-blue-300 hover:text-white font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                sales@softnis.com
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
              <p className="text-blue-200 mb-4">Speak with our experts directly</p>
              <span className="text-blue-300 font-semibold">Available 24/7</span>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
              <p className="text-blue-200 mb-4">Instant support when you need it</p>
              <span className="text-blue-300 font-semibold">Start Conversation</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              Contact Our Team
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Faq;