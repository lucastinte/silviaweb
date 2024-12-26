import React from 'react';
import { CourseCard } from '../components/CourseCard';
import { courses } from '../data/courses';
import { Lock } from 'lucide-react';

export const Courses = () => {
  const handlePurchase = async (courseId: string) => {
    console.log(`Processing purchase for content ${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-pink-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-fancy font-bold text-gray-900 mb-4">Contenido Exclusivo 💋</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-fancy text-xl">
            Descubre mis momentos más íntimos y especiales. Solo para ti ✨
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onPurchase={handlePurchase}
            />
          ))}
        </div>
      </div>
    </div>
  );
};