import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Cardetails () {
    


    const adId = useParams()
    const [items, setItems] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        async function getPost(){
            const res = await fetch(`http://127.0.0.1:8000/api/ads/${adId.id}`)
            const data = await res.json()
            setItems(data)
            data && setIsLoaded(true)
            console.log(data)
        }
        getPost()
    },[adId.id])

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (


                <>
                    <section class="inner-intro bg-1 bg-overlay-black-70">
                        <div class="container">
                            <div class="row text-center intro-title">
                                <div class="col-md-6 text-md-start d-inline-block">
                                    <h1 class="text-white">{items[0].make} </h1>
                                </div>
                                <div class="col-md-6 text-md-end float-end">
                                    <ul class="page-breadcrumb">
                                        <li><a href="#"><i class="fa fa-home"></i> Home</a> <i class="fa fa-angle-double-right"></i>
                                        </li>

                                        <li><span>details 01</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="car-details page-section-ptb">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-9">
                                    <h3>{items[0].make}</h3>

                                </div>
                                <div class="col-md-3">
                                    <div class="car-price text-lg-end">
                                        <strong>${items[0].price}</strong>
                                        <span>Plus Taxes & Licensing</span>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8">
                                    <div class="slider-slick">
                                        <div id="video-carousel-example" class="carousel slide carousel-fade" data-ride="carousel">
                                           

                                            <div class="carousel-inner" role="listbox">
                                                <div class="carousel-item active">
                                                    <img class="img-fluid" src="/images/detail/big/01.jpg" alt="" />
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="img-fluid" src="/images/detail/big/02.jpg" alt="" />

                                                </div>
                                                <div class="carousel-item">
                                                    <img class="img-fluid" src="/images/detail/big/03.jpg" alt="" />

                                                </div>
                                                
                                            </div>

                                          
                                        </div>
                                    </div>

                                    <div id="tabs">
                                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                                            <li class="nav-item icon-diamond" role="presentation">
                                                <button class="nav-link active" id="general-information-tab" data-bs-toggle="tab"
                                                    data-bs-target="#general-information" type="button" role="tab"
                                                    aria-controls="general-information" aria-selected="true">General
                                                    Information</button>
                                            </li>
                                            {/* <li class="nav-item icon-list" role="presentation">
                                <button class="nav-link" id="features-options-tab" data-bs-toggle="tab"
                                    data-bs-target="#features-options" type="button" role="tab"
                                    aria-controls="features-options" aria-selected="false">Features &
                                    Options</button>
                            </li>
                            <li class="nav-item icon-equalizer" role="presentation">
                                <button class="nav-link " id="vehicle-overview-tab" data-bs-toggle="tab"
                                    data-bs-target="#vehicle-overview" type="button" role="tab"
                                    aria-controls="vehicle-overview" aria-selected="false">Vehicle Overview</button>
                            </li> */}
                                        </ul>
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="general-information" role="tabpanel"
                                                aria-labelledby="general-information-tab">
                                                <p>{items[0].description}</p>
                                            </div>
                                            
                                           
                                        </div>
                                    </div>
                               

                                </div>
                                <div class="col-md-4">
                                    <div class="car-details-sidebar">
                                        <div class="details-block details-weight">
                                            <h5>DESCRIPTION</h5>
                                            <ul>
                                                <li> <span>Make</span> <strong class="text-end">{items[0].make}</strong></li>
                                                <li> <span>Model</span> <strong class="text-end">{items[0].model}</strong></li>
                                                <li> <span>Registration date </span> <strong class="text-end">{items[0].registration_date}</strong></li>
                                                <li> <span>Mileage</span> <strong class="text-end">{items[0].milage} mi</strong></li>
                                                <li> <span>Condition</span> <strong class="text-end">New</strong></li>
                                                <li> <span>Exterior Color</span> <strong class="text-end">{items[0].exterior_color}</strong></li>
                                                <li> <span>Interior Color</span> <strong class="text-end">{items[0].interior_color} (Leather)</strong>
                                                </li>
                                                <li> <span>Transmission</span> <strong class="text-end">{items[0].transmission}</strong></li>
                                                <li> <span>Engine</span> <strong class="text-end">{items[0].Engine}</strong></li>
                                            </ul>
                                        </div>
                                        <div class="details-social details-weight">
                                            <h5>Share now</h5>
                                            <ul>
                                                <li><a href="#"> <i class="fa fa-facebook"></i> facebook</a></li>
                                                <li><a href="#"> <i class="fa fa-twitter"></i> twitter</a></li>
                                                <li><a href="#"> <i class="fa fa-pinterest-p"></i> pinterest</a></li>
                                                <li><a href="#"> <i class="fa fa-dribbble"></i> dribbble</a></li>
                                                <li><a href="#"><i class="fa fa-linkedin"></i> google plus </a></li>
                                                <li><a href="#"> <i class="fa fa-behance"></i> behance</a></li>
                                            </ul>
                                        </div>

                                        <div class="details-phone details-weight">
                                            <div class="feature-box-3 grey-border">
                                                <div class="icon">
                                                    <i class="fa fa-headphones"></i>
                                                </div>
                                                <div class="content">
                                                    <h4>1-888-345-888 </h4>
                                                    <p>Call our seller to get the best price </p>
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
    }


export default Cardetails