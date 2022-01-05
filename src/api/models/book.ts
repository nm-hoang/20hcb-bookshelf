export interface Book {
  bookId: number;
  name: string;
  author: string;
  category: string;
  price: number;
  discount?: number;
  rating?: number;
  isbn?: string;
  publisher: string;
  releaseDate: string;
  description: string; //html type
  avatar: string;
  preview: PreviewBook[];
}

export interface PreviewBook {
  previewBookId?: number;
  photo?: string;
}

export interface Comment {
  commentId: number;
  bookId: number;
  fullName: string;
  rating: number;
  content: number;
  avatar?: string;
}
