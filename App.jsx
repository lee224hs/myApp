// App.jsx
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/detail/:id"
            element={<Detail />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;