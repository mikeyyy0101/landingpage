'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';;

const First = () => {
  return (
    <section className="text-white py-18 md:px-45 px-2">
      <motion.div 
          className="max-w-screen-xl mx-auto px-5.5 lg:px-20 text-left"
          initial={{y:100, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{duration:0.8, ease:'linear'}}    
      >
        <motion.h1 
            className="text-5xl md:text-5xl font-bold font-sans leading-tight max-w-4xl"
            initial={{x:20, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1, ease:'easeIn'}}
        >
          Linear is a purpose-built tool for planning and building products
        </motion.h1>
        <motion.p 
            className="text-white/60 mt-6 text-xl max-w-2xl"
            initial={{x:20, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1,delay:0.5 , ease:'easeIn'}}
        >
        Meet the system for modern software development. Streamline issues, projects, and product roadmaps.
        </motion.p>
        <motion.div 
            className="mt-10"
            initial={{x:50, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1,delay:1 , ease:'easeIn'}}     
        >
         <Link href='/customer'>
         <button className="cursor-pointer duration-200 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/80 transition">
            Start building
          </button>
         </Link>

         <Link href='customer'>
          <button className="duration-200 cursor-pointer ml-5 relative group rounded-lg p-2 overflow-hidden">
          <span className="bg-gradient-to-r from-cyan-100 via-white to-white/30 bg-clip-text text-transparent">
            Introducing Linear for Agents{'>'}
          </span>
         <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none" />
        </button>
         </Link> 
        </motion.div>
      </motion.div>
    </section>
  );
};

export default First;
