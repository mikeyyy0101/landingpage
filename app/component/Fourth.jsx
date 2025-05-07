import React from 'react';

const Fourth = () => {
  return (
    <section className="px-4 sm:px-8 md:px-45 lg:px-45 py-20 mt-30">
      <article className="flex flex-col md:flex-row lg:px-20 items-start md:items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl sm:text-5xl md:text-5xl font-semibold leading-tight text-white">
            Made for modern product teams
          </h1>
        </div>

        {/* Text & Button */}
        <div className="w-full md:w-1/2 text-white/70 text-base sm:text-lg font-light mt-6 md:mt-0">
          <p>
            Linear is shaped by the practices and principles that distinguish
            world-class product teams from the rest: relentless focus, fast
            execution, and a commitment to the quality of craft.
          </p>
          <button className="mt-4 inline-block text-white font-light cursor-pointer transition">
            Make the switch &gt;
          </button>
        </div>
      </article>
    </section>
  );
};

export default Fourth;
