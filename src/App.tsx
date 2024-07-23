import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";

const Start = () => <h1>Start</h1>;
const Example1 = () => <h1>Example 1</h1>;
const Example2 = () => <h1>Example 2</h1>;
const Example3 = () => <h1>Example 3</h1>;

const App: FC = () => {
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
                </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;



