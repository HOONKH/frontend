import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./redux/appThunk";
import CreatTodo from "./components/CreatTodo";

const App = () => {
  const { todos } = useSelector((state) => state.appReducer);
  // 바깥에서 가져온 state이기때문에 소괄호안에 state를 넣어줌.
  // useSelector 는 이니셜스테이트를 가져올수있음. appReducer에 부착한 appSlice를 가져옴
  // appReducer는 store에 있는 걸 가져옴
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
    // 만들어놓은 리듀서나 thunk (getTodos)를 실행시켜줌 소괄호안에
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="bg-blue-100">
      <CreatTodo />
    </div>
  );
};

export default App;
