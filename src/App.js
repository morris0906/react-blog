import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./Components/Add";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
