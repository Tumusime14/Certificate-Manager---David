import React, { FC, useState } from "react";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import NewCertificate from "./components/NewCertificate";
import "./App.css";

const App: FC = () => {
  const [title, setTitle] = useState<string>("Start");
  const [showTable, setShowTable] = useState<boolean>(false);
  const [showNewCertificate, setShowNewCertificate] = useState<boolean>(false);
  const [tableData, setTableData] = useState<any[]>([
    {
      supplier: 'DAIMLER AG, 1, Berlin',
      certificateType: 'Permission of Printing',
      validFrom: '21.08.2017',
      validTo: '26.08.2017'
    },
    {
      supplier: 'ANDEMIS GmbH, 1, Stuttgart',
      certificateType: 'OHSAS 18001',
      validFrom: '18.08.2017',
      validTo: '24.08.2017'
    },
    {
      supplier: 'ANDEMIS GmbH, 1, Stuttgart',
      certificateType: 'Permission of Printing',
      validFrom: '04.10.2017',
      validTo: '10.10.2017'
    }
  ]);

  const handleNewCertificate = () => {
    setShowTable(false);
    setShowNewCertificate(true);
    setTitle("");
  };

  const handleSaveData = (newData: any) => {
    setTableData((prevData) => [...prevData, newData]); 
    setShowNewCertificate(false);
    setShowTable(true);
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
          {showTable && !showNewCertificate && <Table onNewCertificate={handleNewCertificate} data={tableData} />}
          {showNewCertificate && <NewCertificate onSave={handleSaveData} />}
        </div>
      </div>
    </div>
  );
};

export default App;





