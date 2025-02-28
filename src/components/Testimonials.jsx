import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CTO, TechGlobe Inc.',
    content: 'John\'s visionary leadership transformed our digital strategy. His insights and innovative approach helped us stay ahead of the curve.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Michael Chen',
    position: 'Founder, StartUp Nexus',
    content: 'Working with John was a game-changer for our startup. His mentorship and strategic guidance were instrumental in our rapid growth.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Emily Rodriguez',
    position: 'CEO, InnovateTech Solutions',
    content: 'John\'s expertise in emerging technologies and his ability to see the big picture have been invaluable to our partnership with Websparks.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative light-beam">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-400">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" crossOrigin="anonymous" />
                <div>
                  <h3 className="text-lg font-semibold text-indigo-300">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-400 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
