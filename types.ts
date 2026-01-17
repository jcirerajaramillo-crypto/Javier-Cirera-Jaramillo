
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'entrantes' | 'principales' | 'postres' | 'vinos';
  allergens: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  rating: number;
}
