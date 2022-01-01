import {
  // AnyAction,
  createSlice,
  PayloadAction,
  createAsyncThunk
} from '@reduxjs/toolkit';
import {
  State,
  CartItem
} from '../../models';
import { RootState } from '../../app/store';
import { CartData } from '../../data/cart';
import Notify from '../../helpers/notify';

interface CartState extends State<CartItem> {
}

const initialState: CartState = {
  requesting: false,
  success: false,
  list: CartData
};

export const add = createAsyncThunk(
  'article/getListByArticleParentId',
  async (params: number) => {
    return params;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const index = state.list!.findIndex(list => list.bookid === action.payload.bookid)!;
      if (index >= 0) {
        state.list![index].quantity = state.list![index].quantity! + action.payload?.quantity!;
      }
      else {
        state.list = state.list!.concat(action.payload);
      }
      Notify.success('', 'Add to cart successfully !');
    },
    removeItem(state, action: PayloadAction<number>) {
      state.list = state.list!.splice(state.list!.findIndex((list) => list.bookid === action.payload), 1);
      Notify.success('', 'Remove item successfully !');
    },
    removeAll(state) {
      state.list = state.list!.splice(0, state.list!.length);
      Notify.success('', 'Remove all items in cart successfully !');
    },
  },
  extraReducers: ((builder) => {

  }),
});

export const { addToCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.single;

const cartReducer = cartSlice.reducer;
export default cartReducer;
