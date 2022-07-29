import React from "react";
// import { useState} from "react";
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom'
const Register = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     pass: "",
//   });
//   const [error, setError] = useState([]);
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios({
//       method: "post",
//       url: "http://localhost:8000/api/register",
//       data: user,
//     })
//       .then((res) => {
//         console.log(res);
//         if (res.data.errors) {
//           setError(res.data.errors);
//         } else {
//           alert("Successfully Regiseration");
//           navigate("/login");
//         }
//       })
//       .catch((error) => {
//         console.log(error.response.data.message);
//       });
//   };

  return (
    <>
      <section className="inner-intro bg-1 bg-overlay-black-70">
        <div className="container">
          <div className="row text-center intro-title">
            <div className="col-md-6 text-md-start d-inline-block">
              <h1 className="text-white">Register </h1>
            </div>
            <div className="col-md-6 text-md-end float-end">
              <ul className="page-breadcrumb">
                <li>
                  <a href="#">
                    <i className="fa fa-home"></i> Home
                  </a>{" "}
                  <i className="fa fa-angle-double-right"></i>
                </li>
                <li>
                  <a href="#">pages</a>{" "}
                  <i className="fa fa-angle-double-right"></i>
                </li>
                <li>
                  <span>Register</span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="register-form page-section-ptb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="section-title">
                <h2>Register Form</h2>
                <div className="separator"></div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="gray-form">
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Your Name*</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Your Name"
                      name="name"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Image*</label>
                    <input className="form-control" type="file" name="email" />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Mobile phone *</label>
                  <input
                    id="phone"
                    className="form-control"
                    type="text"
                    placeholder="Enter your mobile no"
                    name="phone"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email *</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password* </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Password"
                    name="Password"
                  />
                </div>
                <a href="#" className="button red">
                  {" "}
                  Register an account{" "}
                </a>
                <p className="link">
                  Already have an account? please <a href="#"> login here </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

};

export default Register;