import {
  createSlice, PayloadAction
} from '@reduxjs/toolkit';
import { listDistrict, listProvinces, listWards } from '../../api/data/location';
import {
  District, Order, Province, State, Ward
} from '../../api/models';
import { RootState } from '../../app/store';

interface CartState extends State<Order> {
  listProvinces: Province[],
  listDistrict: District[],
  listWards: Ward[];
}

const initialState: CartState = {
  requesting: false,
  success: false,
  listProvinces,
  listDistrict: [],
  listWards: []
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    chooseProvince(state, action: PayloadAction<number>) {
      state.listDistrict = listDistrict.filter(list => list.provinceId === action.payload);
      state.listWards = [];
    },
    chooseDistrict(state, action: PayloadAction<number>) {
      state.listWards = listWards.filter(list => list.districtId === action.payload);
    }
  },
  extraReducers: ((builder) => {

  }),
});


export const { chooseProvince, chooseDistrict } = orderSlice.actions;

const orderReducer = orderSlice.reducer;
export const selectListProvinces = (state: RootState) => state.order.listProvinces;
export const selectListDistrict = (state: RootState) => state.order.listDistrict;
export const selectListWards = (state: RootState) => state.order.listWards;

export default orderReducer;
