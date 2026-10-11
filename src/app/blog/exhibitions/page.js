'use client';

import Image from 'next/image';
import analog1 from '../../assets/dreams.jpg';
import analog2 from '../../assets/dreams.jpg';
import analog3 from '../../assets/dreams.jpg';


export default function ExhibitionsPage() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6 text-gray-300">
      <h1 className="text-3xl md:text-4xl font-semibold text-green mb-6">
        Dreams in Analog
      </h1>
      <p className="text-sm text-gray-400 mb-10">Written by Favor Leo — June 10, 2025</p>

      <div className="space-y-6 text-base leading-relaxed">
        <p>
          <strong>Dreams in Analog</strong> is a growing collection of charcoal drawings inspired
          by Christopher Nolan&apos;s masterpiece, <em>Inception</em>. Favor uses the idea of
          creating pieces based on his own understanding of the movie, diving into layers of the
          subconscious mind.
        </p>

        <p>
          Inception, on the other hand, extends beyond the concept of planting ideas into another
          human being that override their will. In Favor&apos;s words:
        </p>

        <blockquote className="border-l-4 border-green pl-4 italic text-gray-400">
          “Sometimes I wonder where my art is born from — how I come up with these ideas. Surely,
          there must be a source, divine or lost deep in the crevices of the ether. But this still
          remains an interesting question.”
        </blockquote>

        <p>
          These artworks explore the <em>dreamstate</em> — visualizing abstract moments, emotions,
          and fragmented memories experienced during sleep. Through layers of charcoal tones and
          surreal contrasts, Favor invites the viewer to step into the blurred space between dream
          and consciousness.
        </p>
      </div>

      {/* Exhibition Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src={analog1}
            alt="Dreams in Analog artwork 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src={analog2}
            alt="Dreams in Analog artwork 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          <Image
            src={analog3}
            alt="Dreams in Analog artwork 3"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <p className="mt-10 text-gray-400 text-sm text-center italic">
        “Dreams in Analog” continues to evolve — each piece a window into the ether where thought
        meets imagination.
      </p>
    </section>
  );
}
