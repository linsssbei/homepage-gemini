import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-grid-stone-200/[0.3] relative">
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-stone-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <div className="text-center z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-4">
          Lin Shi
        </h1>
        <p className="text-xl md:text-2xl text-sky-600 font-semibold mb-8">
          Principle Software Engineer at Salesforce
        </p>
        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          I craft high-quality digital experiences, focusing on building products that are both fun and reliable.
        </p>
      </div>
    </section>
  );
};

export default Hero;