export interface TripPackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}