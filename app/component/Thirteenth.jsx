import React from 'react';

const Thirteenth = () => {
  const details = [
    {
      title: 'Linear Sync Engine',
      description: 'Built with a high-performance architecture and an obsessive focus on speed.',
    },
    {
      title: 'Enterprise-ready security',
      description: 'Best-in-class security practices keep your work safe and secure at every layer',
    },
    {
      title: 'Engineered for scale',
      description: 'Built for teams of all sizes. From early-stage startups to global enterprises.',
    },
  ];

  const logos = [
    {
      icon: 'icon1.avif',
      name: 'SOC 2',
    },
    {
      icon: 'icon2.avif',
      name: 'GDPR',
    },
    {
      icon: 'icon3.avif',
      name: 'HIPAA',
    },
  ];

  return (
    <section className="md:flex py-30 sm:px-8 md:px-45 bg-gradient-to-b from-white/10 via-black to-black">
      <article className="md:w-[50%] md:px-20">
        <header>
          <span className="text-gray-300">Under the hood</span>
          <h1 className="text-5xl mt-5 mb-2 font-semibold">Built on strong foundations</h1>
        </header>

        <p className="py-10 text-white/50 w-[90%]">
          Linear is so simple to use, it’s easy to overlook the wealth of complex technologies packed under the hood that keep Linear robust, safe, and blazing fast.
        </p>

        <section className="border-b border-t border-white/20">
          {details.map((item, index) => (
            <div key={index} className="mt-5 mb-5 md:mt-10 flex justify-between items-center gap-10">
              <div className="md:w-[40%] w-[30%]">
                <h2>{item.title}</h2>
              </div>
              <div className="md:w-60 w-[70%]">
                <p className="font-light text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center text-white border-t border-white/20 py-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className='flex flex-col items-center'
            >
              <figure>
                <img src={logo.icon} alt={`${logo.name} logo`} className="w-20 h-20 mb-4" />
              </figure>
              <figcaption className="flex items-center gap-2">
                <span className="text-sm text-gray-300">{logo.name}</span>
                <img src="checkmark.png" alt="Verified checkmark" className="grayscale w-5 h-5" />
              </figcaption>
            </div>
          ))}
        </section>
      </article>

      <aside className="md:w-[50%] hidden md:flex flex items-center justify-center">
        <img className="max-w-full h-full" src="linear-insights.png" alt="Feature illustration" />
      </aside>
    </section>
  );
};

export default Thirteenth;
