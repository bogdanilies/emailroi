import React from 'react';
import { pricingData } from '../data/pricing';

export function EmailTools() {
  const tools = [
    {
      name: "Klaviyo",
      description: "Best for ecommerce businesses with advanced segmentation needs",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cloud-awards.com%2Fklaviyo-logo%2F&psig=AOvVaw2OSNk7AgHgXshz7Q9VkiyG&ust=1733062020065000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODHp6KdhIoDFQAAAAAdAAAAABAE",
      features: ["Advanced segmentation", "Predictive analytics", "Multi-channel marketing"]
    },
    {
      name: "Omnisend",
      description: "Perfect for omnichannel marketing automation",
      image: "https://www.omnisend.com/wp-content/themes/omnisend/img/omnisend-logo.svg",
      features: ["SMS marketing", "Easy automation", "Pop-ups & forms"]
    },
    {
      name: "Active Campaign",
      description: "Ideal for businesses needing advanced automation",
      image: "https://www.activecampaign.com/wp-content/uploads/2019/12/activecampaign-logo-full.svg",
      features: ["Marketing automation", "CRM integration", "Sales automation"]
    },
    {
      name: "MailerLite",
      description: "Great for beginners and small businesses",
      image: "https://www.mailerlite.com/assets/logos/mailerlite.svg",
      features: ["User-friendly", "Affordable", "Landing pages"]
    },
    {
      name: "GoHighLevel",
      description: "All-in-one marketing platform for agencies",
      image: "https://assets.gohighlevel.com/logo/dark.svg",
      features: ["CRM integration", "White-label", "Multi-location"]
    }
  ];

  return (
    <section id="tools" className="py-16 bg-[#FFCC1D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Recommended Email Marketing Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-[#FFCC1D]/20">
              <div className="flex items-center justify-center mb-4 h-12">
                <img src={tool.image} alt={tool.name} className="h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-black">{tool.name}</h3>
              <p className="text-gray-600 mb-4 text-center">{tool.description}</p>
              <ul className="space-y-2 mb-4">
                {tool.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC1D]" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={pricingData[tool.name]?.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2 px-4 bg-gradient-to-r from-[#FFCC1D] to-[#FFB800] text-black font-medium rounded-lg hover:from-[#FFB800] hover:to-[#FFA600] transition-colors"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}