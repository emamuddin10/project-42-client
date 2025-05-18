import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="relative py-20 bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://cdn4.parksmedia.wdprapps.disney.com/media/dftwh/weddings/disney_weddings_overview_page_gallery_1_1000x443.jpg"
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-500 mb-3">Contact Us</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Contact Form */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <button type="submit" className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-6 text-base">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-green-600 mt-1" />
                <span>123 Love Street, Suite 100, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-start gap-4">
                <FaPhoneAlt className="text-green-600 mt-1" />
                <span>+880 123 456 7890</span>
              </li>
              <li className="flex items-start gap-4">
                <FaEnvelope className="text-green-600 mt-1" />
                <span>contact@loveline.com</span>
              </li>
            </ul>
            <p className="mt-8 text-sm text-gray-500">We usually respond within 24 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
