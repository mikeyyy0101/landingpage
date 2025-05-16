'use client'
import { motion } from 'framer-motion';
import React from 'react'; 

const Second = () => {
  return (
    <section className="mt-[-100] flex justify-center items-center overflow-hidden w-full h-screen">
      <div className="flex w-[90%] items-center justify-center h-[600px] perspective-[1000px] -skew-5 opacity-20"
      >
        {/* Left */}
        <article
       className="my-box2"
   >
          <motion.img
          initial={{ x: '60%', y: '-50%', opacity: 0, filter: 'blur(10px)' }}
          animate={{ x: 0, y: 0, opacity: 1, filter: 'blur(0)' }}
          transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
            src="/img1.jpg"
            alt="Left"
            className=" w-[550px] h-[600px] object-cover rounded-l-xl shadow-xl"
          />
        </article>

        {/* Center */}
        <article
         className="ml-[-100] my-box2"
         >
          <motion.img
          initial={{ x: '60%', y: '-50%', opacity: 0, filter: 'blur(10px)' }}
          animate={{ x: 0, y: 0, opacity: 1, filter: 'blur(0)' }}
          transition={{ duration: 1.5, delay: 1, ease: 'easeIn' }}
            src="/img2.jpg"
            alt="Center"
            className="w-[550px] h-[600px] object-cover"
          />
        </article>

        {/* Right */}
        <article
        className="ml-[-100] my-box2"
        >
          <motion.img
          initial={{ x: '60%', y: '-50%', opacity: 0, filter: 'blur(10px)' }}
          animate={{ x: 0, y: 0, opacity: 1, filter: 'blur(0)' }}
          transition={{ duration: 2, delay: 1, ease: 'easeIn' }}
            src="/img3.jpg"
            alt="Right"
            className="w-[550px] h-[600px] object-cover rounded-r-xl shadow-xl"
          />
        </article>
      </div>
    </section>
  );
};

export default Second;
