'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Third = () => {
  const words = [
    { icon: 'figma.svg', name: 'Figma' },
    { icon: 'linear.webp', name: 'Linear' },
    { icon: 'openai.png', name: 'OpenAI' },
    { icon: 'cursor.png', name: 'Cursor' },
    { icon: 'R.png', name: 'Remote' },
    { icon: 'perplexity.png', name: 'Perplexity' },
    { icon: 'notion.png', name: 'Notion' },
    { icon: 'vercel.webp', name: 'Vercel' },
    { icon: 'supercell.png', name: 'SUPERCELL' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 6) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const currentWords = words.slice(currentIndex, currentIndex + 6);
  const isShort = currentWords.length < 6;
  const finalWords = isShort
    ? [...currentWords, ...words.slice(0, 6 - currentWords.length)]
    : currentWords;

  return (
    <section aria-label="Customer logos carousel section" className="text-white w-full overflow-hidden flex flex-col justify-center items-center px-8 py-16">
      {/* Header */}
      <article className="text-center mb-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 md:text-white">
          Powering the world’s best product teams.
        </h1>
        <span className="text-sm md:text-lg text-gray-500">
          From next-gen startups to established enterprises.
        </span>
      </article>

      {/* Marquee (mobile only) */}
      <div className="block md:hidden h-16 overflow-hidden marquee-wrapper whitespace-nowrap">
        <div className="marquee-track flex">
   {[...words, ...words].map((word, index) => (
    <Link href="/customer"  key={`${word.name}-${index}`}>
  <span
    className="mx-4 text-xl font-semibold inline-block flex items-center"
  >

    <img
      src={word.icon}
      alt={word.name}
      className={`${index===3?'bg-white':'bg-black'} w-6 h-6 inline-block mr-2`}
    />
    {word.name}
  </span>
  </Link>
))}

        </div>
      </div>

      {/* Grid (desktop only) */}
      <Link href="/customer" className="hidden md:block w-full">
        <div className="group relative w-[90%] mx-auto grid grid-cols-3 md:grid-cols-3 xl:grid-cols-3 grid-rows-2 gap-4 p-4 text-center text-xl font-bold min-h-60 items-center justify-center rounded-lg shadow-md">
          {finalWords.map((word, index) => (
            <div key={index} className="py-2 text-white">
                <img
      src={word.icon}
      alt={word.name}
      className="w-6 h-6 inline-block mr-2"
    />{word.name}</div>
          ))}
          {/* Hover overlay */}
          <article className="absolute inset-0 backdrop-blur-sm flex justify-center items-center text-white text-xl font-bold hidden group-hover:flex transition-opacity duration-300">
            <button className="text-sm cursor-pointer border border-white/40 bg-gray-700/30 px-4 py-2 rounded-full transition hover:bg-white hover:text-black">
              Meet our customers &gt;
            </button>
          </article>
        </div>
      </Link>
    </section>
  );
};

export default Third;
