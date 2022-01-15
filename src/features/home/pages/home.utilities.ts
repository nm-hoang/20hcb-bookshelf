import { Book } from '../../../api/models';
import { kebabCase, sortBy, uniq } from 'lodash';

const appUrl = process.env.APP_URL || 'http://localhost:3000';

// TODO: shorten them all

export const getAuthorsFromBooks = (books: Book[]): { author: string; key: string }[] =>
  sortBy(
    uniq(books.map((book) => ({ author: book.author, key: kebabCase(book.author) }))).slice(0, 4),
    ['author']
  );

export const getPublishersFromBooks = (books: Book[]): { publisher: string; key: string }[] =>
  sortBy(
    uniq(
      books.map((book) => ({ publisher: book.publisher, key: kebabCase(book.publisher) }))
    ).slice(0, 4),
    ['publisher']
  );

export const getCategoriesFromBooks = (books: Book[]): { category: string; key: string }[] =>
  sortBy(
    uniq(books.map((book) => ({ category: book.category, key: kebabCase(book.category) })))
      .slice(0, 4)
      .concat({ category: 'All', key: 'all' }),
    ['category']
  );

export const getDiscountedPrice = (price: number, discountPercent: number): number =>
  Number((price * ((100 - discountPercent) / 100)).toFixed(2));

export const redirectTo = (url: string) => {
  return window.location.href = `${appUrl}${url}`;
}