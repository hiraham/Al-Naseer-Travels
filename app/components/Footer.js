// app/components/Footer.js
"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#005f73] to-[#0a9396] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">

          {/* Company Information */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-4xl font-extrabold border-b-2 border-[#ec9a01] pb-2 mb-4 tracking-wider">TRAVOCOM PVT. LTD.</h2>
            <p className="mt-2 text-lg md:text-xl leading-relaxed">
              Travacom is not just your another travel agent but a partner that has been serving satisfied customers for over a decade.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-2xl font-semibold border-b-2 border-[#ec9a01] pb-1 mt-4 md:mt-0">CONTACT INFO</h3>
            <h4 className="text-lg font-medium mt-3">GULISTAN-E-JOHAR OFFICE</h4>
            <p className="text-base leading-relaxed">
              A-251, PIA Housing Society, Gulistan-e-Johar Block 9, Karachi, Opposite Johar Police Station
            </p>
            <p className="text-base">Tel: 
              <a href="tel:02134630005" className="text-[#ec9a01] hover:text-white transition-colors duration-300 font-semibold"> 021-34630005</a>
            </p>
            
            <h4 className="text-lg font-medium mt-4">BAHADURABAD OFFICE</h4>
            <p className="text-base leading-relaxed">
              Office # 404, 4th Floor, Balad Trade Center 2, Alamgir Road, Bahadurabad, Karachi.
            </p>
            <p className="text-base">Tel: 
              <a href="tel:02137121263" className="text-[#ec9a01] hover:text-white transition-colors duration-300 font-semibold"> 021-37121263</a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold border-b-2 border-[#ec9a01] pb-1 mt-4 md:mt-0">QUICK LINKS</h3>
            <div className="flex flex-col mt-2">
              {['About Us', 'Umrah Packages', 'International Tour', 'Pakistan Tour', 'Visa Consultancy', 'Contact Us', 'Customer Feedback'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="py-2 text-base hover:text-[#ec9a01] transition-colors duration-300 font-semibold"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center mt-6">
          {['Facebook', 'Twitter', 'Instagram'].map((platform) => (
            <a key={platform} href="#" className="mx-3 text-[#ec9a01] hover:text-white transition-colors duration-300 text-lg font-semibold">
              {platform}
            </a>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p className="text-sm italic">&copy; 2024 BIN-NASEER TRAVEL & TOURS(PVT)LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
