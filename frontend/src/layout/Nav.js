import { NavLink } from "react-router-dom";
const Navbar =()=>{

    const user_id = sessionStorage.getItem("user_id");

    const handleClick = () => {
      sessionStorage.clear();
      window.location.href = "http://localhost:3000/";
    };
   
    return(

<header id="header" className="defualt">
<div className="topbar">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 col-md-12">
				<div className="topbar-left text-lg-start text-center">
				   <ul className="list-inline">
             <li> <i className="fa fa-envelope-o"> </i> support@website.com</li>
             <li> <i className="fa fa-clock-o"></i> Mon - Sat 8.00 - 18.00. Sunday CLOSED</li>
           </ul>
				</div>
			</div>
			<div className="col-lg-6 col-md-12">
				<div className="topbar-right text-lg-end text-center">
					 <ul className="list-inline">
             <li> <i className="fa fa-phone"></i> (007) 123 456 7890</li>
             <li><a href="#"><i className="fa fa-facebook"></i></a></li>
             <li><a href="#"><i className="fa fa-twitter"></i></a></li>
             <li><a href="#"><i className="fa fa-instagram"></i></a></li>
             <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
           </ul>
				</div>
			</div>
		</div>
	</div>
</div>



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
            <li className="active"><a href="/"> Home <i className="fa fa-angle-down fa-indicator"></i></a>
                
                <ul className="drop-down-multilevel">
                    <li className="active"><a href="index-2.html">Home 1</a></li>
                    <li><a href="index-3.html">Home 2</a></li>
                    <li><a href="index-4.html">Home 3</a></li>
                    <li><a href="index-5.html">Home 4</a></li>
                    <li><a href="index-6.html">Home 5</a></li>
                    <li><a href="index-7.html">Home 6</a></li>
                    <li><a href="index-8.html">Home 7</a></li>
                    <li><a href="index-9.html">Home 8</a></li>
                    <li><a href="index-10.html">Home 9</a></li>
                    <li><a href="index-11.html">Home 10</a></li>
                    <li><a href="index-car-service.html">Car service </a></li>
                    <li><a href="index-car-directory.html"> Car directory</a></li>
                    <li><a href="index-car-listing.html">Car listing </a></li>
                    <li><a href="index-landing-page.html">landing page</a></li>
                </ul>
            </li>
            <li><a href="/">Pages <i className="fa fa-angle-down fa-indicator"></i></a>
                <div className="drop-down menu-bg grid-col-12">
                    <div className="grid-row">
                        <div className="grid-col-3">
                            <ul>
                              <li><a href="about-01.html">About 01</a></li>
                              <li><a href="about-02.html">About 02</a></li>
                              <li><a href="service-01.html">service 01</a></li>
                              <li><a href="service-02.html">service 02</a></li>
                              <li><a href="career.html">career</a></li>
                            </ul>
                        </div>
                        <div className="grid-col-3">
                            <ul>
                              <li><a href="team-01.html">team 01</a></li>
                              <li><a href="team-02.html">team 02</a></li>
                              <li><a href="contact-01.html">contact 01</a></li>
                              <li><a href="contact-02.html">contact 02</a></li>
                              <li><a href="faq.html">faq</a></li>
                            </ul>
                        </div>
                        <div className="grid-col-3">
                            <ul>
                              <li><a href="login.html">login</a></li>
                              <li><a href="register.html">register</a></li>
                              <li><a href="error-404.html">error 404</a></li>
                              <li><a href="coming-soon.html">coming soon</a></li>
                              <li><a href="typography.html">typography</a></li>
                            </ul>
                        </div>
                        <div className="grid-col-3">
                            <ul>
                              <li><a href="page-left-sidebar.html">page left sidebar </a></li>
                              <li><a href="page-right-sidebar.html">page right sidebar </a></li>
                              <li><a href="page-both-sidebar.html">page both sidebar </a></li>
                              <li><a href="terms-and-conditions.html">terms and conditions </a></li>
                              <li><a href="privacy-policy.html">privacy policy </a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </li>
            <li><a href="/">blog <i className="fa fa-angle-down fa-indicator"></i></a>
               
                <ul className="drop-down-multilevel">
                    <li><a href="/">blog classNameic <i className="fa fa-angle-right fa-indicator"></i> </a>
                    
                        <ul className="drop-down-multilevel">
                           <li><a href="blog-left-sidebar.html">left sidebar</a></li>
                           <li><a href="blog-right-sidebar.html">right sidebar</a></li>
                           <li><a href="blog-fullwidth.html">fullwidth</a></li>
                        </ul>
                    </li>
                    <li><a href="/">Masonry  <i className="fa fa-angle-right fa-indicator"></i> </a>
                   
                        <ul className="drop-down-multilevel">
                            <li><a href="blog-masonry-2-collums.html"> 2 column </a> </li>
                            <li><a href="blog-masonry-3-collums.html"> 3 column </a> </li>
                            <li><a href="blog-masonry-4-collums.html"> 4 column </a> </li>
                            <li><a href="blog-masonry-left-sidebar.html">left sidebar</a></li>
                           <li><a href="blog-masonry-right-sidebar.html">right sidebar</a></li>
                        </ul>
                    </li>
                    <li><a href="/">blog single <i className="fa fa-angle-right fa-indicator"></i> </a>
                     
                        <ul className="drop-down-multilevel">
                            <li><a href="blog-single-01.html">blog single 01 </a> </li>
                            <li><a href="blog-single-02.html">blog single 02 </a> </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="/">Car listing  <i className="fa fa-angle-down fa-indicator"></i></a>
              
                <ul className="drop-down-multilevel">
                    <li><a href="listing-01.html">listing 01</a></li>
                    <li><a href="listing-02.html">listing 02</a></li>
                </ul>
            </li>
            <li><a href="/">Car details  <i className="fa fa-angle-down fa-indicator"></i></a>
              
                <ul className="drop-down-multilevel">
                    <li><a href="details-01.html">details 01</a></li>
                    <li><a href="details-02.html">details 02</a></li>
                </ul>
            </li>
            <li><a href="/"> Contact <i className="fa fa-angle-down fa-indicator"></i></a>
                
                <ul className="drop-down-multilevel right-menu">
                   <li><a href="contact-01.html">contact 01</a></li>
                   <li><a href="contact-02.html">contact 02</a></li>
                </ul>
            </li>
            <li>
             {user_id ==null?(
        <>
      <ul>
        <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
     
        <li className="nav-item"><NavLink className="nav-link" to="/register">Signup</NavLink></li>
        </ul>
        </>
    ):(
        <>
            <li className="nav-item"><NavLink className="nav-link" to="/userprofile">Account</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" onClick={handleClick} to="/" >Logout</NavLink></li>
        </>
    )}

    
            
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