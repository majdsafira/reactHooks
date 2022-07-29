import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import PostForm from './components/PostForm';
import Error from './components/Error';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className='app'>
      {/* navbar goes here  */}
   <Router>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/create_a_post" element={<PostForm />} />
    {/* add routes here  */}
    <Route path="*" element={<Error />} />
    </Routes>
    </Router>
      {/* footer goes here  */}
    </div>
   
  );
}

export default App;
