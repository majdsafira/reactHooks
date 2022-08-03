import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, loadProduct } from './Redux/Action';
import { useEffect } from 'react';

const Products = () => {
  let dispatch = useDispatch();

  const { products } = useSelector(state => state.products);

  // let nav = useNavigate();


  useEffect(() => {
    dispatch(loadProduct());
    console.log(products)
  }, []);

  const handleDelete = (id) => {

    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <>
      {/* http://localhost:8000/api/ads */}
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
                               <a class="nav-link" href="./Dashboard">
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
                    <h4 className="card-title">Products</h4>
      <table class="table table-striped">
        <thead>
          <tr>
            <th> User ID </th>
            <th> Product ID </th>
            <th> Product Image </th>
            <th> Product Description </th>
            <th> Action</th>

          </tr>
        </thead>
        <tbody>
          {products && products.map((product) => (

            <tr key={product.id}>
              <td> {product.id}</td>
              <td> {product.user_id}</td>
              <td><img src={"http://127.0.0.1:8000/img/" +product.image}alt=""style={{ width: "50px" }}/></td>
              <td> {product.make}
                </td>
              <td><button type="button" class="btn btn-gradient-danger btn-fw" onClick={() => { handleDelete(product.id) }}>Delete</button>
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

export default Products
