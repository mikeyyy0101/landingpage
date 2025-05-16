import Link from 'next/link'
import React from 'react'

const Eleventh = () => {
  const details = [
    {
      title:'Tailored workflow',
      description:'Track progress across custom issue flows for your team.'
    },
    {
      title:'Custom views',
      description:'Switch between list and board. Group issues with swimlanes.'
    },
    {
      title:'Filters',
      description:'Refine issue lists down to what’s most relevant to you.'
    },
    {
      title:'SLAs',
      description:'Automatically apply deadlines to time-sensitive tasks.'
    },
    
  ]
  return (
    <section className='flex flex-col items-center justify-center'>
    <article className='border-b border-white/30 px-8 md:px-45 w-[100%] mt-20 overflow-hidden h-150 md:h-250'>
        <article className='md:px-20 md:w-150 w-100'>
            <h1 className='text-2xl font-semibold '>Linear Insights</h1>
            <p className='text-white/70'>Take the guesswork out of product planning with realtime, actionable data analytics.</p>
           <Link href='/customer'>
        <button className='mt-5 bg-gray-500/70 px-1 py-0.5 text-white/50 rounded-lg my-box hover:text-white hover:bg-gray-500/40 cursor-pointer group'>Learn more <span className='inline-block transition-transform duration-300 group-hover:text-white/70 group-hover:translate-x-1'> &gt; </span>
        </button>
        </Link>
        </article>
        <div className='flex w-full items-center justify-center opacity-20'>

        <img className='mt-10' src="linear-insights.png" alt="" />
        </div>
    </article>

<article className="grid sm:grid-cols-2 md:px-45 md:flex gap-6 px-4">
  {details.map((info, index) => (
    <div key={index} className=" shadow py-6 px-4 md:px-20 w-full">
      <h1 className="font-semibold mb-2">{info.title}</h1>
      <span className="text-gray-600 ">
        {info.description}
      </span>
    </div>
  ))}
</article>


    </section>
  )
}

export default Eleventh