import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
