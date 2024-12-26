import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Sesión Especial - Lencería',
    description: 'Acceso a mi última sesión privada con los conjuntos más sensuales.',
    price: 29.99,
    thumbnail: 'https://images.unsplash.com/photo-1618331835717-801e976710b2',
    duration: '45 minutos',
    lessons: 1,
    level: 'VIP'
  },
  {
    id: '2',
    title: 'Sesión Privada - Jacuzzi',
    description: 'Momentos íntimos y sensuales en una tarde de relax.',
    price: 49.99,
    thumbnail: 'https://images.unsplash.com/photo-1583766395091-2eb9994ed094',
    duration: '30 minutos',
    lessons: 1,
    level: 'Premium'
  },
  {
    id: '3',
    title: 'Behind the Scenes - Photoshoot',
    description: 'Contenido exclusivo y sin editar de mi última sesión.',
    price: 39.99,
    thumbnail: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
    duration: '60 minutos',
    lessons: 1,
    level: 'Exclusivo'
  }
];