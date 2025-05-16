'use client'
import React, { useState } from 'react'

const Eight = () => {
  const images = ['collaborative-document.png', 'collect-feedback.png', 'text-issues.png'];

  const details = [
    {
      title: 'Initiatives',
      description: 'Coordinate strategic product efforts.',
    },
    {
      title: 'Cross-team projects',
      description: 'Collaborate across teams and departments.',
    },
    {
      title: 'Milestones',
      description: 'Break projects down into concrete phases.',
    },
    {
        title:'Progress insights',
        description:'Track scope, velocity, and progress over time.',
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <section className=' border-t border-white/30 px-4 py-20 flex flex-col mt-20 items-center gap-8'>
      <h1 className="text-xl md:text-2xl font-semibold text-center">
        Ideate and specify what to build next
      </h1>

      <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-6 w-full max-w-5xl'>

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <button onClick={() => handleClick(0)} className="p-4 rounded shadow hover:bg-gray-200 hover:text-black transition">
            <h2 className="text-base md:text-lg">Collaborative documents</h2>
          </button>
          <button onClick={() => handleClick(1)} className="p-4 rounded shadow hover:bg-gray-200 hover:text-black transition">
            <h2 className="text-base md:text-lg">Inline comments</h2>
          </button>
          <button onClick={() => handleClick(2)} className="p-4 rounded shadow hover:bg-gray-200 hover:text-black transition">
            <h2 className="text-base md:text-lg">Text-to-issue commands</h2>
          </button>
        </div>

        {/* Image + Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-4">
          <div className="w-full max-w-sm aspect-square my-box rounded overflow-hidden">
            <img
              src={images[selectedIndex]}
              alt="Displayed"
              className="my-box2 w-full h-full object-cover opacity-90 transition duration-300 ease-in-out"
            />
          </div>

          {/* Info */}
        </div>
      </div>
          <article className=" px-4 md:px-45 md:flex sm:grid sm:grid-cols-3  border-t border-white/30 mt-10">
           {details.map((detail,index)=>(
            <div key={index} className='w-full flex flex-col md:px-16.5 gap-5 mt-10'>
                <h1 className='text-white/70 font-semibold'>{detail.title}</h1>
                <p className='text-white/40'>{detail.description}</p>
            </div>
           ))}
          </article>
    </section>
  );
};

export default Eight;
