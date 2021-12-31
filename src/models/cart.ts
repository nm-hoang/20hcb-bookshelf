import { Book } from './book';

export interface Cart {
  cartid: string;
  userid?: number;
  ListItems: CartItem[];
}

export interface CartItem extends Book {
  quantity?: number;
}