'use client';

import Image from 'next/image';
import profileImage from '../assets/pic.jpg';

const About = () => {
  return (
    <section id="about" className="w-full py-24 bg-dark">
      <div className="mx-auto max-w-[1150px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* === IMAGE === */}
        <div className="relative w-full h-[380px] md:h-[480px]">
          <Image
            src={profileImage}
            alt="Favor Ileogben portrait"
            fill
            priority
            className="object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* === TEXT CONTENT === */}
        <div className="text-neutral-400">
          <p className="uppercase tracking-widest text-sm text-green mb-3">
            About the Artist
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            Favor Ileogben
          </h2>

          {/* === BACKGROUND === */}
          <div className="space-y-5 leading-relaxed text-[15px] md:text-base">
            <p>
              Favor Ileogben (b. 2002, Lagos, Nigeria) is a multidisciplinary artist
              whose surrealist works explore dark themes layered with deep
              psychological meaning. Through his practice, Favor seeks to
              challenge perception and offer viewers a thought-provoking,
              introspective experience.
            </p>

            <p>
              His artistic journey began over six years ago, recreating images
              with graphite on paper. In 2020, his exposure to Sigmund Freud’s
              teachings on psychoanalysis became a major influence on his early
              work, shaping the emotional and conceptual foundation of his art.
            </p>

            <p>
              Years of experimentation led to his breakthrough in the NFT space,
              where his collections gained recognition from a global audience.
              Since then, Favor has participated in multiple group exhibitions
              across Europe and North America, culminating in his debut solo
              exhibition in 2024 titled <span className="italic text-white">“Dark Surrealism.”</span>
            </p>
          </div>

          {/* === STATEMENT === */}
          <div className="mt-10 pt-8 border-t border-neutral-800 space-y-5 leading-relaxed text-[15px] md:text-base">
            <p>
              For me, art is life — a blissful form of creative self-expression.
              My work is driven by a cohesive chain of subconscious thoughts
              blended with imagination. Through meticulous use of charcoal, I
              bring these ideas to life using illusion, light, form, and shadow.
            </p>

            <p>
              My artistry reflects emotional experiences from childhood and an
              inner desire for self-healing. By exploring themes such as anxiety,
              depression, fear, anger, and heartbreak, I create work rooted in
              shared human emotion.
            </p>

            <p>
              My creative process allows freedom — whether ideas emerge from
              layered thoughts or spontaneous impulses. Surrealism and
              psychoanalysis are ever-present, expressed through detailed eyes,
              abstract figures, geometric forms, and natural elements. My goal is
              to allow viewers define meaning for themselves — without words —
              and experience the work in a deeply personal way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
