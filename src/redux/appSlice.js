import { createSlice } from "@reduxjs/toolkit";
import { creatTodo, getTodos } from "./appThunk";
// appThunk에 export된 함수를 가져와서 씀

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    todos: null,
    isLoading: false,
  },
  //   reducers: {},
  // thunk로만 구현할거기때문에 extrareducer만 씀
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      // thunk에서 던져준 data를 받음
      state.todos = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTodos.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(creatTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(creatTodo.fulfilled, (state, action) => {
      // thunk에서 던져준 data를 받음
      state.todos = [...state.todos, action.payload];
      state.isLoading = false;
    });
    builder.addCase(creatTodo.rejected, (state) => {
      state.isLoading = false;
      //   thunk의 creatTodo
    });
  },
});

export default appSlice;
