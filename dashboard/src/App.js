import React from 'react';
import Dashboard from './admin/Dashboard';
import AdminPosts from './admin/AdminPosts';
import AdminComments from './admin/AdminComments';
import Products from './admin/Products';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
   <Router>
    <Dashboard />
    <Routes>
  
      </Routes>
  </Router>
   </>
  );
}

export default App;
