import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
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
import Dashboard from './admin/Dashboard';
import UserProfile from './components/UserProfile';
import UpdateDataU from './components/UpdateDataU';
import Cardetails from './components/Cardetails';
import Carlist from './components/Carlist';
import About from './components/About';

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
            <Route path="/back" element={<UserProfile />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/edit" element={<UpdateDataU />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/create_a_post" element={<PostForm />} />
            <Route path="/car_list" element={<Carlist />} />
            <Route path="/single_post/:id" element={<SinglePost />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
             <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />
            <Route path="/Contact" element={<Contact />} />
             <Route path="/Dashboard " element={<Dashboard />} />
             
          </Routes>
          <Footer />
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
