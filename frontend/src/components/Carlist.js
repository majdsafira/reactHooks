import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Carlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('http://localhost:8000/api/ads')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }
    render() {
        console.log(this.state)
        const list = this.state.items.map((car, index) => {
            return(
                <div  key={index}>
                                    
                                    <div class="col-lg col-md">

                                        <div class="row">
                                            <div class="col-lg col-sm">
                                                <div class="car-item gray-bg text-center">
                                                    <div class="car-image">
                                                    {/* <img class="img-fluid" src="images/car/02.jpg" alt=""/> */}
                                                    
                                                         <img class="img-fluid" src={"http://localhost:8000/img/" + car.image} alt="" /> 
                                                        <div class="car-overlay-banner">
                                                            <ul>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="car-content">
                                                        <div class="star">

                                                        </div>
                                                        <Link to={`/car_details/${car.id}`}> {car.make} </Link>
                                                        <div class="separator"></div>
    
    
                                                        <div class="price">
                                                            <span class="new-price">${car.price} </span>
                                                        </div>
    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
            )
        })
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
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
                                        {sessionStorage.getItem('user_id') &&<Link style={{ justifyContent: 'center !important' }} className="button red " to={`/add_car`}> Add
                                            Car </Link>} <br />

                                        <div class="separator"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='car-list'>
                        {list}
                        </div>
                    </section>
                </>
            )
        }
    }
}
export default Carlist