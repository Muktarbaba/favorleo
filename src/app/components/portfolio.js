'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

/* === IMAGE IMPORTS === */
import A20221 from '../assets/20221.jpg';
import A20222 from '../assets/20222.jpg';
import A20223 from '../assets/20223.jpg';
import A20224 from '../assets/20224.jpg';
import A20225 from '../assets/20225.jpg';
import A20226 from '../assets/20226.jpg';

import A20231 from '../assets/20231.jpg';
import A20232 from '../assets/20232.jpg';
import A20233 from '../assets/20233.jpg';
import A20234 from '../assets/20234.jpg';
import A20235 from '../assets/20235.jpg';
import A20236 from '../assets/20236.jpg';

import A20241 from '../assets/20241.jpg';
import A20242 from '../assets/20242.jpg';
import A20243 from '../assets/20243.jpg';
import A20244 from '../assets/20244.jpg';
import A20245 from '../assets/20245.jpg';
import A20246 from '../assets/20246.jpg';
import A20247 from '../assets/20247.jpg';
import A20248 from '../assets/20248.jpg';

import A20251 from '../assets/20251.jpg';
import A20252 from '../assets/20252.jpg';
import A20253 from '../assets/20253.jpg';
import A20254 from '../assets/20254.jpg';
import A20255 from '../assets/20255.jpg';
import A20256 from '../assets/20256.jpg';
import A20257 from '../assets/20257.jpg';

/* === DATA === */
const portfolioItems = [
  { year: '2022', image: A20221 },
  { year: '2022', image: A20222 },
  { year: '2022', image: A20223 },
  { year: '2022', image: A20224 },
  { year: '2022', image: A20225 },
  { year: '2022', image: A20226 },

  { year: '2023', image: A20231 },
  { year: '2023', image: A20232 },
  { year: '2023', image: A20233 },
  { year: '2023', image: A20234 },
  { year: '2023', image: A20235 },
  { year: '2023', image: A20236 },

  { year: '2024', image: A20241 },
  { year: '2024', image: A20242 },
  { year: '2024', image: A20243 },
  { year: '2024', image: A20244 },
  { year: '2024', image: A20245 },
  { year: '2024', image: A20246 },
  { year: '2024', image: A20247 },
  { year: '2024', image: A20248 },

  { year: '2025', image: A20251 },
  { year: '2025', image: A20252 },
  { year: '2025', image: A20253 },
  { year: '2025', image: A20254 },
  { year: '2025', image: A20255 },
  { year: '2025', image: A20256 },
  { year: '2025', image: A20257 },
];

const years = ['All', '2025', '2024', '2023', '2022'];

export default function Portfolio() {
  const [selectedYear, setSelectedYear] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  /* === FILTERED FLAT LIST (for lightbox navigation) === */
  const flatItems = useMemo(() => {
    return selectedYear === 'All'
      ? portfolioItems
      : portfolioItems.filter(item => item.year === selectedYear);
  }, [selectedYear]);

  /* === GROUPED BY YEAR (for rendering headings) === */
  const groupedByYear = useMemo(() => {
    return flatItems.reduce((acc, item) => {
      if (!acc[item.year]) acc[item.year] = [];
      acc[item.year].push(item);
      return acc;
    }, {});
  }, [flatItems]);

  /* === LIGHTBOX CONTROLS === */
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () =>
    setLightboxIndex((prev) =>
      prev > 0 ? prev - 1 : flatItems.length - 1
    );

  const showNext = () =>
    setLightboxIndex((prev) => (prev + 1) % flatItems.length);

  /* === KEYBOARD SUPPORT === */
  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, flatItems.length]);

  return (
    <section id="portfolio" className="bg-dark py-20">
      <div className="max-w-[1150px] mx-auto px-4">

        {/* === HEADER === */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-green">
            Featured <span className="text-white">Portfolio</span>
          </h2>
        </div>

        {/* === STICKY YEAR DROPDOWN === */}
        <div className="sticky top-16 z-30 bg-dark/90 backdrop-blur border-b border-neutral-800 py-4 mb-12 flex justify-center">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
           className="bg-dark border border-neutral-600 text-white px-5 py-3 rounded-lg text-center focus:outline-none focus:border-green"

          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year === 'All' ? 'All Years' : year}
              </option>
            ))}
          </select>
        </div>

        {/* === YEAR GROUPS === */}
        {Object.entries(groupedByYear)
          .sort(([a], [b]) => b.localeCompare(a))
          .map(([year, items]) => {
            const startIndex = flatItems.findIndex(i => i.year === year);

            return (
              <div key={year} className="mb-20">

                {/* YEAR HEADING */}
                <h3 className="text-2xl md:text-3xl font-semibold text-green mb-8 border-b border-neutral-700 pb-2">
                  {year}
                </h3>

                {/* IMAGE GRID */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => openLightbox(startIndex + i)}
                      className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer"
                    >
                      <Image
                        src={item.image}
                        alt=""
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                        placeholder="blur"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>

      {/* === LIGHTBOX === */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={flatItems[lightboxIndex].image}
              alt=""
              className="w-full h-auto object-contain rounded-lg"
            />

            {/* CLOSE */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              &times;
            </button>

            {/* PREV */}
            <button
              onClick={showPrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-2xl bg-black/50 px-3 py-1 rounded-full"
            >
              ‹
            </button>

            {/* NEXT */}
            <button
              onClick={showNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-2xl bg-black/50 px-3 py-1 rounded-full"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
