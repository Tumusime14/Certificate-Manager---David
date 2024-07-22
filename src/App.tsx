import React, { FC, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import NewCertificate from "./components/NewCertificate.tsx";
import "./App.css";

const App: FC = () => {
  const [title, setTitle] = useState<string>("Start");
  const [showTable, setShowTable] = useState<boolean>(false);

  return (
    <Router>
    <div className="App">
      <div className="grd">
        <div className="header">DCCS Tuzla</div>
        <div className="header1"></div>
      </div>
      <div className="container">
        <Sidebar setTitle={setTitle} setShowTable={setShowTable} />
        <div className="content">
          <h1>{title}</h1>
          <Routes>
            <Route path="/" element={<Table/>} />
            <Route path="/new-certificate" element={<NewCertificate/>}/>
          </Routes>
        </div>
      </div>
    </div>
  </Router>  
  );
};

export default App;




