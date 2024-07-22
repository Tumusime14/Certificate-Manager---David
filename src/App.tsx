import React, { FC, useState } from "react";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import NewCertificate from "./components/NewCertificate";
import "./App.css";

const App: FC = () => {
  const [title, setTitle] = useState<string>("Start");
  const [showTable, setShowTable] = useState<boolean>(false);
  const [showNewCertificate, setShowNewCertificate] = useState<boolean>(false);

  const handleNewCertificate = () => {
    setShowTable(false);
    setShowNewCertificate(true);
    setTitle("New Certificate");
  };

  return (
    <div className="App">
      <div className="grd">
        <div className="header">DCCS Tuzla</div>
        <div className="header1"></div>
      </div>
      <div className="container">
        <Sidebar setTitle={setTitle} setShowTable={setShowTable} setShowNewCertificate={setShowNewCertificate} />
        <div className="content">
          <h1>{title}</h1>
          {showTable && !showNewCertificate && <Table onNewCertificate={handleNewCertificate} />}
          {showNewCertificate && <NewCertificate />}
        </div>
      </div>
    </div>
  );
};

export default App;





