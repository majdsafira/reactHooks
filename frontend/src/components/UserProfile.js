import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './userProfile.css';
import { ProfileContext } from "./ProfileContext";
import { useContext } from "react";
import UpdateData from './UpdateDataU';
import useFetch from '../hooks/useFetch';

const MyPost = () => {
  //API
  document.getElementById("mypost").style.display = "block";
  document.getElementById("input8Show").style.display = "none";
  document.getElementById("info").style.display = "block";
  document.getElementById("uesrInfo").style.display = "none";
  document.getElementById("input6").style.display = "none";
  document.getElementById("input7Save").style.display = "none";
};




const UserProfile = () => {
  let i = 1;
  const user_id = sessionStorage.getItem("user_id");

  //view user info
  const [data, setData] = useState({});

  const fetchProfile = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/users/" + user_id);
    const myProfile = await response.json();
    setData(myProfile);
    console.log(myProfile);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  //view user Posting

  const [postData, getFetch] = useFetch(
    "http://127.0.0.1:8000/api/getPosts/" + user_id
  );
  useEffect(() => {
    getFetch();
  }, []);

   const userPosts = postData.map((post) => {
     return (
       <tr>
         <td>{post.id}</td>
         <td>{post.title}</td>
         <td>{post.description}</td>
       </tr>
     );
   });

  return (
    <>
      <section className="inner-intro bg-1 bg-overlay-black-70">
        <div className="container">
          <div className="row text-center intro-title">
            <div className="col-md-6 text-md-start d-inline-block">
              <h1 className="text-white">profile </h1>
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
                  <span>profile</span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section gray-bg" id="about">
        <div style={{}} className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="section-title" style={{ padding: "0px 0px" }}>
                <h2>Your Profile</h2>
                <div className="separator"></div>
              </div>
            </div>
          </div>

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
                          style={{ width: "450px" }}
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
                          style={{ width: "450px" }}
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
                          style={{ width: "450px" }}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <br></br>
              <br></br>

              <br></br>
              <br></br>

              <div
                id="mypost"
                style={{ border: "1px solid", display: "none" }}
                className="counter"
              >
                <div className="row">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="500" data-speed="500">
                      Activities
                    </h6>

                    <table className="table mt-2">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Title</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>{userPosts}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="d-flex flex-column align-items-center text-center about-avatar"
                style={{}}
              >
                <img
                  style={{
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                  }}
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
                <input
                  onClick={MyPost}
                  id="input8Show"
                  type="button"
                  className="btn btn-dark click"
                  value={"Your Posts"}
                />
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