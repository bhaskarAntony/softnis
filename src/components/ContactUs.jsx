import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-100 via-white to-blue-50 py-20 px-6 sm:px-12 lg:px-24 text-gray-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-indigo-200 rounded-full opacity-20 blur-2xl animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-16 text-center text-blue-700 animate-fadeIn">Let's Connect</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8 hover:shadow-2xl transition duration-300">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Mailing Address</h3>
              <p className="text-sm">
                #999/30, 1st Main, Vijaynagar,<br />
                Bangalore, Karnataka, India - 560040.<br />
                <strong>Phone:</strong> +91.990.070.0599
              </p>
              <p className="text-sm mt-4">
                #876/6, Vanivilas Road, Lakshmipuram,<br />
                Mysore, Karnataka, India - 570004.<br />
                <strong>Phone:</strong> +91.821.424.3340
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Sales</h3>
              <a href="mailto:sales@softnis.com" className="text-blue-500 hover:underline">
                sales@softnis.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Follow Us</h3>
              <div className="flex space-x-3">
                <a href="#" className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition"><Facebook size={18} /></a>
                <a href="#" className="p-2 rounded-full bg-blue-800 hover:bg-blue-900 text-white transition"><Linkedin size={18} /></a>
                <a href="#" className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white transition"><Twitter size={18} /></a>
                <a href="#" className="p-2 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 hover:opacity-80 text-white transition"><Instagram size={18} /></a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-2 bg-white p-10 shadow-2xl rounded-2xl backdrop-blur-md hover:shadow-blue-300 transition duration-300 animate-slideUp">
            <p className="text-sm mb-6 text-gray-500">
              Please fill in the form below. Our team will reach out to you shortly.
            </p>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name *" required className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Last Name" className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <input type="email" placeholder="Email Address *" required className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="Your Message *" rows="5" required className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                Send Message
              </button>
              <p className="text-xs text-red-500 mt-2">* Required Fields</p>
            </form>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 text-sm text-gray-700">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h4 className="text-blue-600 font-semibold mb-2">Data Samples</h4>
            <a href="#" className="text-blue-500 underline hover:text-blue-700">Download Data Samples</a>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h4 className="text-blue-600 font-semibold mb-2">Privacy Policy</h4>
            <p>We maintain strict confidentiality and never share or sell client data.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h4 className="text-blue-600 font-semibold mb-2">Data Security</h4>
            <p>We implement the latest security practices to protect your information.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;