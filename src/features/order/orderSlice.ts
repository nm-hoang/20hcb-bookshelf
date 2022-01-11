import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  State,
  Order,
  CartItem
} from '../../api/models';
import { RootState } from '../../app/store';
import { CartData } from '../../api/data/cart';
import Notify from '../../helpers/notify';

interface CartState extends State<Order> {
}

const initialState: CartState = {
  requesting: false,
  success: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {

  },
  extraReducers: ((builder) => {

  }),
});


const cartReducer = orderSlice.reducer;
export default cartReducer;
