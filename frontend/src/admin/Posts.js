import React from 'react';
import './style.css';
import { useState, useRef } from "react";
const Posts = () => {
  
  return (
    <>
    {/* http://127.0.0.1:8000/api/Allposts */}
    {/* http://127.0.0.1:8000/api/post/${postId.id} */}
            
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th> User </th>
                          <th> Name </th>
                          <th> Post </th>
                          <th>Post Image</th>
                          <th> Action</th>
                          <th> </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="py-1">
                            <img src="assets/images/faces-clipart/pic-1.png" alt="image" />
                          </td>
                          <td> Herman Beck </td>
                          <td>
                           
                          </td>
                          <td><img src='' width={20}/></td>
                          <td><button type="submit" class="btn btn-success">Confirm</button></td>
                        <td> <button type="button" class="btn btn-danger">Delete</button> </td> 
                        </tr>
                        <tr>
                          <td class="py-1">
                            <img src="assets/images/faces-clipart/pic-2.png" alt="image" />
                          </td>
                          <td> Messsy Adam </td>
                          <td>
                            <div class="progress">
                              <div class="progress-bar bg-danger" role="progressbar" style={{width: 75, ariavaluenow:75, ariavaluemin:0 ,ariavaluemax:100}}></div>
                            </div>
                          </td>
                          <td> $245.30 </td>
                          <td> July 1, 2015 </td>
                        </tr>
                        <tr>
                          <td class="py-1">
                            <img src="assets/images/faces-clipart/pic-3.png" alt="image" />
                          </td>
                          <td> John Richards </td>
                          <td>
                            <div class="progress">
                              <div class="progress-bar bg-warning" role="progressbar" style={{width: 90, ariavaluenow:90, ariavaluemin:0, ariavaluemax:100}}></div>
                            </div>
                          </td>
                         
                        </tr>
                        <tr>
                          <td class="py-1">
                            <img src="../../assets/images/faces-clipart/pic-4.png" alt="image" />
                          </td>
                          <td> Peter Meggik </td>
                          <td>
                            <div class="progress">
                              <div class="progress-bar bg-primary" role="progressbar" style={{width: 50, ariavaluenow:50,ariavaluemin:0, ariavaluemax:100}}></div>
                            </div>
                          </td>
                          <td> $ 77.99 </td>
                          <td> May 15, 2015 </td>
                        </tr>
                        <tr>
                          <td class="py-1">
                            <img src="assets/images/faces-clipart/pic-1.png" alt="image" />
                          </td>
                          <td> Edward </td>
                          <td>
                            <div class="progress">
                              <div class="progress-bar bg-danger" role="progressbar" style={{width: 3, ariavaluenow:35, ariavaluemin:0, ariavaluemax:100}}></div>
                            </div>
                          </td>
                          <td> $ 160.25 </td>
                          <td> May 03, 2015 </td>
                        </tr>
                        <tr>
                          <td class="py-1">
                            <img src="assets/images/faces-clipart/pic-2.png" alt="image" />
                          </td>
                          <td> John Doe </td>
                          <td>
                            <div class="progress">
                              <div class="progress-bar bg-info" role="progressbar" style={{width: 65, ariavaluenow:65, ariavaluemin:0 ,ariavaluemax:100}}></div>
                            </div>
                          </td>
                          <td> $ 123.21 </td>
                          <td> April 05, 2015 </td>
                        </tr>
                        <tr>
                          <td class="py-1">
                            <img src="assets/images/faces-clipart/pic-3.png" alt="image" />
                          </td>
                          <td> Henry Tom </td>
                          <td>
                            <div class="progress">
                              <div class="progress-bar bg-warning" role="progressbar" style={{width: 20, ariavaluenow:20, ariavaluemin:0, ariavaluemax:100}}></div>
                            </div>
                          </td>
                          <td> $ 150.00 </td>
                          <td> June 16, 2015 </td>
                        </tr>
                      </tbody>
                    </table>
                  
    </>
  )
}

export default Posts
