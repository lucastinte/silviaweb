import React, { useState } from 'react';
import { Clock, Play, Star } from 'lucide-react';
import { Course } from '../types/course';
import { PaymentModal } from './PaymentModal';

interface CourseCardProps {
  course: Course;
  onPurchase: (courseId: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onPurchase }) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden group">
        <div className="relative">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Play className="h-12 w-12 text-white" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-fancy font-bold text-gray-900 mb-2">{course.title}</h3>
          <p className="text-gray-600 mb-4">{course.description}</p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-sm text-pink-500">
              <Star className="h-4 w-4 mr-1 fill-current" />
              <span>Contenido Exclusivo</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-pink-500">${course.price}</span>
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        course={course}
      />
    </>
  );
};