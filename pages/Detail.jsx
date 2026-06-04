import { useParams } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

const Detail = () => {

  const { id } = useParams();
  const { todos } = useTodo();

  const todo = todos.find(
    (todo) => todo.id === Number(id)
  );

  if (!todo) {
    return <h2>일정을 찾을 수 없습니다.</h2>;
  }

  return (
    <div className="container">

      <h1>상세 페이지</h1>

      <div className="detail-box">

        <p>번호 : {todo.id}</p>

        <p>내용 : {todo.text}</p>

        <p>
          상태 :
          {todo.completed
            ? " 완료"
            : " 미완료"}
        </p>

      </div>

    </div>
  );
};

export default Detail;