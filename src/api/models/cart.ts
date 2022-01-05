import { Book } from './book';

export interface Cart {
  cartId: string;
  userId?: number;
  ListItems: CartItem[];
}

export interface CartItem extends Book {
  quantity?: number;
}
