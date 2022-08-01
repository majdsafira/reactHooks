import React from 'react'

function Carlist() {
return (
<>
    <section class="inner-intro bg-1 bg-overlay-black-70">
        <div class="container">
            <div class="row text-center intro-title">
                <div class="col-md-6 text-md-start d-inline-block">
                    <h1 class="text-white">cars listing </h1>
                </div>
                <div class="col-md-6 text-md-end float-end">
                    <ul class="page-breadcrumb">
                        <li><a href="/"><i class="fa fa-home"></i> Home</a> <i class="fa fa-angle-double-right"></i>
                        </li>
                        
                        <li><span>Cars</span> </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="product-listing page-section-ptb">
        <div class="container">
            <div class="row">
                <div class="col-md-12 justify-content-center">
                    <div class="section-title">
                        <span>We’d Love to Help You To Have A New Car</span>
                        <h2>LET'S GO!</h2>
                        <div class="separator"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4">
                    <div class="listing-sidebar">

                        <div class="widget-banner">
                            <img class="img-fluid center-block" src="images/banner.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-8">

                    <div class="row">
                        <div class="col-lg-4 col-sm-6">
                            <div class="car-item gray-bg text-center">
                                <div class="car-image">
                                    <img class="img-fluid" src="images/car/01.jpg" alt="" />
                                    <div class="car-overlay-banner">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-link"></i></a></li>

                                        </ul>
                                    </div>
                                </div>

                                <div class="car-content">
                                    <div class="star">

                                    </div>
                                    <a href="#">Acura Rsx</a>
                                    <div class="separator"></div>

                                    <a>Acura Rsx</a>

                                    <div class="price">
                                        <span class="new-price">$32,698 </span>
                                    </div>

                                </div>
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

export default Carlist