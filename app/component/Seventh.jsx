import React from 'react';
import Button from './Button';

const Seventh = () => {
  return (
<section className="flex flex-col lg:flex-row gap-20 
  items-start lg:items-center justify-start lg:justify-center 
  px-4 py-16 md:px-45 overflow-hidden">

<article
      className="w-full max-w-xl px-4 md:px-20 text-left md:border-r border-white/30"
    >
      <h1 className="text-xl font-semibold text-white mb-2">
        Manage projects end-to-end
      </h1>
      <span className="text-base font-semibold text-white/60">
        Consolidate specs, milestones, tasks, and other documentation in one centralized location.
      </span>

      <div className="mt-10 w-full h-[300px] my-box2 relative">
      <img className="sm:h-full sm:w-full" src="project-overview.png" alt="Image" />

      </div>
    </article>

    <article
      className="w-full max-w-xl px-4 text-left"
    >
      <h1 className="text-xl font-semibold text-white mb-2">
        Manage projects end-to-end
      </h1>
      <span className="text-base font-semibold text-white/60">
        Consolidate specs, milestones, tasks, and other documentation in one centralized location.
      </span>

      <div className="mt-10 w-full h-[300px]">
        <Button />
      </div>
    </article>
</section>

  );
};

export default Seventh;
