import React, { useState } from 'react';
import { Header } from './components/Header';
import { EcommerceCalculator } from './components/Calculator/EcommerceCalculator';
import { PricingTable } from './components/PricingTable';
import { EmailTools } from './components/EmailTools';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { calculateROI } from './utils/calculator';
import { motion } from 'framer-motion';

function App() {
  const [values, setValues] = useState({
    contacts: 1000,
    weeklyEmails: 2,
    openRate: 20,
    conversionRate: 2,
    monthlyGrowth: 5,
    currentSpending: 50,
    aov: 100,
  });

  const handleValueChange = (key: string, value: number) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const results = calculateROI(values);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <section id="calculator" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-gradient-to-br from-[#FFCC1D]/10 to-[#FFB800]/10">
                  <h2 className="text-2xl font-bold mb-6">Calculate Your Email Marketing ROI</h2>
                  <EcommerceCalculator values={values} onChange={handleValueChange} />
                </div>

                <motion.div 
                  className="p-8 bg-white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Your ROI Results</h2>
                  <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm text-gray-600">Monthly Revenue</p>
                      <p className="text-3xl font-bold text-gray-800">${results.monthlyRevenue}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm text-gray-600">Annual Revenue</p>
                      <p className="text-3xl font-bold text-gray-800">${results.annualRevenue}</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-[#FFCC1D] to-[#FFB800] rounded-xl">
                      <p className="text-sm opacity-80">Return on Investment</p>
                      <p className="text-3xl font-bold">{results.roi}%</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm text-gray-600">New Contacts per Year</p>
                      <p className="text-3xl font-bold text-gray-800">{results.projectedContacts}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Email Marketing Platform Pricing</h2>
            <PricingTable contacts={values.contacts} />
          </div>
        </section>

        <EmailTools />

        <section id="faq" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <FAQ />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;