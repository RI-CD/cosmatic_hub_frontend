import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Makeup from "./components/ProductType/Makeup";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/makeup" element={<Makeup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
