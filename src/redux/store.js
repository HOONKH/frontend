import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    appReducer: appSlice.reducer,
    // 슬라이스 와 리듀서는 항상 붙어있음
  },
});

export default store;
