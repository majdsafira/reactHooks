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
<<<<<<< HEAD
// import Dashboard from './admin/Dashboard';
 import Cardetails from './components/Cardetails';
// import AdminPosts from './Posts'
=======
import Dashboard from './admin/Dashboard';
import UserProfile from './components/UserProfile';
import UpdateDataU from './components/UpdateDataU';

import Cardetails from './components/Cardetails';
>>>>>>> b1113c572cf9054375bbac1573992e8b85d4920a

export const userContext = createContext();

function App() {

  const [userData, setUserData] = useState([]);

  return (
    <div className="app">
      
      <userContext.Provider value={{ userData, setUserData }}>
<<<<<<< HEAD
 
=======
<<<<<<< HEAD
        {/* <Dashboard /> */}
=======
   <Dashboard />
>>>>>>> b1113c572cf9054375bbac1573992e8b85d4920a
>>>>>>> 7a76948b40d61b16bb8a01d7445447cc7c5221e4
        <Router>
          <Navbar />
          <Routes>
         
            <Route path="/" element={<Home />} />
            <Route path="/add_car" element={<Addcar />} />
            <Route path="/car_details" element={<Cardetails />} />
            <Route path="/create_a_post" element={<PostForm />} />
<<<<<<< HEAD
            <Route path="/posts" element={<Posts />} />
            {/* <Route path="/back" element={<UserProfile />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/edit" element={<UpdateDataU />} /> */}
            {/* <Route path="/admin/posts" element={<AdminPosts />} /> */}
=======
            <Route path="/back" element={<UserProfile />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/edit" element={<UpdateDataU />} />
            <Route path="/posts" element={<Posts />} />
>>>>>>> b1113c572cf9054375bbac1573992e8b85d4920a
            <Route path="/single_post/:id" element={<SinglePost />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
             <Route path="/Contact" element={<Contact />} />
             {/* <Route path="/Dashboard " element={<Dashboard />} /> */}
            <Route path="*" element={<Error />} />
<<<<<<< HEAD
           
=======
            <Route path="/Contact" element={<Contact />} />
             <Route path="/Dashboard " element={<Dashboard />} />
             
>>>>>>> b1113c572cf9054375bbac1573992e8b85d4920a
          </Routes>
          <Footer />
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
