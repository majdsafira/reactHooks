import React from 'react';
import './dstyle.css';
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
          {comments && comments.map((comment) => (

            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td> {comment.user_id}</td>
              <td> {comment.comment}</td>
              
              <td><button type="button" class="btn btn-gradient-danger btn-fw" onClick={() => { handleDelete(comment.id) }}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
   </>
  )
}

export default AdminComments
