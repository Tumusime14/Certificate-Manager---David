import React, { FC, useState } from "react";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table"; 
import "./App.css";

const App: FC = () => {
  const [title, setTitle] = useState<string>("Start");
  const [showTable, setShowTable] = useState<boolean>(false);

  return (
    <div className="App">
      <div className="grd">
        <div className="header">DCCS Tuzla</div>
        <div className="header1"></div>
      </div>
      <div className="container">
        <Sidebar setTitle={setTitle} setShowTable={setShowTable} />
        <div className="content">
          <h1>{title}</h1>
          {showTable && <Table />}
        </div>
      </div>
    </div>
  );
};

export default App;




