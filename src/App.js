import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./Components/Add";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Blog from "./Components/Blog";
import WrongPages from "./Components/WrongPages";
import Footer from "./Components/Footer";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add" element={<Add />} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/signin" element={<LogIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="*" element={<WrongPages />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
