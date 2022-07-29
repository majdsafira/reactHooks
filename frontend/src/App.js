import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Navbar from './layout/Nav';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Login />
    <Register /> */}
    </>
  );
}

export default App;
