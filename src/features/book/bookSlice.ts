import {
  // AnyAction,
  createSlice,
  PayloadAction,
  // createAsyncThunk
} from '@reduxjs/toolkit';
import {
  State,
  Book,
  Comment
} from '../../models';
import { RootState } from '../../app/store';
import { ListBooks } from '../../data/book';
import { ListComments } from '../../data/comment';

interface BookState extends State<Book> {
  comments?: Comment[];
}

const initialState: BookState = {
  requesting: false,
  success: false,
  list: ListBooks,
  comments: ListComments
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    getBookById(state, action: PayloadAction<number>) {
      state.single = state?.list!.find(list => list.bookid === action.payload);
    }
  },
  extraReducers: ((builder) => {

  }),
});

export const { getBookById } = bookSlice.actions;

export const selectListBooks = (state: RootState) => state.book.list;
export const selectListComments = (state: RootState) => state.book.comments;
export const selectSingleBook = (state: RootState) => state.book.single;

const bookReducer = bookSlice.reducer;
export default bookReducer;
