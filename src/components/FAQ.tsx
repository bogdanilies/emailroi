import React from 'react';

export function FAQ() {
  const faqs = [
    {
      question: "What is Email Marketing ROI?",
      answer: "Email Marketing ROI (Return on Investment) is a metric that measures the profitability of your email marketing campaigns. It's calculated by subtracting the total cost of your email marketing campaign from the revenue generated, then dividing by the total cost and multiplying by 100."
    },
    {
      question: "How do I calculate Email Marketing ROI?",
      answer: "To calculate email marketing ROI, use this formula: ROI = ((Revenue - Investment) / Investment) x 100. Our calculator automates this process by considering factors like number of contacts, conversion rates, and average order value."
    },
    {
      question: "What is a good Email Marketing ROI?",
      answer: "A good email marketing ROI is typically 4200% or $42 for every dollar spent. However, this can vary significantly by industry, audience, and campaign type."
    },
    {
      question: "How can I improve my Email Marketing ROI?",
      answer: "Improve your email marketing ROI by: segmenting your audience, personalizing content, optimizing send times, A/B testing subject lines, maintaining list hygiene, and creating mobile-responsive designs."
    },
    {
      question: "What factors affect Email Marketing ROI?",
      answer: "Key factors include list size, email frequency, open rates, click-through rates, conversion rates, average order value, list growth rate, and campaign costs."
    },
    {
      question: "How often should I measure Email Marketing ROI?",
      answer: "Track your email marketing ROI monthly to identify trends and make data-driven decisions. Also measure ROI for individual campaigns to understand which strategies work best."
    },
    {
      question: "What's the difference between simple email and ecommerce ROI?",
      answer: "Simple email ROI typically focuses on lead generation and conversion values, while ecommerce ROI includes specific metrics like average order value and customer lifetime value."
    },
    {
      question: "How do I track Email Marketing ROI?",
      answer: "Use email marketing platforms' built-in analytics, integrate with your CRM, and set up proper UTM parameters for tracking. Our calculator helps estimate potential ROI based on your inputs."
    },
    {
      question: "What's a realistic conversion rate for email marketing?",
      answer: "Average email marketing conversion rates range from 1% to 5%, with some industries achieving higher rates. Focus on improving your specific baseline rather than industry averages."
    },
    {
      question: "How does list size impact Email Marketing ROI?",
      answer: "Larger lists typically offer more opportunities for conversion but may have higher costs. Focus on list quality over quantity for optimal ROI."
    }
  ];

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold mb-2 text-black">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}