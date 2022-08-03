import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, loadComment } from './Redux/Action';
import { useEffect } from 'react';


const AdminComments = () => {
  let dispatch = useDispatch();

  const { comments } = useSelector(state => state.comments);

  // let nav = useNavigate();


  useEffect(() => {
    dispatch(loadComment());
    console.log(comments)
  }, []);

  const handleDelete = (id) => {

    if (window.confirm("Are you sure you want to delete this comment?")) {
      dispatch(deleteComment(id));
    }
  };

  return (
   <>
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
                    <h4 className="card-title">Comments</h4>
 <table class="table table-striped">
        <thead>
          <tr>
            <th> User Name </th>
            <th> Comment ID </th>
            <th> Comment content </th>
            <th> Action</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {comments && comments.map((commenta) => (

            <tr key={commenta.id}>
              <td> {commenta.user_id}</td>
              <td>{commenta.id}</td>
               <td> {commenta.comment}</td>
             
              
              
              <td><button type="button" class="btn btn-gradient-danger btn-fw" onClick={() => { handleDelete(commenta.id) }}>Delete</button>
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

export default AdminComments
