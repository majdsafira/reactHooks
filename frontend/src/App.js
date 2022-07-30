import './App.css';
import Home from './components/Home';
import PostForm from './components/PostForm';
import Error from './components/Error';
import Register from "./components/login/Register";
import Login from "./components/login/Login";
import { createContext, useState } from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Nav";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from './components/Posts';
import SinglePost from './components/SinglePost';
import Addcar from './components/Addcar';
import Cardetails from './components/Cardetails';

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
            <Route path="/add_car" element={<Addcar />} />
            <Route path="/car_details" element={<Cardetails />} />
            <Route path="/create_a_post" element={<PostForm />} />
            {/* <Route path="/back" element={<UserProfile />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/edit" element={<UpdateDataU />} /> */}
            <Route path="/posts" element={<Posts />} />
            <Route path="/single_post/:id" element={<SinglePost />} />
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
