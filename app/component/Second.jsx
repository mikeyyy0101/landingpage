'use client'
import { motion } from 'framer-motion';
import React from 'react'; 

const Second = () => {
  return (
    <section className="mt-[-100] flex justify-center items-center overflow-hidden w-full h-screen">
      <div className="flex w-full items-center justify-center h-[600px]"
       style={{
        perspective: '5000px',
        transform: 'rotateY(40deg) rotateX(25deg) skew(10deg)',
      }}
      >
        {/* Left */}
        <motion.article
   initial={{ x: '60%', y: '-50%', opacity: 0, filter: 'blur(10px)' }}
   animate={{ x: 0, y: 0, opacity: 1, filter: 'blur(0)' }}
   transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
  //  className="flex w-full justify-center items-center"
        >
          <img
            src="/img1.jpg"
            alt="Left"
            className="grayscale w-[550px] h-[600px] object-cover rounded-l-xl shadow-xl"
          />
        </motion.article>

        {/* Center */}
        <motion.article
         initial={{ x: '60%', y: '-50%', opacity: 0, filter: 'blur(10px)' }}
         animate={{ x: 0, y: 0, opacity: 1, filter: 'blur(0)' }}
         transition={{ duration: 1.5, delay: 1, ease: 'easeIn' }}
         className="ml-[-100]"
        >
          <img
            src="/img2.jpg"
            alt="Center"
            className="grayscale w-[550px] h-[600px] object-cover"
          />
        </motion.article>

        {/* Right */}
        <motion.article
        initial={{ x: '60%', y: '-50%', opacity: 0, filter: 'blur(10px)' }}
        animate={{ x: 0, y: 0, opacity: 1, filter: 'blur(0)' }}
        transition={{ duration: 2, delay: 1, ease: 'easeIn' }}
        className="ml-[-100]"
        >
          <img
            src="/img3.jpg"
            alt="Right"
            className="grayscale w-[550px] h-[600px] object-cover rounded-r-xl shadow-xl"
          />
        </motion.article>
      </div>
    </section>
  );
};

export default Second;
