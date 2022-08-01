import { NavLink } from "react-router-dom";
const Navbar =()=>{

    const user_id = sessionStorage.getItem("user_id");

    const handleClick = () => {
      sessionStorage.clear();
      window.location.href = "http://localhost:3000/";
    };
   
    return(

<header id="header" className="defualt">



<div className="menu">
   <nav id="menu" className="mega-menu">
    <section className="menu-list-items">
     <div className="container">
      <div className="row">
       <div className="col-md-12 position-relative">
        <ul className="menu-logo">
            <li>
                <a href="index-2.html"><img id="logo_img" src="images/logo-light.png" alt="logo"/> </a>
            </li>
        </ul>
        <ul className="menu-links">
            <li> <a href="/">Home</a></li>
           
            <li> <NavLink  to="/Posts">Posts</NavLink></li>
            <li> <NavLink  to="/car_list">Cars List </NavLink></li>
            <li className="nav-item"><NavLink  to="/Contact">Contact</NavLink></li>
            <li> <a href="/About">About</a></li>
                
               
             {user_id ==null?(
            <li><a href="/">Account <i className="fa fa-angle-down fa-indicator"></i></a>
                <ul className="drop-down-multilevel right-menu">
                    <li className="nav-item"><NavLink  to="/login">Login</NavLink></li>
                    <li className="nav-item"><NavLink  to="/register">Signup</NavLink></li>
                </ul>
            </li>
    ):(
        <>
        <li><a href="/">Account <i className="fa fa-angle-down fa-indicator"></i></a>
            <ul className="drop-down-multilevel right-menu">
                <li className="nav-item"><NavLink className="nav-link" to="/userprofile">Account</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" onClick={handleClick} to="/" >Logout</NavLink></li>
            </ul>
        </li>
        </>
    )}
            <li>

    
            
              <div className="search-top"> <a className="search-btn not_click d-none d-lg-block" href="/;">Search Button</a>
                <div className="search-box not-click">
                  <div className="row">
                    <div className="col-xl-2 col-md-4 col-sm-6">
                     <div className="selected-box">
                      <select className="selectpicker">
                      <option>Make </option>
                      <option>BMW</option>
                      <option>Honda </option>
                      <option>Hyundai </option>
                      <option>Nissan </option>
                      <option>Mercedes Benz </option>
                     </select>
                    </div>
                     </div>
                     <div className="col-xl-2 col-md-4 col-sm-6">
                      <div className="selected-box">
                         <select className="selectpicker">
                          <option>Model</option>
                          <option>3-Series</option>
                          <option>Carrera</option>
                          <option>GT-R</option>
                          <option>Cayenne</option>
                          <option>Mazda6</option>
                          <option>Macan</option>
                         </select>
                       </div>
                      </div>
                      <div className="col-xl-2 col-md-4 col-sm-6">
                       <div className="selected-box">
                       <select className="selectpicker">
                        <option>Year</option>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                       </select>
                      </div>
                        </div>
                       <div className="col-xl-2 col-md-4 col-sm-6">
                        <div className="selected-box">
                         <select className="selectpicker">
                            <option>Body style</option>
                            <option>2dr Car</option>
                            <option>4dr Car</option>
                            <option>Convertible</option>
                            <option>Sedan</option>
                            <option>Sports Utility</option>
                           </select>
                          </div>
                        </div>
                       <div className="col-xl-2 col-md-4 col-sm-6">
                        <div className="selected-box">
                         <select className="selectpicker">
                            <option>Vehicle Status</option>
                            <option>Condition</option>
                            <option>All Conditions</option>
                            <option>Condition</option>
                            <option>Brand New</option>
                            <option>Slightly Used</option>
                            <option>Used</option>
                           </select>
                         </div>
                        </div>
                       <div className="col-xl-2 col-md-4 col-sm-6">

                        <div className="text-center">
                          <button className="button red" type="button">Search</button>
                      </div>
                    </div>
                  </div>
                 </div>
               </div>
              </li>
            </ul>
           </div>
          </div>
         </div>
        </section>
       </nav>
     
     </div>
    </header>
        
        );
}

export default Navbar;