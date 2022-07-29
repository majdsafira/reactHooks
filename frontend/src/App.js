import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import PostForm from './components/PostForm';
import Error from './components/Error';
import Register from "./components/login/Register";
import Login from "./components/login/Login";
import Footer from "./layout/Footer";
import Navbar from "./layout/Nav";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create_a_post" element={<PostForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
