// pages/Home.jsx

import { useEffect } from "react";
import { Link } from "react-router-dom";

import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";
import UserInfo from "../component/UserInfo";

const Home = () => {

  useEffect(() => {
    console.log("Home 렌더링");
  }, []);

  return (
    <div className="container">

  <h1>Todo List</h1>

  <UserInfo name="홍길동" />

  <Link
    to="/login"
    className="login-link"
  >
    로그인 페이지 이동
  </Link>

  <TodoForm />

  <TodoList />

</div>
  );
};

export default Home;