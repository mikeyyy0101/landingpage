import React from 'react'
import "@/app/globals.css";
import Link from 'next/link';

const index = () => {
  return (
    <div className='text-white flex justify-center items-center flex-col gap-10 h-full mt-10'>
      <h1>Example Link</h1>
    <Link href='/'>
    <button className='bg-emerald-500 p-2 rounded-lg hover:bg-emerald-700 cursor-pointer'>Click to go back</button>
    </Link>  
    </div>
  )
}

export default index