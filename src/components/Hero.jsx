import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center light-beam">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-indigo-400">MD ALLMAMUN Ridoy</h1>
        <h2 className="text-2xl md:text-4xl mb-8 text-gray-300">CEO of Websparks Corporations</h2>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-400">
          Innovating the digital landscape, one spark at a time.
        </p>
        <a
          href="#contact"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
