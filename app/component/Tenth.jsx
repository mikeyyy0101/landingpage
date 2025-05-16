import React from 'react'

const Tenth = () => {
  return (
    <section className='md:flex md:justify-center '>

    <section className='md:px-38.5 md:w-[90%] border-b border-t py-20 border-white/30 flex sm:flex-col md:flex-row gap-20'>
       
        <article className='sm:px-8 flex flex-col gap-10 mt-10 md:w-[100%]'>
          <h1 className='text-2xl'>Build momentum with Cycles</h1>
          <span className='mt-[-30] text-white/70'>
              Create healthy routines and focus your team on what work should happen next.</span>

          <img className='opacity-30' src="momentum.png" alt="" />
        </article>

        
        <article className='sm:px-8 border-l md:w-[90%] border-white/30 flex flex-col gap-10'>

          <h1 className='mt-10 text-2xl'>Manage incoming work with Triage</h1>
          <span className=' mt-[-30] text-white/70'>
              Review and assign incoming bug reports, feature requests, and other unplanned work.
              </span>

          <img className='opacity-30' src="manage-income.png" alt="" />
        </article>

        
    </section>
    </section>
  )
}

export default Tenth