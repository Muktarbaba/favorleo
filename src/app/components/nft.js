'use client';

import Link from 'next/link';
import Image from 'next/image';
import nft1 from '../assets/open.jpg';
import nft2 from '../assets/superrare.svg';
import nft3 from '../assets/foundo.jpg';

const NftShowcase = () => {
  const nfts = [
   
    {
      title: 'Superrare',
      image: nft2,
      link: 'https://superrare.com/favorleo',
    },
    
  ];

  return (
    <section id="nft" className="bg-dark py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl  font-semibold text-green mb-12">
          Featured <span className="text-white">NFTs</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 gap-8">
          {nfts.map((nft, index) => (
            <Link key={index} href={nft.link}>
              <div className="group w-60 cursor-pointer transform transition hover:scale-105">
                <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-lg bg-white">
                  <Image
                    src={nft.image}
                    alt={nft.title}
                    fill
                    className="object-contain group-hover:opacity-90 transition"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 text-white text-lg font-semibold group-hover:text-green">
                  {nft.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NftShowcase;
