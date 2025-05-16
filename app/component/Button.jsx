import React from 'react'

const Button = () => {
  const infos=[
    {
      title:'On track',
      description:'We are ready to launch next Thursday ',
      date:'sep 8',
    },
    {
      title:'At risk',
      description:'Progress slowed down last week because...',
      date:'oct 7',
    },
  ]
  return (
    <article className='flex-col flex gap-10'>
     {infos.map((info,index)=>(
      <div
          key={index}
          className="h-30 rounded-lg
             bg-gradient-to-r from-white/10 via-black/20 my-box to-black/10 
             p-2 transition-all duration-300 ease-in-out w-full"
>
        <h1 className={index===0?'text-green-500':'text-red-500'  }>{info.title}</h1>
        <p>{info.description}</p>
        <p className='mt-8 text-white/50'>{info.date}</p>
      </div>
     ))}
    </article>
  )
}

export default Button