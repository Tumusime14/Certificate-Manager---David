import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './styles/App.css';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import AddCertificate from './components/certificates/AddCertificate';
import EditCertificate from './components/certificates/EditCertificate';
import Header from './components/Header';
import { useLanguage } from './components/context/LanguageContext';

const Start: FC = () => {
  const { translations } = useLanguage();
  return <h1>{translations['start']}</h1>;
};

const App: FC = () => {
  const { translations } = useLanguage();

  return (
    <Router>
      <div className="App">
        <header className="main-header">
          <div className="header">{translations['header']}</div>
          <div className="sub-header"><Header /></div>
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
              <Route path="/new-certificate" element={<AddCertificate />} />
              <Route path="/edit-certificate/:id" element={<EditCertificate />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
