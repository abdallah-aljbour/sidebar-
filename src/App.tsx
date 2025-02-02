// App.tsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "./index.css";

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSubmenuOpen = (isOpen: boolean) => {
    setIsSubmenuOpen(isOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar
          isCollapsed={isCollapsed}
          toggleSidebar={toggleSidebar}
          onSubmenuChange={handleSubmenuOpen}
        />
        <div
          className={`main-content ${isCollapsed ? "collapsed" : ""} ${
            isSubmenuOpen ? "submenu-open" : ""
          }`}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home isCollapsed={isCollapsed} isSubmenuOpen={isSubmenuOpen} />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
