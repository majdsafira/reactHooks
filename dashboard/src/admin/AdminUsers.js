import React from 'react';
import './style.css';

import { useState,useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
const Users = () => {
  const [data, setData]= useState([]);
  useEffect(() => {
    const fetchData = async () => {
        getData()
    };
    fetchData();
  }, []);
  async function getData(){
    const api = await fetch("http://127.0.0.1:8000/api/users");
    const allData = await api.json();
    setData(allData);
  }
  const deleteUser=(id)=>{
    fetch(`http://127.0.0.1:8000/api/delete/${id}`)
    
     getData()
     alert("Delete User successfully")
  }
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
                    <h4 className="card-title">USERS</h4>
    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th> Name </th>
                          <th> Email </th>
                          <th> Image </th>
                          <th> Phone </th>
                          
                        </tr>
                      </thead>
                      <tbody>
                      {data.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>

                        <td>
                          
                          <img
                            src={
                              "http://127.0.0.1:8000/img/" +
                              user.image
                            }
                            alt=""
                            style={{ width: "50px" }}
                          />
                        </td>
                        
                        <td>{user.phone}</td>
                      
                        {/* <td>{user.user_status}</td> */}
                        {/* <Link  to={`/singlecategory/${product.id}`} className="btn btn-primary mt-auto align-self-start" >Edite</Link>*/}
                        <td><button type="button" class="btn btn-gradient-danger btn-fw" onClick={() => { deleteUser(user.id) }}>Delete</button></td>
                        {/* <td> <Link to={'http://127.0.0.1:8000/api/deletecategory/'+category.id} className="btn btn-primary mt-auto align-self-start">Delete</Link></td>          */}
                                     </tr>
                    );
                  })}
                      </tbody>
                    </table>
                    </div>
                    </div>
                    </div>
                    </div>
                    
    </>
  )
}

export default Users
