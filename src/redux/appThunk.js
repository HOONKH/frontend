import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("appSlice/getTodos", async () => {
  const response = await axios.get("http://localhost:3010/todos");
  // 썽크 인자값으로 만든다.
  // 겟("환경변수로") .env

  //   console.log(response);
  //   //   콘솔로그 찍는 위치

  return response.data.todos;
  // 리스폰스를 data로 받아서 todos로 내보냄
  // return 반환으로  action.payload에 들어가
});
// 구조분해해서 title을 받음
export const creatTodo = createAsyncThunk(
  "appSlice/creatTodo",
  async ({ title }) => {
    const response = await axios.post(
      "http://localhost:3010/todos",
      { title }, //바디
      {
        headers: {
          //헤더
          "content-Type": "application/json",
        },
      }
    );
    return response.data.todo;
    // 백엔드의 키밸류의
    // 키값이랑 동일하게 todo 로 받아씀.
    // 포스트요청의 todos 로
    // 비동기요청을 위해 썽크를 씀
    // 슬라이스는 객체로 썽크는 인자값으로 만든다.
    //
    // 비동기 하는 공간 = appThunk
    // 여기서 appslice로 creatTodo와 getTodo
  }
);

export const toggleDone = createAsyncThunk(
  "appSlice/toggleDone",
  async ({ todoId }) => {
    const response = await axios.put(
      `http://localhost:3010/todos/${todoId}/done`
    );
    return response.data.todo;
  }
);
