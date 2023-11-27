import { useState } from "react";
import { useDispatch } from "react-redux";
import { creatTodo } from "../redux/appThunk";

const CreatTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const onSubmitCreatTodo = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    dispatch(creatTodo({ title: newTodo }));
    // appthunk에 export const creatTodo로 감 바디 인자의 title값 요구
  };

  return (
    <form onSubmit={onSubmitCreatTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input type="submit" value="생 성" />
    </form>
  );
};
export default CreatTodo;
