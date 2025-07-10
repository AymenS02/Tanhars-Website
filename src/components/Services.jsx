import React, { useState } from 'react';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Qaidah and Qur'an for beginners",
      content: "Learn the fundamentals of Quranic recitation with proper Tajweed. Our beginner-friendly program starts with Qaidah (basic rules) and progresses to Quran reading, suitable for all ages with no prior experience required.",
      icon: "📖"
    },
    {
      title: "Arabic Grammar and Morphology",
      content: "Master the structure of the Arabic language through comprehensive lessons in grammar (Nahw) and morphology (Sarf). This course is essential for understanding the Quran and classical Islamic texts.",
      icon: "✍️"
    },
    {
      title: "Islamic Education",
      content: (
        <ul className="list-disc pl-5 text-black">
          <li><strong>Aqidah:</strong> Islamic creed and theology</li>
          <li><strong>Fiqh:</strong> Islamic jurisprudence and rulings</li>
          <li><strong>Hadith:</strong> Study of Prophetic traditions</li>
          <li><strong>Seerah:</strong> Biography of the Prophet (PBUH)</li>
          <li><strong>Islamic History:</strong> Lessons from Muslim civilizations</li>
        </ul>
      ),
      icon: "🕌"
    },
    {
      title: "Pre-Marital Counselling",
      content: "Prepare for a successful Islamic marriage with guidance on spiritual, emotional, and practical aspects of married life. Sessions cover communication, conflict resolution, and Islamic marital rights and responsibilities.",
      icon: "💍"
    },
    {
      title: "One on One Counselling",
      content: "Personalized counseling sessions addressing spiritual, emotional, and personal development from an Islamic perspective. Confidential support for life challenges, mental health, and spiritual growth.",
      icon: "🧠"
    },
    {
      title: "Education Consulting and Tutoring",
      content: (
        <ul className="list-disc pl-5 text-black">
          <li>Academic advising for Islamic studies</li>
          <li>Curriculum development consultation</li>
          <li>Personalized tutoring in various Islamic sciences</li>
          <li>Teaching methodology training</li>
          <li>Educational resource guidance</li>
        </ul>
      ),
      icon: "🎓"
    }
  ];

  return (
    <div id="services" className="w-full max-w-2xl mx-auto mt-20 px-4">
      <h1 className="text-center text-3xl font-bold mb-8 text-gray-100">Services I Offer</h1>
      <div className="space-y-4">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="w-full p-5 text-left bg-[url('/barBg.jpg')] bg-cover bg-center bg-no-repeat flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-lg text-gray-100">{item.title}</span>
              </div>
              <svg
                className={`w-5 h-5 text-gray-100 transition-transform duration-300 ease-in-out ${
                  activeIndex === index ? 'transform rotate-180' : ''
                }`}
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
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 bg-yellow-300 border-t border-gray-100 shadow-inner-2xl">
                {typeof item.content === 'string' ? (
                  <p className="text-black">{item.content}</p>
                ) : (
                  item.content
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}