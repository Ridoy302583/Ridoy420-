import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-indigo-400">MD ALLMAMUN Ridoy</h3>
            <p className="text-gray-400">CEO of Websparks Corporations</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
              <i className="bi bi-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
              <i className="bi bi-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
              <i className="bi bi-github text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2023 MD ALLMAMUN Ridoy. All rights reserved.</p>
          <p className="mt-2">Designed by WebSparks AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
