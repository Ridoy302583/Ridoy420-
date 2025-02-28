import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative light-beam">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              alt="MD ALLMAMUN Ridoy"
              className="rounded-lg shadow-lg"
              crossOrigin="anonymous"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-6 text-gray-300">
              As the CEO of Websparks Corporations, I lead a team of innovative professionals dedicated to transforming the digital landscape. With a strong background in software engineering and business leadership, I've guided numerous projects to success and helped established companies embrace digital transformation.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              My passion lies in leveraging cutting-edge technologies to solve complex business challenges. I believe in fostering a culture of creativity, collaboration, and continuous learning, which has been the cornerstone of Websparks' success.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not steering Websparks towards new horizons, you can find me mentoring young entrepreneurs, speaking at tech conferences, or contributing to open-source projects that push the boundaries of innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
