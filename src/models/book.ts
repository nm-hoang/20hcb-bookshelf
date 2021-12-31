export interface Book {
  bookid: number;
  name: string;
  author: string;
  category: string;
  price: number;
  discount?: number;
  rating?: number;
  isbn?: string;
  publisher: string;
  daterelease: string;
  description: string; //html type
  avatar: string;
  preview: PreviewBook[];
}

export interface PreviewBook {
  previewbookid?: number;
  photo?: string;
}

export interface Comment {
  commentid: number;
  bookid: number;
  fullname: string;
  rating: number;
  content: number;
  avatar?: string;
}
