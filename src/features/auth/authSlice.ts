import {
  createSlice, PayloadAction
} from "@reduxjs/toolkit";
import { listUsers } from '../../api/data/user';
import {
  State, StatusNotify, User
} from "../../api/models";
import { RootState } from '../../app/store';
import Notify from '../../helpers/notify';

interface AuthState extends State<User> {
  loginStatus: 'idle' | 'pending' | 'success' | 'error';
}

const initialState: AuthState = {
  requesting: false,
  success: false,
  list: listUsers,
  loginStatus: 'idle'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      const user = state.list!.find(list => list.email === action.payload.email);
      if (user) {
        if (user.password === action.payload.password) {
          state.single = user;
          state.loginStatus = 'success';
          Notify.success('Login successfully', StatusNotify.success);
        } else {
          Notify.error('Password is incorrect !', StatusNotify.success);
        }
      } else {
        Notify.error('Email is not exist !', StatusNotify.error);
      }
    },
    register(state, action: PayloadAction<User>) {
      const isExist = state.list!.some((item) => item.email === action.payload.email);
      if (isExist) {
        Notify.error('Email is already exist !', StatusNotify.error);
      } else {
        Notify.success('Register successfully', StatusNotify.success);
        state.list = state.list!.concat(action.payload);
      }
    },
    logout(state) {
      state.single = undefined;
      state.loginStatus = 'idle';
      Notify.success('Logout successfuly !', StatusNotify.success);
    },
    changePassword(state, action: PayloadAction<User>) {
      const index = state.list!.findIndex(list => list.email === action.payload.email);
      state.list![index].password = action.payload.password;
      Notify.success('Change password successfuly !', StatusNotify.success);
    }
  },
  extraReducers: ((builder) => {

  }),
});

export const { login, register, logout, changePassword } = authSlice.actions;

export const selectSingleUser = (state: RootState) => state.auth.single;
export const selectStatusLogin = (state: RootState) => state.auth.loginStatus;
export const selectListUsers = (state: RootState) => state.auth.list;

const authReducer = authSlice.reducer;
export default authReducer;
