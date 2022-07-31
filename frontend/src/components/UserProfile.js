import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './userProfile.css';
import { ProfileContext } from "./ProfileContext";
import { useContext } from "react";
import UpdateData from './UpdateDataU';
import useFetch from '../hooks/useFetch';

const UserProfile = () => {

    let i = 1;
    const user_id = sessionStorage.getItem('user_id');

    //view user info
    const [data, setData] = useState({});

    const fetchProfile = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/users/' + user_id)
        const myProfile = await response.json();
        setData(myProfile);
        console.log(myProfile)
    }

    useEffect(() => {
        fetchProfile();
    }
        , []);
   
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
                    <span>profile</span>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section gray-bg" id="about">
          <div
            style={{ border: "1px solid", padding: "50px" }}
            className="container"
          >
            <div className="row align-items-center flex-row-reverse ">
              <div className="col-lg-6 ">
                <div id="uesrInfo" className="about-text go-to ">
                  <form action="" method="post">
                    <div className="row about-list">
                      <div className="col-md-7">
                        <div className="media">
                          <label className="form-label">Name</label>
                          <input
                            className="form-control"
                            id="name"
                            type="text"
                            value={data.name}
                            disabled
                          />
                        </div>{" "}
                        <br></br>
                      </div>
                      <div className="col-md-7">
                        <div className="media">
                          <label className="form-label">E-mail</label>
                          <input
                            className="form-control"
                            id="email"
                            type="text"
                            value={data.email}
                            disabled
                          />
                        </div>{" "}
                        <br></br>
                        <div className="media">
                          <label className="form-label">Phone</label>
                          <input
                            className="form-control"
                            id="phone"
                            type="text"
                            value={data.phone}
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <br></br>
                <br></br>
              </div>

              <div className="col-lg-6">
                <div className="d-flex flex-column align-items-center text-center about-avatar">
                  <img
                    style={{ width: "200px" }}
                    alt={"photo"}
                    src={"http://127.0.0.1:8000/img/" + data.image}
                  />{" "}
                  <br></br>
                  <Link type="button" to="/edit">
                    <button className="button red" type="button">
                      Edit profile
                    </button>
                  </Link>{" "}
                  <br></br>
                </div>
              </div>
            </div>
            <br></br>
          </div>
          <br></br>
          {/* )} */}
        </section>
      </>
    );
}

export default UserProfile;