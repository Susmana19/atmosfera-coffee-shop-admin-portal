//import eskternal
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import internal
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
