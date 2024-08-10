import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4">
          {/* Social Media Icons */}
          <a href="#" aria-label="Facebook" className="text-white">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Twitter" className="text-white">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram" className="text-white">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Agustina De Adamo Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
