import React from 'react';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Adam B.',
      text: "Highly Recommend Butch after a great day on the water. Despite tougher conditions he went above and beyond to help me catch my new PB smallmouth.",
      rating: 5
    },
    {
      id: '2',
      name: 'Shannon S.',
      text: "Butch is a great guide. We caught fish when other people around us didn't. Very knowledgeable and helpful. My daughter and I had a great time.",
      rating: 5
    },
    {
      id: '3',
      name: 'Jonathan J.',
      text: "Cpt Butch is one of the top charters I've ever went on...and I go all over the place! He didn't have us on a time limit, and you could tell he wanted us to catch fish as much as we did!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">Angler Stories</h2>
            <div className="flex items-center justify-center gap-2 text-yellow-500 text-xl font-bold">
                <Star className="fill-current" />
                <span>4.9/5 Rating</span>
                <span className="text-gray-400 font-normal text-base ml-2">(33+ Reviews)</span>
            </div>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-16 text-center">
            <div className="bg-slate-50 px-6 py-4 rounded-lg">
                <p className="text-3xl font-bold text-navy-900">100%</p>
                <p className="text-xs uppercase tracking-wide text-gray-500">Recommend</p>
            </div>
            <div className="bg-slate-50 px-6 py-4 rounded-lg">
                <p className="text-3xl font-bold text-navy-900">100%</p>
                <p className="text-xs uppercase tracking-wide text-gray-500">Child Friendly</p>
            </div>
            <div className="bg-slate-50 px-6 py-4 rounded-lg">
                <p className="text-3xl font-bold text-navy-900">20+</p>
                <p className="text-xs uppercase tracking-wide text-gray-500">Years Exp.</p>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 p-8 rounded-2xl relative transition-transform hover:-translate-y-1 duration-300 shadow-sm hover:shadow-md">
              <Quote className="h-10 w-10 text-cyan-200 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-navy-900">{t.name}</p>
                <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                    <ThumbsUp className="h-3 w-3" />
                    <span>Verified Angler</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};