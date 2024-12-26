import React from 'react';
import { ArrowRight, Heart, Star, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-500 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-white/50 shadow-xl"
            />
            <h1 className="text-5xl md:text-7xl font-fancy font-bold mb-6">
              Sofia 💋
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-fancy">
              Bienvenido a mi espacio íntimo y exclusivo ✨
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-all shadow-lg"
            >
              Ver mi contenido privado
              <Lock className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-sm hover:shadow-xl transition-all border border-pink-100">
              <div className="bg-gradient-to-br from-pink-400 to-purple-400 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-fancy font-bold mb-2 text-gray-800">Contenido VIP</h3>
              <p className="text-gray-600">
                Acceso a mis sesiones más íntimas y exclusivas.
              </p>
            </div>
            <div className="text-center p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-sm hover:shadow-xl transition-all border border-pink-100">
              <div className="bg-gradient-to-br from-pink-400 to-purple-400 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-fancy font-bold mb-2 text-gray-800">Sesiones Privadas</h3>
              <p className="text-gray-600">
                Contenido especial y momentos únicos solo para ti.
              </p>
            </div>
            <div className="text-center p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-sm hover:shadow-xl transition-all border border-pink-100">
              <div className="bg-gradient-to-br from-pink-400 to-purple-400 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-fancy font-bold mb-2 text-gray-800">Chat Privado</h3>
              <p className="text-gray-600">
                Interacción personal y contenido personalizado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};