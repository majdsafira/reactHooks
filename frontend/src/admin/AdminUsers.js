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
    const api = await fetch("http://127.0.0.1:8000/api/alluser");
    const allData = await api.json();
    setData(allData);
  }
  const deleteUser=(id)=>{
    fetch(`http://127.0.0.1:8000/api/deleteUser/${id}`)
    
     getData()
     alert("Delete User successfully")
  }
  return (
    <>
    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th> Name </th>
                          <th> Email </th>
                          <th> Image </th>
                          <th> Phone </th>
                          <th> Deadline </th>
                        </tr>
                      </thead>
                      <tbody>
                      {data.map((user) => {
                    return (
                      <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>

                        <td>
                          
                          <img
                            src={
                              "http://127.0.0.1:8000/category_image/" +
                              user.image
                            }
                            alt=""
                            style={{ width: "100px" }}
                          />
                        </td>
                        
                        <td>{user.phone}</td>
                      
                        {/* <td>{user.user_status}</td> */}
                        {/* <Link  to={`/singlecategory/${product.id}`} className="btn btn-primary mt-auto align-self-start" >Edite</Link>*/}
                        <Link className="btn btn-primary mt-auto align-self-start" onClick={() =>deleteUser(user.id)} to=''> Delete</Link> 
                        {/* <td> <Link to={'http://127.0.0.1:8000/api/deletecategory/'+category.id} className="btn btn-primary mt-auto align-self-start">Delete</Link></td>          */}
                                     </tr>
                    );
                  })}
                      </tbody>
                    </table>
    </>
  )
}

export default Users
