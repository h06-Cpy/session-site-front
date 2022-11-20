import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Detail from "./components/Detail";
import WritePost from "./components/WritePost";
import Mynavbar from "./components/Mynavbar";

function App() {
  return (
    <div>
      <Router>
        <Mynavbar />
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/newPost" element={<WritePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
