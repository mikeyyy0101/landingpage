import Link from 'next/link';
import React from 'react';

const Fourteenth = () => {
  return (
    <section aria-labelledby="future-heading" className=" bg-black py-15 px-8 md:px-45">
      <article className='md:px-20 flex justify-between'>
        <h1 id="future-heading" className="sm:w-[50%] text-4xl font-semibold">
          Plan the present. Build the future.
        </h1>
        <div className='flex gap-5 items-end font-semibold'>
          <Link href='/customer'>
            <button type='button' className='bg-white/30 border duration-300 cursor-pointer hover:bg-white/20 border-white/50 h-10 w-30 rounded-xl'>Talk to sales</button>
          </Link>

          <Link href='/customer'>
            <button type='button' className='h-10 w-30 bg-white/80 duration-300 cursor-pointer hover:bg-white text-black rounded-xl'>Get started</button>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Fourteenth;
