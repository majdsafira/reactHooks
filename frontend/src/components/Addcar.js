import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Addcar() {
    const url = "http://localhost:8000/api/ads";
    const [data, setData] = useState({
        Make: "",
        Model: "",
        price: "",
        Registrationdate: "",
        Mileage: "",
        Condition: "",
        exteriorcolor: "",
        interiorcolor: "",
        engine: "",
        transmission: "",
        image: "",
        description: "",
        user_id: "1",
    });

    const handleImage = (e) => {
        setData({ ...data ,image: e.target.files[0] });
      }
    function submit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("make", data.Make);
        formData.append("model", data.Model);
        formData.append("price", data.price);
        formData.append("registration_date", data.Registrationdate);
        formData.append("milage", data.Mileage);
        formData.append("condition", data.Condition);
        formData.append("exterior_color", data.exteriorcolor);
        formData.append("interior_color", data.interiorcolor);
        formData.append("engine", data.engine);
        formData.append("transmission", data.transmission);
        formData.append("image", data.image);
        formData.append("description", data.description);
        formData.append("user_id", data.user_id);
        axios.post(url, formData
            // make: data.Make,
            // user_id: "1",
            // model: data.Model,
            // price: data.price,
            // registration_date: data.Registrationdate,
            // milage: data.Mileage,
            // condition: data.Condition,
            // exterior_color: data.exteriorcolor,
            // interior_color: data.interiorcolor,
            // engine: data.engine,
            // transmission: data.transmission,
            // image: data.image,
            // description: data.description,
        )
            .then(res => {
                console.log(res.data)
            })

            window.location.href = 'http://127.0.0.1:3000/car_list'

    }
    const handleChange = (event) => {
        const { id, value, name } = event.target
        setData((oldData) => {
            return {
                ...oldData,
                [id]: value,

            }
        })
    }
    console.log(data)

    return (
        <>
            <section class="inner-intro bg-6 bg-overlay-black-70">
                <div class="container">
                    <div class="row text-center intro-title">
                        <div class="col-md-6 text-md-start d-inline-block">
                            <h1 class="text-white">Add Car!!</h1>
                        </div>
                        <div class="col-md-6 text-md-end float-end">
                            <ul class="page-breadcrumb">
                                <li><a href="#"><i class="fa fa-home"></i> Home</a> <i class="fa fa-angle-double-right"></i>
                                </li>
                                <li><span>Add Car</span> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="car-details page-section-ptb">

                <div class="row">
                    <div class="col-md-12">
                        <div class="section-title">
                            <span>We’d Love to Help You To Sell Your Car</span>
                            <h2>LET'S DO IT!</h2>
                            <div class="separator"></div>
                        </div>
                    </div>
                </div>
                <section class="welcome-block">

                    <div className="container-fluid">
                        <div className="row justify-content-center" style={{ justifyContent: 'center !important' }}>

                            <div className="col-lg-10 col-sm-12">
                                <div className="gray-form">
                                    <div id="formmessage" className="form-notice" style={{ display: "none" }}>Success/Error Message
                                        Goes Here</div>
                                    <form className="form-horizontal" onSubmit={(e) => submit(e)} id="contactform">
                                        <div className="contact-form row" style={{ justifyContent: 'center !important' }}>
                                            <div className="col-lg-4 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" placeholder="Make"
                                                        value={data.Make} id='Make' onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" placeholder="Model"
                                                        value={data.Model} id='Model' onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" placeholder="price"
                                                        value={data.price} id='price' onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" placeholder="Registration date"
                                                        value={data.Registrationdate} id='Registrationdate'
                                                        onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" placeholder="Mileage"
                                                        value={data.Mileage} id='Mileage' onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" placeholder="Condition"
                                                        value={data.Condition} id='Condition' onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" placeholder="exterior color"
                                                        value={data.exteriorcolor} id='exteriorcolor' name="exteriorcolor"
                                                        onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" placeholder="interior color"
                                                        value={data.interiorcolor} id='interiorcolor' onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" placeholder="engine"
                                                        value={data.engine} id='engine' onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="text" className="form-control" placeholder="transmission"
                                                        value={data.transmission} id='transmission' onChange={handleChange} />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-sm-12">
                                                <div className="mb-3">
                                                    <input type="file" 
                                                        placeholder="image" id='image' name="image" onChange={handleImage} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <textarea className="form-control input-message" placeholder="description"
                                                        rows="7" value={data.description} id="description"
                                                        onChange={handleChange}></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button id="submit" onClick={submit} name="submit" type="submit" value="Send"
                                                    className="button red">Post The Ad <i
                                                        className="fa fa-spinner fa-spin fa-fw btn-loader"
                                                        style={{ display: "none" }}></i></button>
                                            </div>
                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Addcar