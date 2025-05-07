'use client';
import React, { useEffect, useState } from 'react';

const Modal = () => {
  const [selectedDetail, setSelectedDetail] = useState(null);

  useEffect(() => {
    if (selectedDetail) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [selectedDetail]);

  const details = [
    {
      id: 1,
      image: '/img1.jpg',
      title: 'Purpose-built for product development',
      description:
        'Linear was developed with a specific purpose: to empower product teams to do their best work. Every aspect is intentionally designed to help teams focus on what they do best: Planning, building, and shipping great products. Because of its fit-to-purpose design, Linear is incredibly easy to use, but grows more powerful as you scale. It’s principled where it needs to be, but provides enough flexibility to adapt to your team’s unique way of working.',
      saying:
        '“We’d tried many tools before Linear but none of them felt like they were made for the way we work. Linear was a breath of fresh air - speedy, snappy, and a pleasure to use.”'
    },
    {
      id: 2,
      image: '/img2.jpg',
      title: 'Purpose-built for product development',
      description:
        'Linear was developed with a specific purpose: to empower product teams to do their best work. Every aspect is intentionally designed to help teams focus on what they do best: Planning, building, and shipping great products. Because of its fit-to-purpose design, Linear is incredibly easy to use, but grows more powerful as you scale.',
      saying:
        '“We’d tried many tools before Linear but none of them felt like they were made for the way we work.”'
    },
    {
      id: 3,
      image: '/img3.jpg',
      title: 'Purpose-built for product development',
      description:
        'Linear was developed with a specific purpose: to empower product teams to do their best work. Every aspect is intentionally designed to help teams focus on what they do best: Planning, building, and shipping great products.',
      saying:
        '“Linear was a breath of fresh air - speedy, snappy, and a pleasure to use.”'
    }
  ];

  return (
    <section className="mb-24">
      {/* Scrollable Card List */}
      <article className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6">
        {details.map((detail) => (
          <div
            key={detail.id}
            onClick={() => setSelectedDetail(detail)}
            className="min-w-[300px] sm:min-w-[350px] lg:min-w-[400px] aspect-square cursor-pointer rounded-lg overflow-hidden bg-black shadow-md"
          >
            <img
              src={detail.image}
              alt={detail.title}
              className="grayscale hover:grayscale-0 w-full h-2/3 object-cover"
            />
            <div className="p-4 h-1/3 flex items-center justify-center">
              <h1 className="text-lg font-semibold text-center text-white">
                {detail.title}
                <button className='relative hover:bg-white/50 right-[-10] bg-white/10 rounded-full px-2 text-white/50 cursor-pointer'>+</button>
              </h1>
            </div>
          </div>
        ))}
      </article>

      {/* Modal */}
      {selectedDetail && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-black p-6 rounded-xl shadow-2xl max-w-2xl w-full relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedDetail(null)}
              className="cursor-pointer fixed top-3 right-4 text-white text-3xl font-bold hover:text-rose-500 transition"
            >
              ×
            </button>
            <img
              src={selectedDetail.image}
              alt={selectedDetail.title}
              className="grayscale w-full h-60 object-cover rounded"
            />
            <h2 className="mt-6 text-xl font-semibold text-white">
              {selectedDetail.title}
            </h2>
            <p className="text-white/70 mt-4 leading-relaxed">
              {selectedDetail.description}
            </p>
            <blockquote className="mt-6 italic text-white/50 pl-4">
              {selectedDetail.saying}
            </blockquote>
          </div>
        </div>
      )}
    </section>
  );
};

export default Modal;
