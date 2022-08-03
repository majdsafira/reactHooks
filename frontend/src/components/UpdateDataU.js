import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./userProfile.css";
import { ProfileContext } from "./ProfileContext";
import { useContext } from "react";
import UpdateData from "./UpdateDataU";
import { Link } from "react-router-dom";
import axios from "axios";

//update function

const UpdateDataU = () => {

  const user_id = sessionStorage.getItem("user_id");

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    image: "",
  });

  const SaveInfo = async (e) => {
    e.preventDefault();

    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },

    //   body: JSON.stringify({
    //     name: e.target.name.value,
    //     email: e.target.email.value,
    //     phone: e.target.phone.value,
    //     password: e.target.password.value,
    //     image: e.target.image.value,

    //   }),
    // };
    // console.log(requestOptions);
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("phone", user.phone);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("image", user.image);

    // console.log(formData.get("name"));
    // console.log(formData.get("phone"));
    // console.log(formData.get("email"));
    // console.log(formData.get("password"));
    // console.log(formData.get("image"));
    const response = await axios.post(
      `http://127.0.0.1:8000/api/update/` + user_id,
      formData
    );
    // console.log(response);
    if (response.status === 200) {
      return alert("Data Updated Successfully");
    } else {
      return alert("There is something wrong");
    }
  };

  const fetchProfile = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/api/users/" + user_id
    );
    const myProfile = await response.json();
    setUser(myProfile);
    console.log(myProfile);
  };

  useEffect(() => {
    fetchProfile();

  }, []);

  useEffect(() => {
    SaveInfo();
  }, []);


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
                  <span>Updated profile</span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section gray-bg" id="about">
        <div
          // style={{ border: "1px solid", padding: "50px" }}
          className="container"
        >
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="section-title">
                <h2>Updated profile</h2>
                <div className="separator"></div>
              </div>
            </div>
          </div>
          <div className="row align-items-center flex-row-reverse ">
            <div className="col-lg-8">
              <div id="uesrInfo" className="about-text go-to ">
                <form action="" onSubmit={SaveInfo}>
                  <div className="row about-list">
                    <div className="col-md-7">
                      <div className="media">
                        <label>Name</label>
                        <input
                          onChange={(e) =>
                            setUser((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          value={user.name}
                          name="name"
                          type="text"
                          placeholder="your name"
                          // required
                          style={{ width: "330px" }}
                        />
                      </div>
                      <br></br>

                      <div className="media">
                        <label>Phone</label>

                        <input
                          onChange={(e) =>
                            setUser((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          value={user.phone}
                          name="phone"
                          placeholder="your phone"
                          type="text"
                          
                          style={{ width: "330px" }}
                        />
                      </div>
                      <br></br>

                      <div className="media">
                        <label>Image</label>

                        <input
                          onChange={(e) =>
                            setUser((prev) => ({
                              ...prev,
                              image: e.target.files[0],
                            }))
                          }
                          name="image"
                          type="file"
                          // required
                        />
                      </div>
                      <br></br>
                    </div>

                    <div className="col-md-7">
                      <div className="media">
                        <label>E-mail</label>

                        <input
                          onChange={(e) =>
                            setUser((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          value={user.email}
                          placeholder="Ex:Sujoud@mail.com"
                          name="email"
                          type="text"
                          
                          style={{ width: "330px" }}
                        />
                      </div>{" "}
                      <br></br>
                      <div className="media">
                        <label>Password</label>
                        <input
                          onChange={(e) =>
                            setUser((prev) => ({
                              ...prev,
                              password: e.target.value,
                            }))
                          }
                          value={user.password}
                          name="password"
                          type="password"
                          // required
                          style={{ width: "330px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <br></br>

                  <input
                    id="input7Save"
                    type="submit"
                    className="button red"
                    value={"Save"}
                    
                  />
                  <Link type="button" to="/back">
                    <button
                      className="button red"
                      type="button"
                      style={{ marginLeft: "50px" }}
                    >
                      Back
                    </button>
                  </Link>
                </form>
              </div>
            </div>

            {/* <div className="col-lg-6">
              <div className="d-flex flex-column align-items-center text-center about-avatar"> */}
            {/* <img
                  style={{ width: "200px" }}
                  src={"http://127.0.0.1:8000/img/" + user.image}
                /> */}
            <br></br>

            {/* </div>
            </div> */}
          </div>
          <br></br>
        </div>
        <br></br>
      </section>
    </>
  );
};
export default UpdateDataU;
