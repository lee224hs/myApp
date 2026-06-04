import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

    if(id === "admin" && pw === "1234"){
      alert("로그인 성공");
      navigate("/");
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }

  };

  return (
    <div className="container">
      <h1>로그인</h1>

      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />

      <button onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
};

export default Login;