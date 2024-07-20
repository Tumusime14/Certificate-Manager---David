import React, { useState } from "react";
import "./Sidebar.css";
import Home from "../components/icons/home";
import Menu from "../components/icons/menu";
import Down from "../components/icons/down";

interface SidebarProps {
  setTitle: (title: string) => void;
  setShowTable: (show: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setTitle, setShowTable }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className="sidebar">
      <div className="menu-item" onClick={() => setTitle("Start")}>
        <Home /> Start
      </div>
      <div className="menu-item" onClick={() => setShowDropdown(!showDropdown)}>
        <Menu /> Machine Learning &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Down />
      </div>
      {showDropdown && (
        <div className="dropdown">
          <div
            className="dropdown-item"
            onClick={() => {
              setTitle("Example 1");
              setShowTable(true); 
            }}
          >
            Example 1
          </div>
          <div
            className="dropdown-item"
            onClick={() => {
              setTitle("Example 2");
              setShowTable(false);
            }}
          >
            Example 2
          </div>
          <div
            className="dropdown-item"
            onClick={() => {
              setTitle("Example 3");
              setShowTable(false);
            }}
          >
            Example 3
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;


