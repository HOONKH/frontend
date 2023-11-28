import { createSlice } from "@reduxjs/toolkit";
import { creatTodo, getTodos, toggleDone } from "./appThunk";
// appThunk에 export된 함수를 가져와서 씀

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    todos: null,
    isLoading: false,
    newTodo: "",
  },
  reducers: {
    setNewTodo: (state, action) => {
      state.newTodo = action.payload;
    },
  },
  //   reducers: {},
  // thunk로만 구현할거기때문에 extrareducer만 씀
  // initailstate는 초기값 state는 값
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      // thunk에서 던져준 data를 받음
      // state,action 쓰는데서는 action만 넣어줌.
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
    builder.addCase(toggleDone.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(toggleDone.fulfilled, (state, action) => {
      state.todos = state.todos.map((v) => {
        if (v.id === action.payload.id) {
          return action.payload;
        } else {
          return v;
        }
        // 배열로 가져워서 id의 값만 바꿔주면 되기 때문에 맵함수를 씀
      });
      // action.payload에 updateTodo가 들어감
      state.isLoading = false;
    });
    builder.addCase(toggleDone.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setNewTodo } = appSlice.actions;
// 내부에서 관리하는 reducer는 엑스포트

export default appSlice;
