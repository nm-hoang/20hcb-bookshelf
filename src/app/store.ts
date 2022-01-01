import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bookReducer from '../features/book/bookSlice';
import cartSlice from '../features/cart/cartSlice';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    book: bookReducer,
    cart: cartSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
