import React from 'react';
import AdminPosts from './admin/AdminPosts';
import AdminComments from './admin/AdminComments';
import AdminUsers from './admin/AdminUsers';
import Products from './admin/Products';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './admin/Dashboard';
function App() {
  return (
   <>
   <Router>
    <Routes>
    <Route exact path="/dash" element={<Dashboard/>} />
    <Route exact path="/AdminUsers" element={<AdminUsers />} />
    <Route exact path="/AdminPosts" element={<AdminPosts/>} />
    <Route exact path="/AdminComments" element={<AdminComments/>} />
    <Route exact path="/Products" element={<Products/>} />
      </Routes>
  </Router>
   </>
  );
}

export default App;
