'use client';

import Image from 'next/image';
import coverb from "../../assets/coverb.jpg";
import afro10 from '../../assets/afro10.jpg';
import arcane from '../../assets/arcane.jpg';
import day from '../../assets/day.jpg';
import demon from '../../assets/demon.jpg';
import bloom from '../../assets/bloom.jpg';


export default function AfroSurrealism() {
  return (
    
    <section className="bg-dark text-neutral-300 min-h-screen py-20 px-6">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-green">
          Blog and <span className="text-white">Publications</span>
        </h2>
      </div>

      {/* Blog Content */}
      <div className="max-w-5xl mx-auto space-y-12" data-aos="fade-up">
        <h3 className="text-3xl md:text-4xl font-semibold text-white">
          2022: An Art Journey
        </h3>
        <p className="italic text-sm text-gray-400">Written by Favor Leo</p>

        <div className="w-full h-[400px] relative rounded-2xl overflow-hidden my-6">
          <Image
            src={coverb}
            alt="2022 Art Journey"
            fill
            className="object-cover"
          />
        </div>

        <p className="leading-relaxed text-gray-400">
          Just like lighting up candles in a dark room, I find myself here in
          this very moment—bringing light back into darkness with charcoal and
          the sorcery of dark art. 2022 has been a surreal year for me, filled
          with experimentation, inspiration from artists like Adewale Mayowa,
          Photontide, and Tjo, and the support of friends and collectors who
          keep me motivated to evolve not only as a self-taught pencil artist
          but as a creative in general.
        </p>

        {/* Section: Art Evolution */}
        <div className="space-y-10 mt-12">
          <div>
            <h4 className="text-2xl text-green font-semibold mb-4">
              Art Evolution And Movements All Through The Year
            </h4>

            <h5 className="text-xl text-white font-semibold mb-2">
              My Afro Hair — <span className="italic text-gray-400">“Tariq”</span>
            </h5>
            <div className="w-full md:w-1/3 relative h-80 rounded-lg overflow-hidden mb-4">
              <Image src={afro10} alt="Tariq" fill className="object-cover" />
            </div>
            <p className="text-gray-400">
              This piece is personal—a cry against afro hair discrimination in
              schools and workplaces, especially in regions where dreadlocks or
              kinky hair are natural expressions of identity.
            </p>
          </div>

          <div>
            <h5 className="text-xl text-white font-semibold mb-2">
              Sci-Fi And Surreal Worlds —{' '}
              <span className="italic text-gray-400">“The Arcane Genesis, 2034”</span>
            </h5>
            <div className="w-full md:w-1/3 relative h-80 rounded-lg overflow-hidden mb-4">
              <Image src={arcane} alt="The Arcane Genesis" fill className="object-cover" />
            </div>
            <p className="text-gray-400">
              Using charcoal, I sought to create futuristic visual stories that
              merge science and dark magic, forming surreal worlds that provoke
              curiosity and emotion.
            </p>
          </div>

          <div>
            <h5 className="text-xl text-white font-semibold mb-2">
              The Birth Of Freerealism —{' '}
              <span className="italic text-gray-400">
                “Daydreaming” (NFT collected by Norcal_Guy)
              </span>
            </h5>
            <div className="w-full md:w-1/3 relative h-80 rounded-lg overflow-hidden mb-4">
              <Image src={day} alt="Daydreaming" fill className="object-cover" />
            </div>
            <p className="text-gray-400">
              Freerealism—a style of “free imagination”—inspires most of my
              pieces. This series takes a minimalistic approach while exploring
              surreal architectural forms.
            </p>
          </div>

          <div>
            <h5 className="text-xl text-white font-semibold mb-2">
              A Story About My Pain And Personal Demons —{' '}
              <span className="italic text-gray-400">
                “I Became The Demon” (NFT collected by Crypto_Mountain_Biker)
              </span>
            </h5>
            <div className="w-full md:w-1/3 relative h-80 rounded-lg overflow-hidden mb-4">
              <Image src={demon} alt="I Became The Demon" fill className="object-cover" />
            </div>
            <p className="text-gray-400">
              Here I began incorporating color, depicting demonic figures and
              cryptic symbols—visual representations of my struggles with
              depression and emotional conflict.
            </p>
          </div>

          <div>
            <h5 className="text-xl text-white font-semibold mb-2">
              Dark-Background Realms —{' '}
              <span className="italic text-gray-400">
                “The Late Bloomer” (NFT collected by Adub_P)
              </span>
            </h5>
            <div className="w-full md:w-1/3 relative h-80 rounded-lg overflow-hidden mb-4">
              <Image src={bloom} alt="The Late Bloomer" fill className="object-cover" />
            </div>
            <p className="text-gray-400">
              This one is emotional—it takes me back to 2020, when I first saw
              this style in a dream. It features charcoal-heavy contrasts with
              bright highlights that symbolize hope.
            </p>
          </div>
        </div>

        {/* Closing Remarks */}
        <div className="mt-16">
          <h5 className="text-2xl text-green font-semibold mb-4">
            Closing Remarks
          </h5>
          <p className="text-gray-400 leading-relaxed">
            The year was not without its challenges—balancing art, music, and
            writing; navigating the NFT space; dealing with insomnia and failure.
            Yet, every obstacle shaped my growth. To every artist out there:
            you can achieve whatever you put your mind to, no matter the
            circumstances. I’m grateful for 2022 and excited to see what 2023
            brings.
          </p>
        </div>
      
      </div>
     
    </section>
    
  );
}
