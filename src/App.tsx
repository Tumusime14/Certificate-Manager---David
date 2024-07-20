import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import NewCertificate from "./components/NewCertificate"; 
const Start = () => <h1>Start</h1>;
const App: FC = () => {
  const [title, setTitle] = useState<string>("Start");
  const [showTable, setShowTable] = useState<boolean>(false);

  return (
    <Router>
      <div className="App">
        <header className="main-header">
          <div className="header">DCCS Tuzla</div>
          <div className="sub-header"></div>
        </header>
        <div className="container">
          <nav>
            <Sidebar />
          </nav>
          <main className="content">
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/example1" element={<Example1 />} />
              <Route path="/example2" element={<Example2 />} />
              <Route path="/example3" element={<Example3 />} />
              <Route path="/new-certificate" element={<NewCertificate />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
