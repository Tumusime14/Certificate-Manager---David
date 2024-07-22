import React, { FC, useState } from "react";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import NewCertificate from "./components/NewCertificate";
import "./App.css";

const App: FC = () => {
  const [title, setTitle] = useState<string>("Start");
  const [showTable, setShowTable] = useState<boolean>(false);
  const [showNewCertificate, setShowNewCertificate] = useState<boolean>(false);
  const [editingCertificate, setEditingCertificate] = useState<any | null>(null);
  const [tableData, setTableData] = useState<any[]>([
    {
      id: 1,
      supplier: 'DAIMLER AG, 1, Berlin',
      certificateType: 'Permission of Printing',
      validFrom: '21.08.2017',
      validTo: '26.08.2017'
    },
    {
      id: 2,
      supplier: 'ANDEMIS GmbH, 1, Stuttgart',
      certificateType: 'OHSAS 18001',
      validFrom: '18.08.2017',
      validTo: '24.08.2017'
    },
    {
      id: 3,
      supplier: 'ANDEMIS GmbH, 1, Stuttgart',
      certificateType: 'Permission of Printing',
      validFrom: '04.10.2017',
      validTo: '10.10.2017'
    }
  ]);

  const handleNewCertificate = () => {
    setEditingCertificate(null);
    setShowTable(false);
    setShowNewCertificate(true);
    setTitle("");
  };

  const handleEditCertificate = (certificate: any) => {
    setEditingCertificate(certificate);
    setShowTable(false);
    setShowNewCertificate(true);
    setTitle("Edit Certificate");
  };

  const handleSaveData = (data: any) => {
    if (data.id) {
      
      setTableData((prevData) =>
        prevData.map((item) =>
          item.id === data.id ? { ...data } : item
        )
      );
    } else {
      
      const newId = tableData.length ? Math.max(...tableData.map(item => item.id)) + 1 : 1;
      setTableData((prevData) => [
        ...prevData,
        { ...data, id: newId }
      ]);
    }
    setShowNewCertificate(false);
    setShowTable(true);
  };

  const handleDeleteCertificate = (id: number) => {
    setTableData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <div className="grd">
        <div className="header">DCCS Tuzla</div>
        <div className="header1"></div>
      </div>
      <div className="container">
        <Sidebar
          setTitle={setTitle}
          setShowTable={setShowTable}
          setShowNewCertificate={setShowNewCertificate}
        />
        <div className="content">
          <h1>{title}</h1>
          {showTable && !showNewCertificate && (
            <Table
              onNewCertificate={handleNewCertificate}
              data={tableData}
              onEdit={handleEditCertificate}
              onDelete={handleDeleteCertificate}
            />
          )}
          {showNewCertificate && (
            <NewCertificate
              onSave={handleSaveData}
              existingData={editingCertificate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;





