import { useDispatch, useSelector } from "react-redux";
import { creatTodo } from "../redux/appThunk";
import { setNewTodo } from "../redux/appSlice";

const CreatTodo = () => {
  // const [_, _] = useState(_);
  // 리덕스로 옮겨주고 useSelector로 가져옴.
  const { newTodo } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  const onSubmitCreatTodo = async (e) => {
    // async를 넣어 await의 실행 순서를 보장받을수있음.
    e.preventDefault();

    if (!newTodo) return;

    await dispatch(creatTodo({ title: newTodo }));
    // appthunk에 export const creatTodo로 감 바디 인자의 title값 요구
    // creatTodo의 action 만 사용
    dispatch(setNewTodo(""));
    // 비동기는 순서보장을 받을수없음.
  };

  return (
    <form className="flex" onSubmit={onSubmitCreatTodo}>
      <input
        className="px-4 py-2 mt-2 text-2xl focus:outline-none border-2 rounded-lg focus:border-blue-600"
        type="text"
        value={newTodo}
        onChange={(e) => dispatch(setNewTodo(e.target.value))}
      />
      <input
        className="ml-4 px-4 py-3 bg-purple-400 mt-2 hover:bg-purple-600 active:bg-purple-800 rounded-lg"
        type="submit"
        value="생 성"
      />
    </form>
  );
};
export default CreatTodo;
