import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages and components
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to={"/"} />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
