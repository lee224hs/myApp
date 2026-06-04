// components/TodoForm.jsx

import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
  const [text, setText] = useState("");

  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button type="submit">
        추가
      </button>
    </form>
  );
};

export default TodoForm;