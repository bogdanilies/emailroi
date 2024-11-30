import React from 'react';
import { calculatePricingTier } from '../utils/pricing';
import { pricingData } from '../data/pricing';

interface PricingTableProps {
  contacts: number;
}

export function PricingTable({ contacts }: PricingTableProps) {
  return (
    <div className="overflow-x-auto">
      <h3 className="text-xl font-semibold mb-6 text-center">
        Estimated Cost for {contacts.toLocaleString()} Contacts
      </h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#FFCC1D]/20">
            <th className="p-4 text-left">Provider</th>
            <th className="p-4 text-center">Plan Type</th>
            <th className="p-4 text-right">Monthly Cost</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(pricingData).map(([provider, data]) => (
            <tr key={provider} className="border-t hover:bg-[#FFCC1D]/10 transition-colors">
              <td className="p-4">
                <a 
                  href={data.website}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-black hover:text-gray-700 font-medium"
                >
                  {provider}
                </a>
              </td>
              <td className="p-4 text-center">
                {data.hasFreePlan && (
                  <a
                    href={data.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-2 py-1 text-xs bg-[#FFCC1D] text-black rounded-full hover:bg-[#FFB800] transition-colors mr-2"
                  >
                    Free Plan Available
                  </a>
                )}
                {data.hasTrial && (
                  <a
                    href={data.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-2 py-1 text-xs bg-[#FFCC1D]/20 text-black rounded-full hover:bg-[#FFCC1D]/30 transition-colors"
                  >
                    Free Trial Available
                  </a>
                )}
              </td>
              <td className="p-4 text-right font-medium">
                ${calculatePricingTier(provider, contacts)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}