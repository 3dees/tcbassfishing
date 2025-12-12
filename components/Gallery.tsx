import React from 'react';
import { Camera } from 'lucide-react';
import { GalleryImage } from '../types';

export const Gallery: React.FC = () => {
  // Using picsum images to simulate real catch photos with nature themes
  // In a real deployment, these would be local assets or a CMS
  const images: GalleryImage[] = [
    { id: '1', url: 'https://images.unsplash.com/photo-1541703649641-471253e77a28?q=80&w=1974&auto=format&fit=crop', alt: 'Big Bass Catch', caption: 'Grand Traverse Smallie' },
    { id: '2', url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop', alt: 'Sunrise fishing', caption: 'Early Morning Bite' },
    { id: '3', url: 'https://images.unsplash.com/photo-1534951474654-8867a40593c4?q=80&w=2070&auto=format&fit=crop', alt: 'Lure closeup', caption: 'Top Water Action' },
    { id: '4', url: 'https://images.unsplash.com/photo-1523585098327-1422a5786678?q=80&w=1974&auto=format&fit=crop', alt: 'Happy client', caption: 'Personal Best Catch' },
    { id: '5', url: 'https://images.unsplash.com/photo-1559737191-443b743015b6?q=80&w=2070&auto=format&fit=crop', alt: 'Boat running', caption: 'Heading Out' },
    { id: '6', url: 'https://images.unsplash.com/photo-1621360841012-6eb5264ba359?q=80&w=1974&auto=format&fit=crop', alt: 'Bass closeup', caption: 'Release' },
  ];

  return (
    <section className="py-24 bg-navy-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-500 font-bold uppercase tracking-widest text-sm mb-2 flex items-center justify-center gap-2">
            <Camera className="h-4 w-4" /> The Catch
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Hall of Fame</h2>
          <p className="mt-4 text-gray-400">Real clients, real memories on Grand Traverse Bay.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div 
              key={img.id} 
              className={`relative group overflow-hidden rounded-xl bg-gray-800 ${idx === 0 || idx === 3 ? 'md:col-span-2' : ''} h-64 md:h-80`}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors border-b border-cyan-400/50 hover:border-white pb-1">
                Follow our daily catches on Instagram
            </a>
        </div>
      </div>
    </section>
  );
};