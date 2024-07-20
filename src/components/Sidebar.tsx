import React, { useState } from "react";
import "./Sidebar.css";
import Home from "../components/icons/home";
import Menu from "../components/icons/menu";

interface SidebarProps {
  setTitle: (title: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setTitle }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className="sidebar">
      <div className="menu-item" onClick={() => setTitle("Start")}>
        <Home /> Start
      </div>
      <div className="menu-item" onClick={() => setShowDropdown(!showDropdown)}>
        <Menu /> Machine Learning
      </div>
      {showDropdown && (
        <div className="dropdown">
          <div className="dropdown-item" onClick={() => setTitle("Example 1")}>
            Example 1
          </div>
          <div className="dropdown-item" onClick={() => setTitle("Example 2")}>
            Example 2
          </div>
          <div className="dropdown-item" onClick={() => setTitle("Example 3")}>
            Example 3
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;