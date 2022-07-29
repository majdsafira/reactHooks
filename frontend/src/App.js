import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import PostForm from './components/PostForm';
import Error from './components/Error';
import Register from "./components/login/Register";
import Login from "./components/login/Login";
import { createContext, useState } from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Nav";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const userContext = createContext();

function App() {

  const [userData, setUserData] = useState([]);

  return (
    <div className="app">
      <userContext.Provider value={{ userData, setUserData }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create_a_post" element={<PostForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
        
      </userContext.Provider>
    </div>
  );
}

export default App;
