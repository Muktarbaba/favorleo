'use client';

import Image from 'next/image';
import exhibitionImg from '../../assets/blog3.jpg';
import dark1 from '../../assets/dark1.jpg';
import dark2 from '../../assets/dark2.jpg';
import dark3 from '../../assets/dark3.jpg';
import dark4 from '../../assets/dark4.jpg';
import dark5 from '../../assets/dark5.jpeg';


export default function CreativeProcess() {
  return (
    
    <section className="bg-dark text-neutral-300 min-h-screen py-20 px-6">
      
      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-green">
          Blog and <span className="text-white">Publications</span>
        </h2>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto space-y-10" data-aos="fade-up">
        <h3 className="text-3xl md:text-4xl font-semibold text-white">
          Dark Surrealism: A Solo Exhibition
        </h3>
        <p className="italic text-sm text-gray-400">Written by Favor Leo</p>

        {/* Header Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden my-6">
          <Image
            src={exhibitionImg}
            alt="Dark Surrealism Exhibition Cover"
            fill
            className="object-cover"
          />
        </div>

        <p className="leading-relaxed text-gray-400">
          <strong>Dark Surrealism</strong>, a subgenre of surrealism, challenges
          conventional perceptions by delving into themes of mortality, fear,
          and the unconscious mind. Viewers are invited to confront their own
          anxieties and unspoken thoughts as the artworks evoke raw emotion and
          introspection.
        </p>

        <p className="leading-relaxed text-gray-400">
          This exhibition, held at <strong>Dolapo Obat Gallery</strong> on{' '}
          <strong>December 10–11, 2024</strong>, embodies the essence of darkness
          and light through a masterful interplay of charcoal and acrylic. The
          textures, tones, and contrasts reflect the complexities of the human
          psyche — illustrating how art can transcend fear to reveal truth and
          beauty within the unknown.
        </p>

        <p className="leading-relaxed text-gray-400">
          <em>
            Each piece acts as a mirror to the subconscious, allowing the
            audience to question what lies beneath the surface of the ordinary.
            Dark Surrealism is not just a visual experience — it is an emotional
            and spiritual confrontation.
          </em>
        </p>

        {/* Exhibition Gallery */}
        <div className="mt-16">
          <h4 className="text-2xl font-semibold text-green mb-6 text-center">
            Exhibition Gallery
          </h4>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {[dark1, dark2, dark3, dark4, dark5].map((img, idx) => (
              <div
                key={idx}
                className="relative w-full h-64 rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300"
              >
                <Image
                  src={img}
                  alt={`Exhibition Artwork ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-gray-400 text-sm">
            *Selections from the Dark Surrealism solo exhibition series*
          </p>
        </div>

        {/* Closing */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            <strong>Exhibition:</strong> Dolapo Obat Gallery, Lagos <br />
            <strong>Date:</strong> December 10–11, 2024
          </p>
        </div>
      
      </div>
    </section>
  );
}
