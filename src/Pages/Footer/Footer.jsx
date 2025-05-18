import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-green-500 mb-2">Matrimony Match</h2>
          <p className="text-sm text-gray-400">
            Trusted platform to find your perfect life partner. Safe, reliable, and community-based matchmaking.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-green-400">Home</a></li>
            <li><a href="/biodatas" className="hover:text-green-400">All Biodatas</a></li>
            <li><a href="/register" className="hover:text-green-400">Register</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="flex items-center gap-2"><FaPhoneAlt /> +880 1234 567890</li>
            <li className="flex items-center gap-2"><FaEnvelope /> support@matrimony.com</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition"><FaFacebookF /></a>
            <a href="#" className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition"><FaInstagram /></a>
            <a href="#" className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Matrimony Match. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
