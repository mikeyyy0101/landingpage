import Link from 'next/link'
import React from 'react'

const Sixth = () => {
  return (
    <section className="bg-gradient-to-b from-white/5 to-black px-4 md:px-45 sm:px-8 lg:px-45 py-20">
        <article className="flex flex-col items-start max-w-7xl lg:px-20 mx-auto ">
          <Link href="/">
            <button className="text-sm sm:text-base font-medium cursor-pointer">
              Project and long-term planning &gt;
            </button>
          </Link>

          <Link href="/">
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold leading-tight">
              Set the product direction
            </h1>
          </Link>

          <h2 className="mt-10 max-w-3xl text-base sm:text-lg font-semibold text-white">
            Align your team around a unified product timeline.
            <span className="text-gray-500 block mt-2 font-medium">
              Plan, manage, and track all product initiatives with Linear’s visual planning tools.
            </span>
          </h2>
        </article>

        <article
          className="mt-[-3rem] flex w-full items-center justify-center min-h-screen overflow-hidden"
          style={{
            perspective: '2000px',
            transform: 'rotateY(40deg) rotateX(35deg) skew(10deg)',
        }}
        >
          <div className="w-[100%] mt-[-150]">
            <img
              src="/coding.png"
              alt="3D coding visual"
              className="grayscale w-full h-full object-cover rounded-l-xl shadow-xl"
            />
          </div>
        </article>
        <div className="mt-[-100] w-full border-b border-white/30">
      </div>
    </section>
  )
}

export default Sixth
