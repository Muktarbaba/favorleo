'use client';

import Image from 'next/image';
import banner from "../assets/pic2.jpg";
import profileImage from '../assets/pic.jpg'; 

const Banner = () => {
  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row">
      

      {/* Text Content */}
      <div className="relative z-20 flex flex-1 items-center justify-center px-6  md:pt-0 md:justify-start md:pl-10 bg-gradient-to-r from-transparent via-green/10 to-transparent md:from-white md:bg-none">
        <div className="max-w-md text-center pl-4 pt-22 md:pl-22 md:text-left md:pt-32">
          <p className="text-m uppercase text-green md:text-green">Hello</p>
          <h1 className="text-5xl md:text-[56px] font-normal font-edu leading-tight text-white md:text-black">
            I&apos;m Favor Leo
            <br />
            Visual Artist and Creative
            <br />
            From Nigeria.
          </h1>
          <div className="mt-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
          <a href="/store">
            <button className="w-80 md:w-auto h-10 px-6 py-2 bg-white text-brandgreen cursor-pointer md:border border-brandgreen text-sm font-medium hover:bg-black hover:text-white transition">
              Store
            </button>
            </a>
            <a href="#portfolio">
            <button className="w-80 md:w-auto h-10 px-6 py-2 md:bg-black bg-transparent border border-brandgreen cursor-pointer text-white text-sm font-medium hover:bg-green transition">
              View Portfolio
            </button>
            </a>
          </div>
        </div>
      </div>


      {/* Background Image - only visible on small screens */}
      <div className="absolute inset-0 md:relative md:w-1/2 h-full z-0">
        <Image
          src={profileImage}
          alt="Favor Leo Art"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 md:opacity-60 z-10"></div>
      </div>
    </div>
  );
};

export default Banner;
