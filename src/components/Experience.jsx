import React from 'react';

const experiences = [
  {
    company: 'Websparks Corporations',
    position: 'CEO',
    duration: '2018 - Present',
    description: 'Leading the company\'s strategic vision and driving innovation in digital solutions.',
  },
  {
    company: 'InnoTech Solutions',
    position: 'CTO',
    duration: '2014 - 2018',
    description: 'Oversaw technological development and implementation for a diverse client portfolio.',
  },
  {
    company: 'CodeCraft Innovations',
    position: 'Senior Software Engineer',
    duration: '2010 - 2014',
    description: 'Designed and implemented scalable software solutions for enterprise clients.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative light-beam">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-400">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-2 text-indigo-300">{exp.position}</h3>
              <h4 className="text-xl mb-2 text-gray-400">{exp.company}</h4>
              <p className="text-gray-500 mb-4">{exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
