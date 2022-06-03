import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return ( <>
      <Navbar />
      <div className="mt-5"></div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>);
}

export default App;
