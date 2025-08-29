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
  TrendingUp,
} from 'lucide-react';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import {Link}from 'react-router-dom'

function Home() {
  const [currentClient, setCurrentClient] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [statsLoaded, setStatsLoaded] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  const testimonials = [
  {
    text: "It's been over two years that we had been engaged with SoftNis for Product Data Enrichment and Description Generation project. We had a war chest of products and our biggest challenge was to partner with a service provider who can process huge data without compensating on quality. SoftNis truly helped us to reach our target with the expected quality output. And we have to commend them for their dedicated work and consistency to date.",
    author: "Chandrashekar Ramachandra",
    position: "Lead Consultant, Smart Data Team, LG CNS",
    company: "LG CNS",
    image: "https://www.softnis.com/img/testimonials/LG_CNS.gif" // Replace with actual logo URL
  },
  {
    text: "SoftNis helped us to cleanse and classify our 31,000 MRO materials' data in just 6 weeks. I am pleased with the data quality and the duplicate materials which they identified during the process.",
    author: "Tejinder Kaushik",
    position: "Vice President, Head of IT, Chemtrade Logistics Inc. Canada",
    company: "CHEMTRADE",
    image: "https://www.softnis.com/img/testimonials/Chemtrade-Logistics.jpg" // Replace with actual logo URL
  },
  {
    text: "SoftNis has incorporated the UNSPSC way of classification and classified over a million products for us up until now. More importantly, they delivered it within the stipulated time and more than 80% of the products were classified at the commodity level and they achieved almost 95% accuracy! I would definitely recommend SoftNis to any organization who is looking for UNSPSC way of classification.",
    author: "Hanumesh Srinivas",
    position: "Vice President, Compnova, Texas, USA",
    company: "COMPNOVA",
    image: "https://www.softnis.com/img/testimonials/compnova_logo.png" // Replace with actual logo URL
  },
  {
    text: "We were in search of UNSPSC service providers to classify our products to upload it to the TrueTrade platform. As the TrueTrade platform accepts only UNSPSC codes at the Commodity level, SoftNis helped us classify all our products well in time and with good quality. Most importantly they understood our products, type, and application and classified all our products to the Commodity level.",
    author: "Mathias Pedersen",
    position: "Solution architect, Hippomini, Denmark",
    company: "HIPPOMINI",
    image: "https://www.softnis.com/img/testimonials/hippomini.jpg" // Replace with actual logo URL
  }
];

  const clients = [
    { name: "Alpha Purchase", logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "52Care", logo: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Brightside", logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Canada Medical", logo: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "TechCorp", logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "DataFlow", logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "MedTech Solutions", logo: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "Global Systems", logo: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" }
  ];

  const services = [
    {
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      title: "Material Master Data Cleansing & Classification",
      description: "Comprehensive data cleansing and classification services for your material master data with advanced algorithms and quality assurance.",
      link:'/mro'
    },
    {
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      title: "ECLASS Classification With Properties & Values",
      description: "Expert ECLASS classification with detailed properties and values mapping for international standardization.",
      link:'/eclass'
    },
    {
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      title: "eCommerce Product Data Enrichment",
      description: "Enhance your eCommerce product data with rich descriptions, attributes, and optimized content for better conversions.",
      link:'/unspc'
    },
    {
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      title: "Vendor/Supplier Data Management",
      description: "Streamline your vendor and supplier data management processes with automated workflows and quality controls.",
      link:'/mro'
    },
    {
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      title: "Healthcare Products Catalog Data Enrichment & Classification",
      description: "Specialized healthcare product data enrichment and classification services with regulatory compliance focus.",
      link:'/health'
    },
    {
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      title: "UNSPSC Classification Services",
      description: "Professional UNSPSC classification services for global standard compliance and seamless procurement integration.",
      link:'/unspc'
    }
  ];

  const industries = [
    {
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      title: "MRO Data Management",
      description: "Maintenance, Repair & Operations"
    },
    {
      image: "https://images.pexels.com/photos/3752834/pexels-photo-3752834.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      title: "Automotive and Aftermarket",
      description: "Parts & Components Classification"
    },
    {
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      title: "Pharmaceutical and Healthcare",
      description: "Medical Products & Supplies"
    },
    {
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      title: "Electrical and Accessories",
      description: "Electronic Components & Parts"
    },
    {
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      title: "Oil and Gas",
      description: "Energy Sector Equipment"
    },
    {
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      title: "Electronics and Accessories",
      description: "Technology & Digital Components"
    }
  ];

  const caseStudies = [
    {
      image: "https://www.softnis.com/img/case/home-page-case-study.webp",
      title: "UNSPSC Classification Excellence",
      description: "Discover how SoftNis enabled a leading Danish distributor to achieve 100% product classification at the commodity level.",
      details: "Our tailored UNSPSC classification solutions ensure precise product categorization for seamless platform integration.",
      link:'unpsc'
    },
    {
      image: "https://www.softnis.com/img/case/case-study-2.webp",
      title: "Multi-Language Data Processing",
      description: "Learn how SoftNis tackled the complexities of classifying over 3 million Japanese-language products to UNSPSC standards.",
      details: "Our innovative approach overcame language barriers, enhancing product visibility and spend management for a leading Asian distributor.",
      link:'unpsc'

    },
    {
      image: "https://www.softnis.com/img/case/case-studay-3.webp",
      title: "MRO Data Transformation",
      description: "Discover how SoftNis assisted Chemtrade Logistics in cleansing and classifying 31,000 MRO materials, enhancing procurement efficiency.",
      details: "Our comprehensive data management solutions reduced inventory duplication and improved spend visibility for a leading chemical manufacturer.",
      link:'mro'

    }
  ];

  const stats = [
    { number: 12, label: "Years of Experience", color: "text-blue-600" },
    { number: 6, label: "Million Items processed", color: "text-teal-600" },
    { number: 45, label: "Clients Worldwide", color: "text-orange-600" },
    { number: 10, label: "Countries Served", color: "text-purple-600" }
  ];

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsLoaded) {
            setStatsLoaded(true);
            animateStats();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [statsLoaded]);

  const animateStats = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.number / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        setAnimatedStats(prev => {
          const newStats = [...prev];
          newStats[index] = Math.floor(current);
          return newStats;
        });
      }, 40);
    });
  };

  const nextClients = () => {
    setCurrentClient((prev) => (prev + 1) % Math.ceil(clients.length / 4));
  };

  const prevClients = () => {
    setCurrentClient((prev) => (prev - 1 + Math.ceil(clients.length / 4)) % Math.ceil(clients.length / 4));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
    

      {/* Hero Section */}
      <Hero/>
      {/* <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  🚀 Trusted by 45+ Global Clients
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Products Data 
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block">
                    Enrichment & Classification
                  </span>
                </h1>
                <p className="text-lg text-gray-600 font-medium">
                  (English and Non-English Data)
                </p>
                <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  With more than 10 years in the industry and working on millions of product data, we understand the importance of data quality and deliver exceptional results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  Get Started Today
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg">
                  View Case Studies
                </button>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-2xl border border-blue-200 shadow-lg">
                <p className="text-gray-700 text-lg text-center lg:text-left">
                  📧 Contact{" "}
                  <a href="mailto:sales@softnis.com" className="font-bold text-blue-600 hover:text-blue-800 transition-colors underline decoration-2 underline-offset-2">
                    sales@softnis.com
                  </a>
                  {" "}for your data samples and Proof of Concept (No Cost, No Obligation)
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
                    <div className="w-full h-32 sm:h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                        alt="Healthcare Data" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-4">Healthcare Data</h3>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
                    <div className="w-full h-32 sm:h-40 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                        alt="Classification Systems" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-4">ECLASS Systems</h3>
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
                  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
                    <div className="w-full h-32 sm:h-40 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                        alt="Data Processing" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-4">Data Processing</h3>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group">
                    <div className="w-full h-32 sm:h-40 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                        alt="UNSPSC Classification" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-4">UNSPSC Standards</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
        Comprehensive data solutions tailored to each client's unique needs. At SoftNis, we believe in empowering businesses through better data, fostering long-term partnerships built on trust and excellence.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group overflow-hidden border border-gray-100"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6 sm:p-8 flex flex-col h-[calc(100%-12rem)]">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
              {service.description}
            </p>
            <div className="mt-auto">
              <Link to={service.link} className="flex items-center bg-light-600 hover:bg-blue-700 hover:text-white border font-semibold py-3 px-6 rounded-lg transition-all duration-300  hover:shadow-xl mt-4 w-full justify-center">
                Learn More 
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full"></div>
                    <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                      {statsLoaded ? (
                        <span className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>
                          {animatedStats[index]}
                        </span>
                      ) : (
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 font-semibold text-base sm:text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About/>


      {/* our services */}


      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group overflow-hidden"
              >
                <div className="h-24 sm:h-32 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-4 text-center">
                  <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">{industry.title}</h3>
                  <p className="text-xs text-gray-600">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* casestudies */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {caseStudies.map((study, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group overflow-hidden border border-gray-100"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={study.image} 
              alt={study.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6 sm:p-8 flex flex-col h-[calc(100%-12rem)]">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              {study.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
              {study.description}
            </p>
            <p className="text-sm text-gray-500 mb-6">
              {study.details}
            </p>
            <div className="mt-auto">
              <Link to={study.link} className="flex items-center bg-light-600 hover:bg-blue-700 hover:text-white border font-semibold py-3 px-6 rounded-lg transition-all duration-300  hover:shadow-xl mt-4 w-full justify-center"> Read More</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
    </div>

    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 flex flex-col"
        >
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-gray-700 italic leading-relaxed mb-6 text-base sm:text-lg flex-grow">
            "{testimonial.text}"
          </blockquote>
          <div className="border-t border-gray-200 pt-6 mt-auto">
            <div className="font-bold text-base sm:text-lg text-gray-900">
              {testimonial.author}
            </div>
            <div className="text-blue-600 font-medium text-sm sm:text-base">
              {testimonial.position}
            </div>
            <div className="text-gray-600 text-sm mt-1">
              {testimonial.company}
            </div>
            <img
              src={testimonial.image}
              alt={`${testimonial.company} logo`}
              className="mt-4 h-10 w-auto object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* clients */}
     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
    </div>

    <div className="relative flex items-center">
      <button
        onClick={prevClients}
        className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-110 mr-4"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 flex-grow">
        {clients.slice(currentClient * 4, (currentClient + 1) * 4).map((client, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group border border-gray-100"
          >
            <div className="h-16 sm:h-20 mb-4 overflow-hidden rounded-lg">
              <img 
                src={client.logo} 
                alt={client.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="text-gray-700 font-semibold text-center text-sm sm:text-base">
              {client.name}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={nextClients}
        className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-110 ml-4"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  </div>
</section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About SoftNis</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                SoftNis is a trusted partner in delivering clean, accurate, and enriched data for manufacturers, e-commerce distributors, and supply chain organizations worldwide. Since our inception, we have specialized in transforming raw data into actionable insights, enabling businesses to streamline operations and focus on growth.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                With expertise in Material Master Data Cleansing, Enrichment, and Classification, we serve industries including Healthcare, MRO, Pharmaceuticals, and Electronics, helping clients achieve data standardization and operational excellence.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Backed by a dedicated team of 35+ skilled data engineers and over a decade of experience, SoftNis has established a global presence across Asia, North America, and Europe. Our commitment to innovation, quality, and data security ensures we deliver trusted solutions that drive business success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Learn More About Us
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Contact Our Team
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 shadow-lg">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base">Years Experience</div>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 shadow-lg">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto mb-4" />
                <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-2">35+</div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base">Data Engineers</div>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 shadow-lg">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mx-auto mb-4" />
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">6M+</div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base">Products Processed</div>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 shadow-lg">
                <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">Global</div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base">Presence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;