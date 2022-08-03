import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

function SinglePost() {
    const user_id = sessionStorage.getItem('user_id')
    const postId = useParams()
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(0)
    const [post, setPost] = useState([{title:'', description:'',name:'',created_at : '00-00-00 00:00:00'}])
    const [comments, setComments] = useState([{ comment:'',created_at : '00-00-00 00:00:00'}])
    const [formData, setFormData] = useState({
      user_id : user_id,
      comment: '',
      post_id: postId.id,
    })
    const [commentConformation, setCommentConformation] = useState(false)
    const handleClick = (event) => {
      setPage(event.target.innerHTML)
    }

    // fetching a single post 
    useEffect(() => {
        async function getPost(){
            const res = await fetch(`http://127.0.0.1:8000/api/post/${postId.id}`)
            const data = await res.json()
            setPost(data)
            // console.log(data)
        }
        getPost()
    },[postId.id,commentConformation])

    // fetching comments paginated 5 comments per page
    useEffect(() => {
        async function getComments(page){
            const res = await fetch(`http://localhost:8000/api/allComments/${postId.id}?page=${page}`)
            const comments = await res.json()
            setComments(comments.data)
            // console.log(data)
        }
        getComments(page)
    },[postId.id, page,commentConformation])
    // console.log(comments)


    // fetching the count of all the comments for a single post 
    useEffect(() => {
      async function getAllComments(){
          const res = await fetch('http://localhost:8000/api/getAllComments/' + postId.id )
          const count = await res.json()
          setCount(count)
      }
      getAllComments()
  },[postId.id,commentConformation])
  // console.log(count) 

    const handleChange = (event) => {
      const {name, value} = event.target
      setFormData((oldData) => {
        return {
          ...oldData,
          [name]: value,
        }
      })
    }
    // setting a dynamic pagination
    const pagination = []

    for (let i = 1; i <= Math.ceil(count/5); i++) {
      pagination.push(<li key={i}><a href="javascript:void(0)" key={i} onClick={handleClick}>{i}</a></li>)
    }

    //mapping over comments 
    const allComments = comments.map((comment, index) => {
      return (
        <div  className="tab-pane show" id="vehicle-overview" role="tabpanel" aria-labelledby="vehicle-overview-tab" key={index}>
          <div className="recent-post-image rounded-circle">
              <img src={`http://localhost:8000/img/${comment.image}`} alt=""/>
          </div>
          <div className="comment-content">
            <h6>{comment.name}</h6>
            <p>{comment.comment}</p>
            <time className='light small'>{comment.created_at !== null ? comment.created_at.slice(0,10) : ''}  {comment.created_at !== 'null' ? comment.created_at.slice(11,19): ''}</time>
          </div>
          <hr className="gray"/>
        </div>
      )
    })


    const handleSubmit = (event) => {
      event.preventDefault()
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({...formData})
      };
      async function addPost(){
          const res  = await fetch('http://127.0.0.1:8000/api/comment', requestOptions)
          const data = await res.json()
        }
        addPost()
        setCommentConformation(oldData => !oldData)
        console.log(commentConformation)
        setFormData((oldData) => {
          return {
            ...oldData,
            comment: '',
          }
        })
      }
  return (
    <React.Fragment>
        <section className="inner-intro bg-1 bg-overlay-black-70">
  <div className="container">
     <div className="row text-center intro-title">
           <div className="col-md-6 text-md-start d-inline-block">
             <h1 className="text-white">Single post </h1>
           </div>
           <div className="col-md-6 text-md-end float-end">
             <ul className="page-breadcrumb">
                <li><Link to="/"><i className="fa fa-home"></i> Home</Link> <i className="fa fa-angle-double-right"></i></li>
                <li><Link to="/posts">posts</Link> <i className="fa fa-angle-double-right"></i></li>
                <li><span>Single post</span> </li>
             </ul>
           </div>
     </div>
  </div>
</section>


<section className="blog blog-single page-section-ptb">
  <div className="container">
    <div className="row">
     <div className="col-md-8">
        <div className="blog-entry">
          <div className="blog-entry-image  clearfix">
             <div className="portfolio-item">
               <img className="img-fluid" src="images/blog/02.jpg" alt=""/>
              </div>
            </div>
          <div className="entry-title">
             <a href="/">{post[0].title}</a>
          </div>
          <div className="entry-meta">
            <ul>
              <li><a href="/"><i className="fa fa-user"></i> By {post[0].name} </a> /</li>
              <li><a href="/"><i className="fa fa-comments-o"></i> {count} Comments</a> </li>
             
            </ul>
          </div>
          <div id="tabs">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item icon-diamond" role="presentation">
              <button className="nav-link active" id="general-information-tab" data-bs-toggle="tab" data-bs-target="#general-information" type="button" role="tab" aria-controls="general-information" aria-selected="true">post Information</button>
            </li>
            <li className="nav-item icon-list" role="presentation">
              <button className="nav-link" id="features-options-tab" data-bs-toggle="tab" data-bs-target="#features-options" type="button" role="tab" aria-controls="features-options" aria-selected="false">Comments ({count})</button>
            </li>
            <li className="nav-item icon-equalizer" role="presentation">
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="general-information" role="tabpanel" aria-labelledby="general-information-tab">
              <h6>{post[0].title}</h6>
              <p>{post[0].description}</p>
              <time>posted in {post[0].created_at.slice(0,10)} {post[0].created_at.slice(11,19)}</time>
            </div>
            <div className="tab-pane fade" id="features-options" role="tabpanel" aria-labelledby="features-options-tab">

              {allComments}

              <div className="pagination-nav  d-flex justify-content-center">
                <ul className="pagination">
                  {pagination}
                </ul>
              </div>
            </div>
          </div>
        </div>
          </div>
          {sessionStorage.getItem('user_id') && (
        <div className="blog-form">
          <div className="gray-form row">
            <div className="col-md-12">
             <div className="mb-3">
               <textarea className="form-control" rows="7" name='comment' placeholder="Comment" value={formData.comment} onChange={handleChange}/>
              </div>
            </div>
             <div className="col-md-12 d-grid ">
              <button className="button red btn-block" href="/" onClick={handleSubmit}>{sessionStorage.getItem('user_id') ? 'SUBMIT' : 'LOGIN TO COMMENT'}</button>
            </div>
          <div>
         </div>
        </div>
       </div> )
}
     </div>
      
     </div>
   </div>
</section>
    </React.Fragment>
  )
}

export default SinglePost