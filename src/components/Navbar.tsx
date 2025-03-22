import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <Leaf className="h-8 w-8 sm:h-10 sm:w-10 text-green-500" />
            <span className="text-xl sm:text-2xl font-bold">Green&Clean</span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-green-500 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            <Link to="/booking" className="text-base lg:text-lg font-semibold tracking-wide hover:text-green-500 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              Dogovorite termin
            </Link>
            <Link to="/pricing" className="text-base lg:text-lg font-semibold tracking-wide hover:text-green-500 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              Cjenik usluga
            </Link>
            <Link to="/contact" className="text-base lg:text-lg font-semibold tracking-wide hover:text-green-500 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              Kontakt
            </Link>
            <Link to="/reviews" className="text-base lg:text-lg font-semibold tracking-wide hover:text-green-500 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              Preporuke
            </Link>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/booking"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-500 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dogovorite termin
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-500 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Cjenik usluga
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-500 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
            <Link
              to="/reviews"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-500 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Preporuke
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}