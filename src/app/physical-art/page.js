'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


/* === IMAGE IMPORTS === */
import Art1 from '../assets/blind.jpg';
import Art1Physical from '../assets/blindart.jpg';

import Art2 from '../assets/me.jpg';
import Art2Physical from '../assets/meart.jpg';

import Art3 from '../assets/chaos.jpg';
import Art3Physical from '../assets/chaosart.jpg';

import Art4 from '../assets/stareart.jpg';
import Art4Physical from '../assets/stareart.jpg';

import Art5 from '../assets/20251.jpg';
import Art5Physical from '../assets/blackart.jpg';

import Art6 from '../assets/20252.jpg';
import Art6Physical from '../assets/figureart.jpg';

import Art7 from '../assets/20253.jpg';
import Art7Physical from '../assets/timeart.jpg';

import Art8 from '../assets/20256.jpg';
import Art8Physical from '../assets/egoart.jpg';

/* === ARTWORK DATA === */
const artworks = [
  {
    title: 'The Blind Man sees Again ',
    year: '2026',
    dimensions: ' 2 by 3ft (frame option included)  ',
    medium: ' Acrylic and charcoal on canvas',
    description:
      'The Blind man sees again, with all curiosity we observe him, grasping at his burning pain, rewarded with an awakening of his own soul.',
    images: [Art1, Art1Physical],
  },
  {
    title: 'Me as a Passenger in my own Mind ',
    year: '2026',
    dimensions: ' 2 by 3ft (frame option included)',
    medium: 'Acrylic and charcoal on canvas',
    description:
      '“It’s like living in your head for once and witnessing all the chaos that exist inside. there is no choice of turning back, no regret, no fear, and no guilt. just you, watching everything unfold as your plane of life pierces through the clouds.”',
    images: [Art2, Art2Physical],
  },
  {
    title: 'Chaos and Persistence ',
    year: '2026',
    dimensions: ' 2 by 3ft (frame option included)  ',
    medium: 'Acrylic and charcoal on canvas',
    description:
      ' “The challenges brought forth in the game of life, the flames keeps burning. But the player still plays regardless.”',
    images: [Art3, Art3Physical],
  },
  {
    title: 'Stare',
    year: '2026',
    dimensions: ' 2 by 3ft (frame option included)  ',
    medium: 'Acrylic and charcoal on canvas',
    description:
      ' “Stare” means to look fixedly and intently at someone or something for a long period of time, usually with your eyes wide open. In this context, to “stare” is to observe the situation of your psyche and choosing where to fix your mind’s eye at. ',
    images: [Art4, Art4Physical],
  },
  {
    title: 'The Black Widow',
    year: '2025',
    dimensions: ' 50 x 40.3 x 2.1cm (framed) )  ',
    medium: 'charcoal and graphite on canvas',
    description:
      'The Black Widow is a metonymy for the Black Widow spider. It shows a divine feminine energy, which drives intuition and creativity. Here, you will either become consumed by your shadow, or weave yourself into it, see it for what it is, and carve out the little light left in you in order to find your pathway.',
    images: [Art5, Art5Physical],
  },
  {
    title: 'Figuring it Out',
    year: '2025',
    dimensions: ' 50 x 40.3 x 2.1cm (framed)   ',
    medium: 'charcoal and graphite on canvas',
    description:
      'From graduating college, to finding your path, to reinventing your path. From losing friends and making new ones. From loving hard to feeling detached. From living out loud, to finding peace in solitude. We all are just trying to figure it out. Never too late and never too early. ',
    images: [Art6, Art6Physical],
  },
  {
    title: 'Time is Running Out of Me',
    year: '2025',
    dimensions: ' 50 x 40.3 x 2.1cm (framed)   ',
    medium: 'charcoal and graphite on canvas',
    description:
      '“Time waits for no one,” they say. But I wait for things to pass me by. I procrastinate the things that would bring me joy. Not because I am lazy, but because I just love to wait. Wait, waiting until I fade away',
    images: [Art7, Art7Physical],
  },
  {
    title: 'The Ego (Ego Alive)',
    year: '2025',
    dimensions: ' 50 x 40.3 x 2.1cm (framed)   ',
    medium: 'charcoal and graphite on canvas',
    description:
      ' Ego Alive’ shows the existence of the ego, which takes the form of a large shadow. This shadow covers us, protects us from harm and also ourselves. But we often turn against it and use its powers to elevate our pride, and justify our self-betrayal. This goes on, until it consumes us, and the people around us, till we become blind to its lingering existence, forever.  ',
    images: [Art8, Art8Physical],
  }
];

