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

      <table class="table table-striped">
        <thead>
          <tr>
            <th> User Name </th>
            <th> Post ID </th>
            <th> Post content </th>
            <th>Post Image</th>
            <th> Action</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {posts && posts.map((post) => (

            <tr key={post.id}>
              <td> {post.user_id}</td>
              <td>{post.id}</td>
              <td> {post.title}</td>
              <td> {post.image}</td>
              <td><button type="button" class="btn btn-gradient-danger btn-fw" onClick={() => { handleDelete(post.id) }}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>

    </>
  )
}

export default AdminPosts
