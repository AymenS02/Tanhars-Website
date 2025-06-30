import React from 'react';

export default function About() {
  return (
    <div id="about" className="w-full max-w-4xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
      <div>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <img
            src="/aboutPfp.jpeg"
            alt="About Pfp"
            className="w-32 sm:w-40 lg:w-[200px] rounded-full border-2"
          />
          <h1 className="text-center text-3xl font-bold mb-8 text-gray-100">
            Who is Tanhar Abu ‘Abdissalam Khan?
          </h1>
        </div>

        <div className="mt-6 text-gray-100 text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-center">
          <p className="mb-4">
            Ustadh Abu ‘Abdissalam has been a part time student for 20+ years.
            In that time, he has studied the ‘Ulum al-Ghayah and ‘Ulum al-Alah with
            senior students and mashayikh privately, in person, and at various
            online institutes. He has a special interest in Hanbali Fiqh and
            ‘Aqidah and continues to study and read on these topics. Ustadh Abu
            ‘Abdissalam has a passion for teaching and has a number of years of
            experience teaching privately one on one and to small groups.
          </p>
          <p>
            Professionally, Ustadh Abu ‘Abdissalam is an educator with almost 20
            years of teaching experience. He has taught classes from grades 1 to
            grade 12. He holds a Bachelor of Arts in Sociology and a Bachelor of
            Education.
          </p>
        </div>
      </div>
    </div>
  );
}