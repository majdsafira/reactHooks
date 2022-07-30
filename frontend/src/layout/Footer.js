import { NavLink } from "react-router-dom"

const Footer =()=>{
    return(

        <footer className="footer bg-2 bg-overlay-black-90">
  <div className="container">
    <div className="row">
     <div className="col-md-12">
      <div className="social">
        <ul>
          <li><a className="facebook" href="#">facebook <i className="fa fa-facebook"></i> </a></li>
          <li><a className="twitter" href="#">twitter <i className="fa fa-twitter"></i> </a></li>
          <li><a className="pinterest" href="#">pinterest <i className="fa fa-pinterest-p"></i> </a></li>
          <li><a className="dribbble" href="#">dribbble <i className="fa fa-dribbble"></i> </a></li>
          <li><a className="google-plus" href="#">google plus <i className="fa fa-google-plus"></i> </a></li>
          <li><a className="behance" href="#">behance <i className="fa fa-behance"></i> </a></li>
        </ul>
       </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="about-content">
          <img className="img-fluid" id="logo-footer" src="images/logo-light.png" alt=""/>
          <p>We provide everything you need to build an amazing dealership website developed especially for car sellers dealers or auto motor retailers.</p>
        </div>
        <div className="address">
          <ul>
            <li> <i className="fa fa-map-marker"></i><span>220E Front St. Burlington NC 27215</span> </li>
            <li> <i className="fa fa-phone"></i><span>(007) 123 456 7890</span> </li>
            <li> <i className="fa fa-envelope-o"></i><span>support@website.com</span> </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="usefull-link">
        <h6 className="text-white">Useful Links</h6>
          <ul>
            <li><a href="#"><i className="fa fa-angle-double-right"></i> Change Oil and Filter</a></li>
            <li><a href="#"><i className="fa fa-angle-double-right"></i> Brake Pads Replacement</a></li>
            <li><a href="#"><i className="fa fa-angle-double-right"></i> Timing Belt Replacement</a></li>
            <li><a href="#"><i className="fa fa-angle-double-right"></i> Pre-purchase Car Inspection</a></li>
            <li><a href="#"><i className="fa fa-angle-double-right"></i> Starter Replacement</a></li>
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
                <a href="#">Time to change your </a>
                <span className="post-date"><i className="fa fa-calendar"></i>September 10, 2021</span>
            </div>
         </div>
         <div className="recent-post">
            <div className="recent-post-image">
              <img className="img-fluid" src="images/car/02.jpg" alt=""/>
            </div>
            <div className="recent-post-info">
                <a href="#">The best time to </a>
                <span className="post-date"><i className="fa fa-calendar"></i>September 10, 2021</span>
            </div>
         </div>
         <div className="recent-post">
            <div className="recent-post-image">
              <img className="img-fluid" src="images/car/03.jpg" alt=""/>
            </div>
            <div className="recent-post-info">
                <a href="#">Replacing a timing </a>
                <span className="post-date"><i className="fa fa-calendar"></i>September 10, 2021</span>
            </div>
         </div>
       </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="news-letter">
        <h6 className="text-white">subscribe Our Newsletter </h6>
         <p>Keep up on our always evolving products features and technology. Enter your e-mail and subscribe to our newsletter.</p>
         <form className="news-letter">
           <input type="email" placeholder="Enter your Email" className="form-control placeholder"/>
           <a className="button red" href="#">Subscribe</a>
         </form>
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