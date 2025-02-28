import React from 'react';

const projects = [
  {
    title: 'AI-Driven Customer Service Platform',
    description: 'Developed an AI-powered customer service solution that reduced response times by 50% and increased customer satisfaction by 30%.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
  {
    title: 'Blockchain-based Supply Chain Management',
    description: 'Implemented a blockchain solution for supply chain transparency, resulting in a 40% reduction in disputes and improved traceability.',
    image: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
  {
    title: 'IoT-Enabled Smart City Initiative',
    description: 'Led a smart city project that integrated IoT devices for traffic management, waste collection, and energy optimization, improving city efficiency by 25%.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative light-beam">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-400">Notable Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" crossOrigin="anonymous" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-indigo-300">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
