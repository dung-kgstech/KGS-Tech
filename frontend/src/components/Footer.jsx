import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const handleLanguageChange = (value) => {
        setLanguage(value);
        i18n.changeLanguage(value);
    };
    
  return (
    <footer className="bg-[#FCF5ED] text-gray-800 py-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Thông tin công ty */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Company Name</h3>
            <p className="text-sm center mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <p className="text-sm">
              Address: 123 Street, City, Country
            </p>
          </div>

          {/* Các liên kết */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/home" className="hover:text-gray-600 text-center">Home</a></li>
              <li><a href="/about" className="hover:text-gray-600 items-center">Company</a></li>
              <li><a href="/services" className="hover:text-gray-600" items-center>Business</a></li>
              <li><a href="/contact" className="hover:text-gray-600 items-center">Blog</a></li>
            </ul>
          </div>

        
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm mb-4 sm:mb-0">&copy; 2024 Company Name. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm hover:text-gray-600">Privacy Policy</a>
              <a href="/terms" className="text-sm hover:text-gray-600">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