export default function PhysicalArt() {
  const [slideIndexes, setSlideIndexes] = useState(
    artworks.map(() => 0)
  );

  const [lightbox, setLightbox] = useState(null);

  /* === CHANGE IMAGE FOR INDIVIDUAL ARTWORK === */
  const changeSlide = (artworkIndex, direction) => {
    setSlideIndexes((prev) => {
      const newIndexes = [...prev];
      const currentIndex = prev[artworkIndex];
      const totalImages = artworks[artworkIndex].images.length;

      newIndexes[artworkIndex] =
        (currentIndex + direction + totalImages) % totalImages;

      return newIndexes;
    });
  };

  /* === LIGHTBOX === */
  const openLightbox = (artworkIndex) => {
    setLightbox({
      artworkIndex,
      imageIndex: slideIndexes[artworkIndex],
    });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const showLightboxPrev = () => {
    setLightbox((prev) => {
      if (!prev) return null;

      const artwork = artworks[prev.artworkIndex];
      const totalImages = artwork.images.length;

      return {
        ...prev,
        imageIndex:
          (prev.imageIndex - 1 + totalImages) % totalImages,
      };
    });
  };

  const showLightboxNext = () => {
    setLightbox((prev) => {
      if (!prev) return null;

      const artwork = artworks[prev.artworkIndex];
      const totalImages = artwork.images.length;

      return {
        ...prev,
        imageIndex:
          (prev.imageIndex + 1) % totalImages,
      };
    });
  };

  /* === KEYBOARD CONTROLS === */
  useEffect(() => {
    const handleKey = (e) => {
      if (!lightbox) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showLightboxPrev();
      if (e.key === 'ArrowRight') showLightboxNext();
    };

    window.addEventListener('keydown', handleKey);

    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  return (
    
    <section className="bg-dark py-20 min-h-screen">
      <div className="max-w-[1150px] mx-auto px-4">
  
       {/* HEADER */}
<div className="mb-16">

  {/* BACK TO HOME BUTTON */}
  <div className="mb-8">
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-neutral-400 hover:text-green transition-colors duration-300 text-sm"
    >
      <span className="text-xl" aria-hidden="true">←</span>
      <span>Back to Home</span>
    </Link>
  </div>

    {/* PAGE TITLE */}
    <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-green">
        Physical <span className="text-white">Artwork</span>
        </h1>

        <p className="text-neutral-400 max-w-2xl mx-auto mt-4">
        These are firsthand one of ones created by Favor Leo.
        Each piece is signed and includes a Certificate of Authenticity.
        </p>
    </div>

    </div>

        {/* ARTWORKS */}
        <div className="space-y-24">

          {artworks.map((artwork, index) => {
            const currentImage = slideIndexes[index];

            return (
              <article
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >

                {/* ================= IMAGE SLIDER ================= */}
                <div className="flex justify-center">

                  <div className="relative w-full max-w-[420px]">

                    {/* IMAGE */}
                    <div
                      onClick={() => openLightbox(index)}
                      className="relative overflow-hidden rounded-lg cursor-pointer group bg-neutral-900"
                    >
                      <Image
                        src={artwork.images[currentImage]}
                        alt={`${artwork.title} - image ${currentImage + 1}`}
                        className="w-full h-auto max-h-[520px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        placeholder="blur"
                      />

                      {/* LEFT ARROW */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          changeSlide(index, -1);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl hover:bg-green transition"
                        aria-label="Previous image"
                      >
                        ‹
                      </button>

                      {/* RIGHT ARROW */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          changeSlide(index, 1);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl hover:bg-green transition"
                        aria-label="Next image"
                      >
                        ›
                      </button>
                    </div>

                    {/* SLIDE INDICATORS */}
                    <div className="flex justify-center gap-2 mt-4">
                      {artwork.images.map((_, imageIndex) => (
                        <button
                          key={imageIndex}
                          type="button"
                          onClick={() => {
                            setSlideIndexes((prev) => {
                              const updated = [...prev];
                              updated[index] = imageIndex;
                              return updated;
                            });
                          }}
                          className={`w-2 h-2 rounded-full transition ${
                            currentImage === imageIndex
                              ? 'bg-green'
                              : 'bg-neutral-600'
                          }`}
                          aria-label={`View image ${imageIndex + 1}`}
                        />
                      ))}
                    </div>

                    {/* IMAGE LABEL */}
                    <p className="text-center text-neutral-500 text-xs mt-2">
                      {currentImage === 0
                        ? 'Artwork'
                        : 'Physical piece'}
                    </p>

                  </div>
                </div>

                {/* ================= DETAILS ================= */}
                <div className="text-white">

                  <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    {artwork.title}
                  </h2>

                  <div className="space-y-3 text-sm">

                    {/* YEAR */}
                    <div className="flex">
                      <span className="text-green w-32">
                        Year
                      </span>

                      <span className="text-neutral-300">
                        {artwork.year}
                      </span>
                    </div>

                    {/* DIMENSIONS */}
                    <div className="flex">
                      <span className="text-green w-32">
                        Dimensions
                      </span>

                      <span className="text-neutral-300">
                        {artwork.dimensions}
                      </span>
                    </div>

                    {/* MEDIUM */}
                    <div className="flex">
                      <span className="text-green w-32">
                        Medium
                      </span>

                      <span className="text-neutral-300">
                        {artwork.medium}
                      </span>
                    </div>

                  </div>

                  {/* DESCRIPTION */}
                  <div className="mt-8">
                    <h3 className="text-green text-sm mb-2">
                      Description
                    </h3>

                    <p className="text-neutral-400 leading-7">
                      {artwork.description}
                    </p>
                  </div>

                  {/* CONTACT BUTTON */}
                  <a
                    href={`mailto:favorleoart@gmail.com?subject=Enquiry%20about%20${encodeURIComponent(
                      artwork.title
                    )}`}
                    className="inline-block mt-8 bg-green text-dark font-medium px-6 py-3 rounded-lg hover:opacity-90 transition"
                  >
                    Interested in this piece?
                  </a>

                </div>

              </article>
            );
          })}

        </div>
      </div>

      {/* ================= LIGHTBOX ================= */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >

            <Image
              src={
                artworks[lightbox.artworkIndex].images[
                  lightbox.imageIndex
                ]
              }
              alt={artworks[lightbox.artworkIndex].title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />

            {/* CLOSE */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl bg-black/50 w-10 h-10 rounded-full hover:bg-green"
            >
              &times;
            </button>

            {/* PREVIOUS */}
            <button
              onClick={showLightboxPrev}
              className="absolute top-1/2 left-6 -translate-y-1/2 text-white text-3xl bg-black/50 px-4 py-2 rounded-full hover:bg-green"
            >
              ‹
            </button>

            {/* NEXT */}
            <button
              onClick={showLightboxNext}
              className="absolute top-1/2 right-6 -translate-y-1/2 text-white text-3xl bg-black/50 px-4 py-2 rounded-full hover:bg-green"
            >
              ›
            </button>

            {/* TITLE */}
            <div className="text-center mt-4">
              <h2 className="text-white text-xl font-semibold">
                {artworks[lightbox.artworkIndex].title}
              </h2>

              <p className="text-neutral-400 text-sm mt-1">
                {artworks[lightbox.artworkIndex].year}
              </p>

              <p className="text-neutral-500 text-xs mt-1">
                Image {lightbox.imageIndex + 1} of{' '}
                {artworks[lightbox.artworkIndex].images.length}
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}