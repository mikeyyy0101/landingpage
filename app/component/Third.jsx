'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Third = () => {
  const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 6) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentWords = words.slice(currentIndex, currentIndex + 6);
  const isShort = currentWords.length < 6;
  const finalWords = isShort
    ? [...currentWords, ...words.slice(0, 6 - currentWords.length)]
    : currentWords;


  return (
    <section className="text-white w-full overflow-hidden flex flex-col justify-center items-center"> 

      {/* Mobile view - animated marquee */}
      <article className='flex md:flex-col lg:flex-col text-center'>

      <h1 className="text-gray-500 sm:font-semibold sm:text-gray-500 md:text-white lg:text-2xl md:text-2xl lg:text-white xl:text-white">
      Powering the world’s best product teams. 
       </h1>
      <span className='text-gray-500 md:text-2xl lg:text-2xl'> From next-gen startups to established enterprises.</span>
      </article>


      <article className="w-full overflow-hidden">
  {/* 👇 Marquee: shows up on small & medium screens (below lg) */}
  <div className="block md:hidden lg:hidden marquee-wrapper text-white h-16 flex items-center">
    <div className="marquee-track">
     <Link href='/customer'> {[...words, ...words].map((word, index) => (
   <span
   key={index}
   className="mx-4 text-3xl sm:text-xl md:text-4xl lg:text-5xl font-semibold inline-block"
 >
   {word}
 </span>
 
      ))}
      </Link>
    </div>
  </div>

  {/* 👇 Grid: only for large screens and above */}
    <Link href='/customer'>
  <div className="group relative w-[70%] mx-auto hidden md:grid lg:grid grid-cols-3 xl:grid-cols-3 grid-rows-3 xl:grid-rows-2 gap-4 p-4 text-center text-base sm:text-lg md:text-xl font-semibold text-white min-h-60 items-center justify-center rounded-lg shadow-md">
  {finalWords.map((word, index) => (
    <div key={index} className="py-2">{word}</div>
  ))}
  {/* Hover Box - appears on hover */}
  <article className="absolute inset-0 backdrop-blur-sm flex justify-center items-center text-white text-xl font-bold hidden group-hover:flex transition-opacity duration-300">
    <button className=' text-sm cursor-pointer border-0.5 bg-gray-700/30 rounded-[20] p-2'>Meet our customers{'>'}</button>
  </article>
</div>
  </Link>
</article>

    </section>
  );
};

export default Third;
