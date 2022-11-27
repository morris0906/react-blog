import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./Components/Add";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Blog from "./Components/Blog";

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
