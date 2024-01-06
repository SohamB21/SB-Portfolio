import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const scrolledDown = currentScrollPos > prevScrollPos && currentScrollPos > 50;
    setNavbarVisible(!scrolledDown);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrolledDown = currentScrollPos > prevScrollPos && currentScrollPos > 50;
      setNavbarVisible(!scrolledDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navLinks = [
    { to: 'About', label: 'About' },
    { to: 'Skills', label: 'Skills' },
    { to: 'Projects', label: 'Projects' },
    { to: 'Experience', label: 'Experience' },
    { to: 'Contact', label: 'Contact' },
  ];

  return (
    <header
      className={`bg-indigo-500 text-blue-900 mx-auto p-2 fixed top-0 w-full z-50 transition-opacity duration-1000 ease-in-out ${
        isNavbarVisible ? 'opacity-100' : 'hidden'
      }`}
      style={{ background: 'linear-gradient(to right, white, lightblue)' }}
    >
      <div className="container mx-auto flex justify-center items-center">
        <nav className="flex space-x-6">
          {navLinks.map(({ to, label }) => (
            <ScrollLink key={to} to={to} smooth={true} duration={500} className="cursor-pointer">
              {label}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
