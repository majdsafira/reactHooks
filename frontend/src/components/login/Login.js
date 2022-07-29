import React, { useContext} from "react";

const Login = () => {

  return (
    <>
      <section className="inner-intro bg-1 bg-overlay-black-70">
        <div className="container">
          <div className="row text-center intro-title">
            <div className="col-md-6 text-md-start d-inline-block">
              <h1 className="text-white">Login </h1>
            </div>
            <div className="col-md-6 text-md-end float-end">
              <ul className="page-breadcrumb">
                <li>
                  <a href="#">
                    <i class="fa fa-home"></i> Home
                  </a>{" "}
                  <i className="fa fa-angle-double-right"></i>
                </li>
                <li>
                  <a href="#">pages</a> <i class="fa fa-angle-double-right"></i>
                </li>
                <li>
                  <span>Login</span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="login-form page-section-ptb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <span>Log in with your id or social media </span>
                <h2>Login To Your Account</h2>
                <div className="separator"></div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="gray-form clearfix">
                <div className="mb-3">
                  <label className="form-label" for="name">
                    Email*{" "}
                  </label>
                  <input
                    id="name"
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    name="web"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" for="Password">
                    Password*{" "}
                  </label>
                  <input
                    id="Password"
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name="Password"
                  />
                </div>
                <div className="mb-3">
                  <div className="remember-checkbox mb-4">
                    <input type="checkbox" name="one" id="one" />
                    <label for="one"> Remember me</label>
                    <a href="#" className="float-end">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="d-grid">
                  <a href="#" className="button red btn-block">
                    {" "}
                    Log in{" "}
                  </a>
                </div>
              </div>
              <div className="login-social text-center">
                <h5>Login with Social media</h5>
                <ul>
                  <li>
                    <a className="fb button" href="#">
                      <i className="fa fa-facebook"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a className="twitter button" href="#">
                      <i className="fa fa-twitter"></i> Twitter
                    </a>
                  </li>
                  <li>
                    <a className="pinterest button" href="#">
                      <i className="fa fa-google-plus"></i> google+
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login