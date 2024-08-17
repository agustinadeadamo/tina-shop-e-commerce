import React from 'react';
import FooterSection from './FooterSection';
import { servicesItems, helpItems, companyItems } from './footerSectionsData';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-4 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="block">
          <h3 className="font-semibold text-gray-800 mb-4 text-sm">
            SIGN UP FOR TINA SHOP UPDATES
          </h3>
          <p className="text-gray-600 text-xs mb-4">
            By entering your email address below, you consent to receiving our
            newsletter with access to the latest collections, events, and
            initiatives. More details are provided in our{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 bg-white border-b border-gray-600 text-gray-600 placeholder-gray-600 text-xs focus:outline-none focus:border-black"
          />
        </div>

        <FooterSection title="TINA SHOP SERVICES" items={servicesItems} />

        <div className="hidden md:block">
          <FooterSection title="NEED HELP?" items={helpItems} />
        </div>

        <div className="hidden md:block">
          <FooterSection title="COMPANY" items={companyItems} />
        </div>

        <div className="hidden md:block">
          <h3 className="font-semibold text-gray-800 mb-4 text-sm">
            STORE LOCATOR
          </h3>
          <a
            href="#"
            className="block text-gray-600 hover:underline mb-8 text-xs"
          >
            COUNTRY/REGION, CITY
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
