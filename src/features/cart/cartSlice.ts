import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  State,
  CartItem,
} from "../../api/models";
import { RootState } from '../../app/store';
import { CartData } from '../../api/data/cart';
import Notify from '../../helpers/notify';

interface CartState extends State<CartItem> {
}

const initialState: CartState = {
  requesting: false,
  success: false,
  list: CartData
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const index = state.list!.findIndex(list => list.bookId === action.payload.bookId)!;
      if (index >= 0) {
        state.list![index].quantity = state.list![index].quantity! + action.payload?.quantity!;
      }
      else {
        state.list = state.list!.concat(action.payload);
      }
      Notify.success('', 'Add to cart successfully !');
    },
    removeItem(state, action: PayloadAction<number>) {
      state.list = state.list!.filter((list) => list.bookId !== action.payload);
      Notify.success('', 'Remove item successfully !');
    },
    removeAll(state) {
      state.list = [];
      Notify.success('', 'Remove all items in cart successfully !');
    },
    increaseItem(state, action: PayloadAction<number>) {
      const index = state.list!.findIndex(list => list.bookId === action.payload)!;
      if (state.list![index].quantity! < 100)
        state.list![index].quantity = state.list![index].quantity! + 1;
    },
    decreaseItem(state, action: PayloadAction<number>) {
      const index = state.list!.findIndex(list => list.bookId === action.payload)!;
      if (state.list![index].quantity! > 1)
        state.list![index].quantity = state.list![index].quantity! - 1;
    },
    setSelectedItem(state, action: PayloadAction<number>) {
      const index = state.list!.findIndex(list => list.bookId === action.payload)!;
      state.list![index].checked! = !state.list![index].checked!;
    },
    setCheckedAll(state) {
      for (let i = 0; i < state.list!.length; i++) {
        state.list![i].checked! = true;
      }
    },
    setUnCheckedAll(state) {
      for (let i = 0; i < state.list!.length; i++) {
        state.list![i].checked! = false;
      }
    }
  },
  extraReducers: ((builder) => {

  }),
});

export const {
  addToCart, removeItem,
  removeAll, setSelectedItem,
  increaseItem, decreaseItem,
  setCheckedAll, setUnCheckedAll
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.list;

const cartReducer = cartSlice.reducer;
export default cartReducer;
