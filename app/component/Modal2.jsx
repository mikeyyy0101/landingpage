'use client'
import Link from 'next/link';
import React, { useRef } from 'react';

const Modal2 = () => {

    const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const details = [
    {
      title: 'Customer Requests',
      description: 'Build what customers actually want',
      img: 'build.png',
    },
    {
      title: 'Powerful git workflows',
      description: 'Automate pull requests and commit workflows',
      img: 'automate.png',
    },
    {
      title: 'Linear Mobile',
      description: 'Move product work forward from anywhere',
      img: 'move-product.png',
    },
    {
      title: 'Linear Asks',
      description: 'Turn workplace requests into actionable issues',
      img: 'action.png',
    },
    {
      title: 'Linear integrations',
      description: '100+ ways to enhance your Linear experience',
      img: 'enhance.png',
    },
    {
      title: 'Figma integration',
      description: 'Bridge the gap between engineering and design',
      img: 'engineer.png',
    },
    {
      title: 'Built for developers',
      description: 'Build your own add-ons with the Linear API',
      img: 'linear-API.png',
    },
  ];

  return (
    <div>

    <article ref={scrollRef} className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide">
      {details.map((item, index) => (
          <div
          key={index}
          className="min-w-[250px] max-w-sm overflow-hidden shadow-lg p-4 my-box space-y-4 flex-shrink-0"
          >
          <img
            src={item.img}
            alt={item.title}
            className="grayscale hover:grayscale-0 w-full h-58 object-cover rounded-md"
            />
          <h2 className="font-bold text-gray-800">{item.title}</h2>
          <p>{item.description}</p>
          <Link href="/customer">
            <button className="text-2xl hover:border-none font-bold border-white/30 border hover:bg-white/30 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition">
              +
            </button>
          </Link>
        </div>
      ))}


    </article>
       {/* Scroll Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => scroll('left')}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          >
          ← Left
        </button>
        <button
          onClick={() => scroll('right')}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          >
          Right →
        </button>
      </div>
            </div>
  );
};

export default Modal2;
