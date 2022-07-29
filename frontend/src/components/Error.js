import React from 'react'

function Error() {
  return (
    <>
    
 <section class="inner-intro bg-1 bg-overlay-black-70">
  <div class="container">
     <div class="row text-center intro-title">
           <div class="col-md-6 text-md-start d-inline-block">
             <h1 class="text-white">404 Error</h1>
           </div>
           <div class="col-md-6 text-md-end float-end">
             <ul class="page-breadcrumb">
                <li><a href="#"><i class="fa fa-home"></i> Home</a> <i class="fa fa-angle-double-right"></i></li>
                <li><a href="#">pages</a> <i class="fa fa-angle-double-right"></i></li>
                <li><span>404 Error</span> </li>
             </ul>
           </div>
     </div>
  </div>
</section>

<section class="error-page page-section-ptb">
  <div class="container">
    <div class="row">
     <div class="col-md-12">
        <div class="error-content text-center">
          <h2>404</h2>
          <img class="img-fluid center-block" src="images/car/23.png" alt=""/>
          <h3 class="text-red">Ooopps:( </h3>
          <strong class="text-black"> The Page you were looking for, couldn't be found</strong>
          <p>Can't find what you looking for? Take a moment and do a search below or start from our <a href="#"> Home Page </a></p>
        </div>
        <div class="error-search">
          <div class="row justify-content-center gray-form g-0">
            <div class="col-xl-7 col-lg-6 col-md-10 col-sm-7 mb-3 mb-sm-0">
              <input id="search" class="form-control" type="text" placeholder="Search for pages..." name="search" />
            </div>
            <div class="col-xl-1 col-lg-2 col-md-2 col-sm-4">
              <a class="button red" href="#">Search</a>
            </div>
          </div>
        </div>
      </div>
     </div>
   </div>
</section>
    </>
  )
}

export default Error