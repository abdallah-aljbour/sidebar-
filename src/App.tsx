import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "./index.css";

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <div className={`main-content ${isCollapsed ? "collapsed" : ""}`}>
          <Routes>
            <Route path="/" element={<Home isCollapsed={isCollapsed} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
