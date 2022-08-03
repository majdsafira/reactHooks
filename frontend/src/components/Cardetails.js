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
                                    <h1 class="text-white">Hyundai Santa Fe </h1>
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
                                    <h3>Hyundai Santa Fe </h3>

                                </div>
                                <div class="col-md-3">
                                    <div class="car-price text-lg-end">
                                        <strong>$ 69,995</strong>
                                        <span>Plus Taxes & Licensing</span>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-8">
                                    <div class="slider-slick">
                                        <div id="video-carousel-example" class="carousel slide carousel-fade" data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-target="#video-carousel-example" data-slide-to="0" class="active"></li>
                                                <li data-target="#video-carousel-example" data-slide-to="1"></li>
                                                <li data-target="#video-carousel-example" data-slide-to="2"></li>
                                            </ol>

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

                                            <a class="carousel-control-prev" href="#video-carousel-example" role="button"
                                                data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" href="#video-carousel-example" role="button"
                                                data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
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
                                                <h6>consectetur adipisicing elit</h6>
                                                <p>Temporibus possimus quasi beatae, consectetur adipisicing elit. Obcaecati unde
                                                    molestias sunt officiis aliquid sapiente, numquam, porro perspiciatis neque
                                                    voluptatem sint hic quam eveniet ad adipisci laudantium corporis ipsam ea!
                                                    <br /><br />
                                                    Consectetur adipisicing elit. Dicta, amet quia ad debitis fugiat voluptatem
                                                    neque
                                                    dolores tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae?
                                                    Culpa, illo a You will begin to realize why, consectetur adipisicing elit.
                                                    Commodi,
                                                    doloribus, earum modi consectetur molestias asperiores sequi ipsam neque error
                                                    itaque veniam culpa eligendi similique ducimus nulla, blanditiis, perspiciatis
                                                    atque
                                                    saepe! veritatis.

                                                    <br /><br />
                                                    Adipisicing consectetur elit. Dicta, amet quia ad debitis fugiat voluptatem
                                                    neque
                                                    dolores tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae?
                                                    Culpa, illo a You will begin to realize why, consectetur adipisicing elit.
                                                    Commodi,
                                                    doloribus, earum modi consectetur molestias asperiores.

                                                    <br /><br />
                                                    Voluptatem adipisicing elit. Dicta, amet quia ad debitis fugiat neque dolores
                                                    tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae? Culpa,
                                                    illo a
                                                    You will begin to realize why, consectetur adipisicing elit. Commodi, You will
                                                    begin
                                                    to realize why, consectetur adipisicing elit. Laudantium nisi eaque maxime
                                                    totam,
                                                    iusto accusantium esse placeat rem at temporibus minus architecto ipsum eveniet.
                                                    Delectus cum sunt, ea cumque quas! doloribus, earum modi consectetur molestias
                                                    asperiores sequi ipsam neque error itaque veniam culpa eligendi similique
                                                    ducimus
                                                    nulla, blanditiis, perspiciatis atque saepe! veritatis.
                                                </p>
                                            </div>
                                            <div class="tab-pane fade" id="features-options" role="tabpanel"
                                                aria-labelledby="features-options-tab">
                                                <h6>consectetur adipisicing elit</h6>
                                                <table class="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row"> Air conditioning</th>
                                                            <td>Mark</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"> Alloy Wheels</th>
                                                            <td>Jacob</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"> Anti-Lock Brakes (ABS)</th>
                                                            <td>Larry</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"> Anti-Theft</th>
                                                            <td>Larry</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Anti-Starter</th>
                                                            <td>Larry</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Alloy Wheels</th>
                                                            <td>Larry</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane fade" id="vehicle-overview" role="tabpanel"
                                                aria-labelledby="vehicle-overview-tab">
                                                <h6>consectetur adipisicing elit</h6>
                                                <p>Temporibus possimus quasi beatae, consectetur adipisicing elit. Obcaecati unde
                                                    molestias sunt officiis aliquid sapiente, numquam, porro perspiciatis neque
                                                    voluptatem sint hic quam eveniet ad adipisci laudantium corporis ipsam ea!
                                                    <br /><br />
                                                    Consectetur adipisicing elit. Dicta, amet quia ad debitis fugiat voluptatem
                                                    neque
                                                    dolores tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae?
                                                    Culpa, illo a You will begin to realize why, consectetur adipisicing elit.
                                                    Commodi,
                                                    doloribus, earum modi consectetur molestias asperiores sequi ipsam neque error
                                                    itaque veniam culpa eligendi similique ducimus nulla, blanditiis, perspiciatis
                                                    atque
                                                    saepe! veritatis.

                                                    <br /><br />
                                                    Adipisicing consectetur elit. Dicta, amet quia ad debitis fugiat voluptatem
                                                    neque
                                                    dolores tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae?
                                                    Culpa, illo a You will begin to realize why, consectetur adipisicing elit.
                                                    Commodi,
                                                    doloribus, earum modi consectetur molestias asperiores.

                                                    <br /><br />
                                                    Voluptatem adipisicing elit. Dicta, amet quia ad debitis fugiat neque dolores
                                                    tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae? Culpa,
                                                    illo a
                                                    You will begin to realize why, consectetur adipisicing elit. Commodi, You will
                                                    begin
                                                    to realize why, consectetur adipisicing elit. Laudantium nisi eaque maxime
                                                    totam,
                                                    iusto accusantium esse placeat rem at temporibus minus architecto ipsum eveniet.
                                                    Delectus cum sunt, ea cumque quas! doloribus, earum modi consectetur molestias
                                                    asperiores sequi ipsam neque error itaque veniam culpa eligendi similique
                                                    ducimus
                                                    nulla, blanditiis, perspiciatis atque saepe! veritatis.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="extra-feature">
                                        <h6> extra feature</h6>
                                        <div class="row">
                                            <div class="col-lg-4 col-sm-4">
                                                <ul class="list-style-1">
                                                    <li><i class="fa fa-check"></i> Security System</li>
                                                    <li><i class="fa fa-check"></i> Air conditioning</li>
                                                    <li><i class="fa fa-check"></i> Alloy Wheels</li>
                                                    <li><i class="fa fa-check"></i> Anti-Lock Brakes (ABS)</li>
                                                    <li><i class="fa fa-check"></i> Anti-Theft</li>
                                                    <li><i class="fa fa-check"></i> Anti-Starter </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-4 col-sm-4">
                                                <ul class="list-style-1">
                                                    <li><i class="fa fa-check"></i> Security System</li>
                                                    <li><i class="fa fa-check"></i> Air conditioning</li>
                                                    <li><i class="fa fa-check"></i> Alloy Wheels</li>
                                                    <li><i class="fa fa-check"></i> Anti-Lock Brakes (ABS)</li>
                                                    <li><i class="fa fa-check"></i> Anti-Theft</li>
                                                    <li><i class="fa fa-check"></i> Anti-Starter </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-4 col-sm-4">
                                                <ul class="list-style-1">
                                                    <li><i class="fa fa-check"></i> Security System</li>
                                                    <li><i class="fa fa-check"></i> Air conditioning</li>
                                                    <li><i class="fa fa-check"></i> Alloy Wheels</li>
                                                    <li><i class="fa fa-check"></i> Anti-Lock Brakes (ABS)</li>
                                                    <li><i class="fa fa-check"></i> Anti-Theft</li>
                                                    <li><i class="fa fa-check"></i> Anti-Starter </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-4">
                                    <div class="car-details-sidebar">
                                        <div class="details-block details-weight">
                                            <h5>DESCRIPTION</h5>
                                            <ul>
                                                <li> <span>Make</span> <strong class="text-end">BMW</strong></li>
                                                <li> <span>Model</span> <strong class="text-end">7-series</strong></li>
                                                <li> <span>Registration date </span> <strong class="text-end">2021</strong></li>
                                                <li> <span>Mileage</span> <strong class="text-end">25,000 mi</strong></li>
                                                <li> <span>Condition</span> <strong class="text-end">New</strong></li>
                                                <li> <span>Exterior Color</span> <strong class="text-end">Silver</strong></li>
                                                <li> <span>Interior Color</span> <strong class="text-end">Brown (Leather)</strong>
                                                </li>
                                                <li> <span>Transmission</span> <strong class="text-end">Automatic</strong></li>
                                                <li> <span>Engine</span> <strong class="text-end">5.1 L</strong></li>
                                                <li> <span>Drivetrain</span> <strong class="text-end">FWD</strong></li>
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