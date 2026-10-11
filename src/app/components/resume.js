'use client';

import React from 'react';

const education = [
  {
    year: '2018',
    degree: 'Bachelor of Science & Building Technology',
    institution: 'Ahmadu Bello University, Zaria, Nigeria',
  },
  
];

const exhibitions = [
  {
    year: '2024',
    title: 'Dark Surealism',
    location: 'Dolapo Obat Gallery, Maitama, Abuja FCT',
  },
  {
    year: '2023',
    title: 'NFT.NYC',
    location: 'Artists village (North Javits, Hudson Yards) New York, New York',
  },
  {
    year: '2023',
    title: 'HYNOS GROUP EXHIBITION',
    location: 'Via Del Corso, Rome, Italy',
  },
  {
    year: '2023',
    title: 'HYNOS GROUP EXHIBITION',
    location: 'Villa Borghese, National Gallery Of Modern Art, Rome, Italys',
  },
];

const Resume = () => {
  return (
    <section id="resume" className="bg-dark py-20 px-4">
      <div className="max-w-[1000px] mx-auto text-white ">
        <h2 className="text-4xl font-semibold  text-center text-green mb-16">Resume</h2>

        <div className="grid md:grid-cols-2 gap-12 ">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-b border-green pb-2 inline-block">
              Education
            </h3>
            <div className="relative pl-6 border-l-4 border-green">
              {education.map((edu, index) => (
                <div key={index} className="mb-10 ml-4 relative">
                  <div className="absolute -left-6 top-1.5 w-4 h-4 bg-green rounded-full border-2 border-white"></div>
                  <p className="text-sm text-gray-400">{edu.year}</p>
                  <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  <p className="text-sm text-gray-300">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Exhibitions */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-b border-green pb-2 inline-block">
              Exhibitions
            </h3>
            <div className="relative pl-6 border-l-4 border-green">
              {exhibitions.map((exhibit, index) => (
                <div key={index} className="mb-10 ml-4 relative">
                  <div className="absolute -left-6 top-1.5 w-4 h-4 bg-green rounded-full border-2 border-white"></div>
                  <p className="text-sm text-gray-400">{exhibit.year}</p>
                  <h4 className="text-lg font-semibold">{exhibit.title}</h4>
                  <p className="text-sm text-gray-300">{exhibit.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
