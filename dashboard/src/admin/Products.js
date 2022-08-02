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
   <table class="table table-striped">
        <thead>
          <tr>
            <th> User Name </th>
            <th> Product ID </th>
            <th> Product Image </th>
            <th> Product Description </th>
            <th> Action</th>
            
          </tr>
        </thead>
        <tbody>
          {products && products.map((product) => (

            <tr key={product.id}>
              <td>{product.id}</td>
              <td> {product.user_id}</td>
              <td> {product.image}</td>
              <td> {product.description.substring(0, 30)}
              <a href={'/product/'+ product.id} >See More</a></td>
              <td><button type="button" class="btn btn-gradient-danger btn-fw" onClick={() => { handleDelete(product.id) }}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
                      
   </>
  )
}

export default Products
