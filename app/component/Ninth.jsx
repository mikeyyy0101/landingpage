import Link from 'next/link'
import React from 'react'

const Ninth = () => {
  return (
    <section className=' md:px-20 border-t border-white/30 px-8 py-20 flex flex-col mt-20 items-left justify-start gap-8'>
        <article className='md:px-45 md:w-[70%] flex flex-col gap-10'>
        <Link href='/customer'>
        <button className='cursor-pointer group'>Task tracking and sprint  <span className='inline-block transition-transform duration-300 group-hover:text-white/70 group-hover:translate-x-1'> &gt; </span>
        </button>
        <h1 className="text-6xl md:text-6xl font-semibold text-left">
        Issue tracking you’ll enjoy using
        </h1>
        </Link>
        <p className='font-semibold'>Optimized for speed and efficiency.  
            <span className='text-white/60 ml-1'>
             Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team.
            </span>
            </p>
        </article>

        <img className='opacity-30 perspective-[1000px] my-box -rotate-y-20 rotate-x-20' src="issue-tracking.png" alt="" />
    </section>
  )
}

export default Ninth