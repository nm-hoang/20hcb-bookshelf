import {
  createSlice, PayloadAction
} from "@reduxjs/toolkit";
import {
  State,
  Book,
  Comment,
} from "../../api/models";
import { RootState } from '../../app/store';
import { ListBooks } from '../../api/data/book';
import { comments } from "../../api/data/comment";

interface BookState extends State<Book> {
  comments?: Comment[];
}

const initialState: BookState = {
  requesting: false,
  success: false,
  list: ListBooks,
  comments: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    getBookById(state, action: PayloadAction<number>) {
      state.single = state?.list!.find(list => list.bookId === action.payload);
    },
    getCommentByBookId(state, action: PayloadAction<number>) {
      state.comments = comments.filter(list => list.bookId === action.payload);
    }
  },
  extraReducers: ((builder) => {

  }),
});

export const { getBookById, getCommentByBookId } = bookSlice.actions;

export const selectListBooks = (state: RootState) => state.book.list;
export const selectListComments = (state: RootState) => state.book.comments;
export const selectSingleBook = (state: RootState) => state.book.single;

const bookReducer = bookSlice.reducer;
export default bookReducer;
