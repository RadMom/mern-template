import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {HomePage}  from "./pages/HomePage";
import  {Login}  from "./pages/Login";
import  {Registration}  from "./pages/Registration";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
