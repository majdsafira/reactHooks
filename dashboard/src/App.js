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
    <Route path="/Dashboard" element={<Dashboard />} /> 
      </Routes>
  </Router>
   </>
  );
}

export default App;
