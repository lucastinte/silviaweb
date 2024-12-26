export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  duration: string;
  lessons: number;
  level: 'VIP' | 'Premium' | 'Exclusivo';
}