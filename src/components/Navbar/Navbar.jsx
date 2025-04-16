import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">
            <Link to="/" className="animate__animated animate__fadeIn">
             <h3 className='text-4xl font-semibold'>Real State</h3>
            </Link>
          <div className="flex items-center space-x-8">
            <div className="hidden lg:flex space-x-6">
              <Link to="/buy" className="text-gray-800 hover:text-gray-600 font-medium text-sm uppercase animate__animated animate__fadeIn animate__delay-1s">Buy</Link>
              <Link to="/sell" className="text-gray-800 hover:text-gray-600 font-medium text-sm uppercase animate__animated animate__fadeIn animate__delay-1s">Sell</Link>
              <Link to="/rent" className="text-gray-800 hover:text-gray-600 font-medium text-sm uppercase animate__animated animate__fadeIn animate__delay-1s">Rent</Link>
              <Link to="/about" className="text-gray-800 hover:text-gray-600 font-medium text-sm uppercase animate__animated animate__fadeIn animate__delay-1s">About</Link>
              <Link to="/blog" className="text-gray-800 hover:text-gray-600 font-medium text-sm uppercase animate__animated animate__fadeIn animate__delay-1s">Blog</Link>
              <Link to="/contact" className="text-gray-800 hover:text-gray-600 font-medium text-sm uppercase animate__animated animate__fadeIn animate__delay-1s">Contact</Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 animate__animated animate__fadeIn animate__delay-2s">
            <a href="https://wa.me/+8801640301028" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-1.5 text-green-500 hover:text-green-600">
              <FaWhatsapp className="text-xl" /> Whatsapp
            </a>
           
          </div>
        </div>

        {/* Mobile/Toggle Navbar */}
        <div className="md:hidden flex items-center justify-between">
          <Link to="/" className="animate__animated animate__fadeIn">
            <h3 className='text-3xl font-semibold'>Real State</h3>
          </Link>
          
          <div className="flex items-center space-x-4">
            <a href="https://wa.me/+8801640301028" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600">
              <FaWhatsapp className="text-xl" />
            </a>
            <button 
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none animate__animated animate__fadeIn animate__delay-1s"
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4 animate__animated animate__fadeInRight animate__faster">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/buy" onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 font-medium text-sm uppercase">Buy</Link>
              <Link to="/sell" onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 font-medium text-sm uppercase">Sell</Link>
              <Link to="/rent" onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 font-medium text-sm uppercase">Rent</Link>
              <Link to="/about" onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 font-medium text-sm uppercase">About</Link>
              <Link to="/blog" onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 font-medium text-sm uppercase">Blog</Link>
              <Link to="/contact" onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 font-medium text-sm uppercase">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;