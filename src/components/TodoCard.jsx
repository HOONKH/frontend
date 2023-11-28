import { ImBin } from "react-icons/im";
import { FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleDone } from "../redux/appThunk";

const TodoCard = ({ title, id, index, isDone }) => {
  //   console.log(isDone)
  //   false 가 들어오는지 확인
  const dispatch = useDispatch();

  const onClickIsDone = () => {
    dispatch(toggleDone({ todoId: id }));
  };

  return (
    <li
      className={` w-96 text-[#0000099] py-2 text-md flex ${
        index % 2 ? "bg-white" : "bg-purple-100"
      }`}
    >
      {" "}
      <span className=" w-1/12 inline-block">{id}</span>
      <button
        onClick={onClickIsDone}
        className={`${isDone && "line-through"} w-7/12`}
      >
        {title}
      </button>
      <button className=" w-2/12 px-5 hover:text-purple-700">
        <FaPen />
      </button>
      <button className=" w-2/12 px-5 hover:text-purple-700">
        <ImBin />
      </button>
    </li>
  );
};
export default TodoCard;
