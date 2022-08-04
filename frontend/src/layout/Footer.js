import { NavLink } from "react-router-dom"

const Footer =()=>{
    return(

        <footer className="footer bg-2 bg-overlay-black-90">
  <div className="container">
    <div className="row">
     <div className="col-md-12">
      <div className="social">
       
       </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="about-content">
          <img className="img-fluid" id="logo-footer" src="images/logo-light.png" alt=""/>
          <p>We provide everything you need to build an amazing dealership website developed especially for car sellers dealers or auto motor retailers.</p>
        </div>
       
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="usefull-link">
        <h6 className="text-white">Useful Links</h6>
          <ul>
            <li><a href="/Posts"><i className="fa fa-angle-double-right"></i> Change Oil and Filter</a></li>
            <li><a href="/Posts"><i className="fa fa-angle-double-right"></i> Brake Pads Replacement</a></li>
            <li><a href="/Posts"><i className="fa fa-angle-double-right"></i> Timing Belt Replacement</a></li>
            <li><a href="/Posts"><i className="fa fa-angle-double-right"></i> Pre-purchase Car Inspection</a></li>
            
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
       <div className="recent-post-block">
        <h6 className="text-white">recent posts </h6>
          <div className="recent-post">
            <div className="recent-post-image">
              <img className="img-fluid" src="images/car/01.jpg" alt=""/>
            </div>
            <div className="recent-post-info">
                <a href="/Posts">Time to change your </a>
                <span className="post-date"><i className="fa fa-calendar"></i>September 10, 2021</span>
            </div>
         </div>
         <div className="recent-post">
            <div className="recent-post-image">
              <img className="img-fluid" src="images/car/02.jpg" alt=""/>
            </div>
            <div className="recent-post-info">
                <a href="/Posts">The best time to </a>
                <span className="post-date"><i className="fa fa-calendar"></i>September 10, 2021</span>
            </div>
         </div>
         
       </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="news-letter">
        <h6 className="text-white">Get in touch </h6>
         <p>Keep up on our always evolving products features and technology. </p>
         <div className="address">
          <ul>
            <li> <i className="fa fa-map-marker"></i><span>Industrial City,Irbid,Jordan </span> </li>
            <li> <i className="fa fa-phone"></i><span>(+962) 77 809 1928</span> </li>
            <li> <i className="fa fa-envelope-o"></i><span>cardealer@gmail.com</span> </li>
          </ul>
        </div>
         
        </div>
      </div>
    </div>
    <hr />
    <div className="copyright">
     <div className="row">
      <div className="col-lg-6 col-md-12">
       <div className="text-lg-start text-center">
        <p>©Copyright 2021 Car Dealer Developed by <a href="http://www.potenzaglobalsolutions.com/" target="_blank">Potenzaglobalsolutions</a></p>
       </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <ul className="list-inline text-lg-end text-center">
          <li><a href="#">privacy policy </a> | </li>
          <li><a href="#">terms and conditions </a> |</li>
          <li><a href="#">contact us </a></li>
        </ul>
      </div>
     </div>
    </div>
  </div>
</footer>

        )
}

export default Footer