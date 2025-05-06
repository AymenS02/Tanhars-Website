import React, { useState } from 'react';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Quran Classes",
      content: "Custom website development tailored to your specific needs. We create responsive, user-friendly sites that look great on all devices and help drive conversions.",
      icon: "💻"
    },
    {
      title: "Family Counselling", 
      content: "Creating beautiful, intuitive interfaces that delight your users. Our design process focuses on user research, wireframing, and iterative improvements to deliver exceptional experiences.",
      icon: "🎨"
    },
    {
      title: "One-on-One Counselling",
      content: "Comprehensive digital marketing strategies to help your business grow. From SEO and content marketing to social media management and PPC campaigns that deliver measurable results.",
      icon: "📈"
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">Services I Offer</h1>
      <div className="space-y-4">
        {accordionItems.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="w-full p-5 text-left bg-white hover:bg-gray-50 transition-all duration-300 flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-lg text-gray-800">{item.title}</span>
              </div>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out ${activeIndex === index ? 'transform rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 bg-gray-50 border-t border-gray-100">
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}