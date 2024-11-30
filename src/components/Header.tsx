import React from 'react';
import { Calculator, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-white p-2 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
              <Calculator className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-white font-bold text-xl">EmailROI</span>
          </div>
          <div className="flex gap-4">
            <a href="#calculator" className="text-white hover:text-blue-100">Calculator</a>
            <a href="#pricing" className="text-white hover:text-blue-100">Pricing</a>
            <a href="#tools" className="text-white hover:text-blue-100">Tools</a>
            <a href="#faq" className="text-white hover:text-blue-100">FAQ</a>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Email Marketing ROI Calculator
        </h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Maximize your email marketing returns with our advanced ROI calculator. Make data-driven decisions for your campaigns.
        </p>
      </div>
    </header>
  );
}