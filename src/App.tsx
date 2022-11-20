import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Detail from "./components/Detail";
import Mynavbar from "./components/Mynavbar";

function App() {
  return (
    <div>
      <Mynavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
