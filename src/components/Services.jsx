import React, { useState } from 'react';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Quran Classes",
      content: "Join our Quran classes to learn proper recitation, memorization, and understanding of the Quran. Suitable for all levels, with experienced instructors guiding you every step of the way.",
      icon: "📖"
    },
    {
      title: "Family Counselling", 
      content: "Our family counselling services provide a safe and supportive space to address challenges, improve communication, and strengthen relationships within the household.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "One-on-One Counselling",
      content: "Personalized one-on-one counselling sessions focused on your individual needs. Whether you're facing stress, anxiety, or personal struggles, our trained counsellors are here to help.",
      icon: "🧠"
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-20 px-4">
      <h1 className="text-center text-3xl font-bold mb-8 text-gray-100">Services I Offer</h1>
      <div className="space-y-4">
        {accordionItems.map((item, index) => (
          <div 
            key={index} 
            className="border-2 border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="w-full p-5 text-left bg-[url('/barBg.jpg')]  bg-cover bg-center bg-no-repeat flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-lg text-gray-100">{item.title}</span>
              </div>
              <svg 
                className={`w-5 h-5 text-gray-100 transition-transform duration-300 ease-in-out ${activeIndex === index ? 'transform rotate-180' : ''}`}
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
              <div className="p-5 bg-yellow-300 border-t border-gray-100 shadow-inner-2xl"> 
                <p className="text-black">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}