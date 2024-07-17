import React, { FC } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">{/* Main content goes here */}</div>
    </div>
  );
};

export default App;