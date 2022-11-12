import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./Board";
import Detail from "./Detail";
import Mynavbar from "./Mynavbar";

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
