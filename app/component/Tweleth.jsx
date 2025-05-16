import React from 'react'
import Modal2 from './Modal2'

const Tweleth = () => {
  return (
   <section className='mt-20 mb-20 border-t border-white/30 px-8 md:px-45'>

    <article className='mt-20 md:px-20 md:flex justify-between items-end'>
        <div className='w-[50%]'>
        <span className='text-gray-300'>Workflows and integrations</span>
        <h1 className='text-5xl font-semibold'>Collaborate across tools and teams</h1>
        </div>
        <br />
        <div className='w-130'>
        <p className='text-gray-500'>Expand the capabilities of the Linear system with a wide variety of integrations that keep everyone in your organization aligned and focused.</p>
        </div>
    </article>

    <article className='md:px-20 mt-10 mb-10'>
    <Modal2 />
    </article>
   </section>
  )
}

export default Tweleth