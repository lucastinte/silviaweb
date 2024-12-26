import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Heart className="h-6 w-6 text-pink-500" />
              <h1 className="ml-2 text-2xl font-fancy font-bold text-pink-500">Sofia</h1>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
              Inicio
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-pink-500 px-3 py-2 rounded-md text-sm font-medium">
              Contenido
            </Link>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-600 transition-all">
              Suscribirse ✨
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden absolute w-full bg-white/80 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-gray-700 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/courses"
              className="text-gray-700 hover:text-pink-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contenido
            </Link>
            <button className="w-full text-left bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-600">
              Suscribirse ✨
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};