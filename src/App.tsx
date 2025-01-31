import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
