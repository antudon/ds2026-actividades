export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: number;
  cover: string;
  rating: number;
  featured?: boolean;
}
