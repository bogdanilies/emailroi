import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© {new Date().getFullYear()} Email ROI Calculator. Created by <a 
          href="https://inboxprofits.co" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#FFCC1D] hover:text-[#FFB800] transition-colors"
        >
          inboxprofits.co
        </a></p>
      </div>
    </footer>
  );
}