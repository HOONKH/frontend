import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./redux/appThunk";
import CreatTodo from "./components/CreatTodo";

import TodoCard from "./components/TodoCard";

const App = () => {
  const { todos } = useSelector((state) => state.appReducer);
  // 바깥에서 가져온 state이기때문에 소괄호안에 state를 넣어줌.
  // useSelector 는 이니셜스테이트를 가져올수있음. appReducer에 부착한 appSlice를 가져옴
  // appReducer는 store에 있는 걸 가져옴
  const dispatch = useDispatch();

  useEffect(() => {
    if (todos) return;
    // todos가 있으면 리턴 널값일때는 리턴
    //

    dispatch(getTodos());
    // 만들어놓은 리듀서나 thunk (getTodos)를 실행시켜줌 소괄호안에
  }, [dispatch, todos]);
  // 디펜던시 => [] 의존성배열이 비어있을때 경고문구 뜸
  //
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className=" min-h-screen max-w-screen-md mx-auto mt-20 flex flex-col items-center">
      <CreatTodo />
      <ul className="mt-12 flex flex-col gap-6">
        {todos?.map((v, i) => (
          /* // ? todos 가 있을때 실행해라 todos && todos.map 과 같음 */
          <TodoCard
            key={i}
            title={v.title}
            id={v.id}
            index={i}
            isDone={v.isDone}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
