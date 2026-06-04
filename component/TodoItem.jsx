import { Link } from "react-router-dom";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {

  const {
    deleteTodo,
    toggleTodo,
  } = useTodo();

  return (
    <div className="todo-item">

      <span
        onClick={() =>
          toggleTodo(todo.id)
        }
        className={
          todo.completed
            ? "todo-text completed"
            : "todo-text"
        }
      >
        {todo.text}
      </span>

      <div>

        <Link
          to={`/detail/${todo.id}`}
          className="detail-link"
        >
          상세보기
        </Link>

        <button
          onClick={() =>
            deleteTodo(todo.id)
          }
        >
          삭제
        </button>

      </div>

    </div>
  );
};

export default TodoItem;