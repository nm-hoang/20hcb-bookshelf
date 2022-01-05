import {
  AnyAction,
  createSlice,
  PayloadAction,
  createAsyncThunk
} from '@reduxjs/toolkit';
import todoApi from '../../api/todoApi';
import {
  State,
  Todo,
  ResponseBody,
  SingleResponse
} from '../../api/models';
import { RootState } from '../../app/store';

interface TodoState extends State<Todo> {}

const initialState: TodoState = {
  requesting: false,
  success: false
};

export const getListTodo = createAsyncThunk(
  'todo/getListTodo',
  async () => {
    const res = await todoApi.getList();
    return res;
  },
);

export const getByIdTodo = createAsyncThunk(
  'todo/getByIdTodo',
  async (id: number) => {
    const res = await todoApi.getById(id);
    return res;
  },
);
export const insertTodo = createAsyncThunk(
  'todo/insertTodo',
  async (data: Todo) => {
    const res = await todoApi.insert(data);
    return res;
  },
);

const isPendingAction = (action: AnyAction) =>
  action.type.endsWith("/pending") && action.type.includes("todo");
const isRejectedAction = (action: AnyAction) =>
  action.type.endsWith("/rejected") && action.type.includes("todo");

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setDemo(state, action: PayloadAction<Todo[]>) {
      state.list = action.payload;
    },
  },
  extraReducers: ((builder) => {
    builder
      .addCase(getListTodo.fulfilled, (state, action: PayloadAction<any>) => {
        state.requesting = false;
        state.success = true;
        state.list = action.payload;
      })

      .addCase(getByIdTodo.fulfilled, (state, action: PayloadAction<SingleResponse<Todo>>) => {
        state.requesting = false;
        state.success = true;
        state.single = action.payload.data;
      })
      .addCase(insertTodo.fulfilled, (state, action: PayloadAction<ResponseBody>) => {
        state.requesting = false;
        state.success = true;
        state.data = action.payload.data;
      })
      // utilities for  pending, rejected
      .addMatcher(isPendingAction, (state) => {
        state.requesting = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.requesting = state.success = false;
        state.message = action.error.message;
      });
  }),
});

export const selectListTodo = (state: RootState) => state.todo.list;

const todoReducer = todoSlice.reducer;
export default todoReducer;
