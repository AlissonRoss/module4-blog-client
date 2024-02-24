import React from 'react';
import Landing from './pages/Landing.js';
import Blog from './pages/Blog.js';
import Login from './pages/Login.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="/" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
