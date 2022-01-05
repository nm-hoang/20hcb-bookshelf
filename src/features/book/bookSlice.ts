import {
  createSlice,
} from '@reduxjs/toolkit';
import {
  State,
  Book,
} from '../../api/models';
import { RootState } from '../../app/store';
import { ListBooks } from '../../api/data/book';

interface BookState extends State<Book> { }

const initialState: BookState = {
  requesting: false,
  success: false,
  list: ListBooks
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {

  },
  extraReducers: ((builder) => {

  }),
});

export const selectListBooks = (state: RootState) => state.book.list;

const bookReducer = bookSlice.reducer;
export default bookReducer;
