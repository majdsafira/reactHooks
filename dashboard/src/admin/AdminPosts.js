import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, loadPost,getPosts } from './Redux/Action';
import { useEffect } from 'react';


const AdminPosts = () => {
  let dispatch = useDispatch();

  const { posts } = useSelector(state => state.posts);

  // let nav = useNavigate();


  useEffect(() => {
    dispatch(loadPost());
    console.log(posts)
  }, [dispatch]);

  const handleDelete = (id) => {

    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePost(id));
    }
  };

  return (
    <>
      {/* http://127.0.0.1:8000/api/Allposts */}
      {/* http://127.0.0.1:8000/api/post/${postId.id} */}
      <div className="container-fluid page-body-wrapper">
         
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
                                <a class="nav-link" href="./AdminUsers">
                                    <span  class="menu-title">Users</span>
                                    <i class="mdi mdi-contacts menu-icon"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./AdminPosts">
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
                                <a class="nav-link" href="../Products">
                                    <span class="menu-title">Products</span>
                                    <i class="mdi mdi-diamond menu-icon"></i>
                                </a>
                            </li>
              
               </ul>
               </nav>
               
      <div className="col-lg-10 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Posts</h4>
      <table class="table table-striped">
        <thead>
          <tr>
            <th> User Name </th>
            <th> Post ID </th>
            <th> Post content </th>
            <th> Action</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {posts && posts.map((post) => (

            <tr key={post.id}>
              <td> {post.name}</td>
              <td>{post.id}</td>
              <td> {post.title}</td>
              <td><button type="button" class="btn btn-gradient-danger btn-fw" onClick={() => { handleDelete(post.id) }}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
      </div>
                    </div>
                    </div>
                    </div>
    </>
  )
}

export default AdminPosts
