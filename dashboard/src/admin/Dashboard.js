import React from 'react';
import AdminPosts from './AdminPosts';
import AdminComments from './AdminComments';
import Products from './Products';
import './style.css';
import AdminUsers from './AdminUsers';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, loadPost,getPosts,loadAllPost } from './Redux/Action';
import { useEffect } from 'react';
import { deleteComment, loadComment } from './Redux/Action';
import Users from './AdminUsers';
import { deleteProduct, loadProduct } from './Redux/Action';

const Dashboard = () => {
  let dispatch = useDispatch();

    const { posts } = useSelector(state => state.posts);

    // let nav = useNavigate();

    useEffect(() => {

        dispatch(loadPost());
        console.log(posts);

    }, []);
    let dispatch1 = useDispatch();

    const { comments } = useSelector(state => state.comments);

    // let nav1 = useNavigate();


    useEffect(() => {

        dispatch(loadComment());
        console.log(comments);

    }, []);
    let dispatch2 = useDispatch();

  const { products } = useSelector(state => state.products);
  useEffect(() => {

    dispatch(loadProduct());
    console.log(products);

}, []);
  return (
    <div>

      <div className="container-scroller">

        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a className="navbar-brand brand-logo" href="index.html">CAR DEALER</a>
            <a className="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-stretch">
            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
              <span className="mdi mdi-menu"></span>
            </button>
            <div className="search-field d-none d-md-block">
              <form className="d-flex align-items-center h-100" action="#">
                <div className="input-group">
                  <div className="input-group-prepend bg-transparent">
                    <i className="input-group-text border-0 mdi mdi-magnify"></i>
                  </div>
                  <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
                </div>
              </form>
            </div>
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item nav-profile dropdown">
                <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className="nav-profile-img">
                    <img src="assets/images/faces/face1.jpg" alt="image" />
                    <span className="availability-status online"></span>
                  </div>
                  <div className="nav-profile-text">
                    <p className="mb-1 text-black">David Greymaax</p>
                  </div>
                </a>
                <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-cached me-2 text-success"></i> Activity Log </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    <i className="mdi mdi-logout me-2 text-primary"></i> Signout </a>
                </div>
              </li>
              <li className="nav-item d-none d-lg-block full-screen-link">
                <a className="nav-link">
                  <i className="mdi mdi-fullscreen" id="fullscreen-button"></i>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-email-outline"></i>
                  <span className="count-symbol bg-warning"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                  <h6 className="p-3 mb-0">Messages</h6>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="assets/images/faces/face4.jpg" alt="image" className="profile-pic" />
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                      <p className="text-gray mb-0"> 1 Minutes ago </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="assets/images/faces/face2.jpg" alt="image" className="profile-pic" />
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                      <p className="text-gray mb-0"> 15 Minutes ago </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="assets/images/faces/face3.jpg" alt="image" className="profile-pic" />
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                      <p className="text-gray mb-0"> 18 Minutes ago </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <h6 className="p-3 mb-0 text-center">4 new messages</h6>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count-symbol bg-danger"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                  <h6 className="p-3 mb-0">Notifications</h6>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-success">
                        <i className="mdi mdi-calendar"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                      <p className="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-warning">
                        <i className="mdi mdi-settings"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                      <p className="text-gray ellipsis mb-0"> Update dashboard </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-info">
                        <i className="mdi mdi-link-variant"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                      <p className="text-gray ellipsis mb-0"> New admin wow! </p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <h6 className="p-3 mb-0 text-center">See all notifications</h6>
                </div>
              </li>
              <li className="nav-item nav-logout d-none d-lg-block">
                <a className="nav-link" href="#">
                  <i className="mdi mdi-power"></i>
                </a>
              </li>
              <li className="nav-item nav-settings d-none d-lg-block">
                <a className="nav-link" href="#">
                  <i className="mdi mdi-format-line-spacing"></i>
                </a>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span className="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>
        {/* <!-- partial --> */}
        <div className="container-fluid page-body-wrapper">
          {/* <!-- partial:partials/_sidebar.html --> */}
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item nav-profile">
                <a href="#" className="nav-link">
                  <div className="nav-profile-image">
                    <img src="assets/images/faces/face1.jpg" alt="profile" />
                    <span className="login-status online"></span>
                    {/* <!--change to offline or busy as needed--> */}
                  </div>
                  <div className="nav-profile-text d-flex flex-column">
                    <span className="font-weight-bold mb-2">David Grey. H</span>
                    <span className="text-secondary text-small">Project Manager</span>
                  </div>
                  <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                </a>
              </li>
              
              <li class="nav-item">
                                <a class="nav-link" href="../Dashboard">
                                    <span class="menu-title">Dashboard</span>
                                    <i class="mdi mdi-home menu-icon"></i>
                                </a>
                            </li>
                              <li class="nav-item">
                                <a class="nav-link" href="../AdminUsers">
                                    <span  class="menu-title">Users</span>
                                    <i class="mdi mdi-contacts menu-icon"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../AdminPosts">
                                    <span class="menu-title">Posts</span>
                                    <i class="mdi mdi-format-list-bulleted menu-icon"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/AdminComments">
                                    <span class="menu-title">Comments</span>
                                    <i class="mdi mdi-comment menu-icon"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/AdminComments">
                                    <span class="menu-title">Comments</span>
                                    <i class="mdi mdi-comment menu-icon"></i>
                                </a>
                            </li>
              
               </ul>
          </nav>
          {/* <!-- partial --> */}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="page-header">
                <h3 className="page-title">
                  <span className="page-title-icon bg-gradient-primary text-white me-2">
                    <i className="mdi mdi-home"></i>
                  </span> Dashboard
                </h3>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                      <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="row">
                <div className="col-md-4 stretch-card grid-margin">
                  <div className="card bg-gradient-danger card-img-holder text-white">
                    <div className="card-body">
                      <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                      <h4 className="font-weight-normal mb-3">Total posts <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                      </h4>
                      <h6 className="card-text">{posts.length}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 stretch-card grid-margin">
                  <div className="card bg-gradient-info card-img-holder text-white">
                    <div className="card-body">
                      <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                      <h4 className="font-weight-normal mb-3">Total Comments <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                      </h4>
                      <h6 className="card-text">{comments.length}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 stretch-card grid-margin">
                  <div className="card bg-gradient-success card-img-holder text-white">
                    <div className="card-body">
                      <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                      <h4 className="font-weight-normal mb-3">Total Ads <i className="mdi mdi-diamond mdi-24px float-right"></i>
                      </h4>
                      <h6 className="card-text">{products.length}</h6>
                    </div>
                  </div>
                </div>
              </div>
              
              
            
             

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard