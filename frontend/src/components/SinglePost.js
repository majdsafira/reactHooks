import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

function SinglePost() {
    const user_id = sessionStorage.getItem('user_id')
    let postId = useParams()
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(0)
    const [post, setPost] = useState([{title:'', description:'',}])
    const [comments, setComments] = useState([{ comment:'',}])
    const [formData, setFormData] = useState({
      user_id : user_id,
      comment: '',
      post_id: postId,
    })
    const [postConformation, setPostConformation] = useState('')

    console.log(user_id)
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
    },[postId.id])

    // fetching comments paginated 5 comments per page
    useEffect(() => {
        async function getComments(page){
            const res = await fetch(`http://localhost:8000/api/allComments/${postId.id}?page=${page}`)
            const comments = await res.json()
            setComments(comments.data)
            // console.log(data)
        }
        getComments(page)
    },[postId.id, page])
    // console.log(comments)


    // fetching the count of all the comments for a single post 
    useEffect(() => {
      async function getAllComments(){
          const res = await fetch('http://localhost:8000/api/getAllComments/' + postId.id )
          const count = await res.json()
          setCount(count)
      }
      getAllComments()
  },[postId.id])
  // console.log(count) 


    // setting a dynamic pagination
    const pagination = []

    for (let i = 1; i <= Math.ceil(count/5); i++) {
      pagination.push(<li key={i}><a href="javascript:void(0)" key={i} onClick={handleClick}>{i}</a></li>)
    }

    //mapping over comments 
    const allComments = comments.map((comment, index) => {
      return (
        <div className="tab-pane show" id="vehicle-overview" role="tabpanel" aria-labelledby="vehicle-overview-tab" key={index}>
          <div className="recent-post-image rounded-circle">
              <img src={`http://localhost:8000/img/${comment.image}`} alt=""/>
          </div>
          <h6>{comment.name}</h6>
          <p>{comment.comment}</p>
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
          data && setPostConformation(true)
          console.log(data)
      }
      
      addPost()
          
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
              <li><a href="/"><i className="fa fa-user"></i> By Cardealer </a> /</li>
              <li><a href="/"><i className="fa fa-comments-o"></i> {count} Comments</a> /</li>
              <li><a href="/"><i className="fa fa-folder-open"></i> News 2021</a> /</li>
              <li><a href="/"><i className="fa fa-heart-o"></i>10</a></li>
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
              <button className="nav-link " id="vehicle-overview-tab" data-bs-toggle="tab" data-bs-target="#vehicle-overview" type="button" role="tab" aria-controls="vehicle-overview" aria-selected="false">Vehicle Overview</button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="general-information" role="tabpanel" aria-labelledby="general-information-tab">
              <h6>{post[0].title}</h6>
              <p>{post[0].description}</p>
            </div>
            <div className="tab-pane fade" id="features-options" role="tabpanel" aria-labelledby="features-options-tab">

              {allComments}

              <div className="pagination-nav  d-flex justify-content-center">
                <ul className="pagination">
                  {pagination}
                </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="vehicle-overview" role="tabpanel" aria-labelledby="vehicle-overview-tab">
              <h6>consectetur adipisicing elit</h6>
              <p>Temporibus possimus quasi beatae, consectetur adipisicing elit. Obcaecati unde molestias sunt officiis aliquid sapiente, numquam, porro perspiciatis neque voluptatem sint hic quam eveniet ad adipisci laudantium corporis ipsam ea!
              <br /><br />
              Consectetur adipisicing elit. Dicta, amet quia ad debitis fugiat voluptatem neque dolores tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae? Culpa, illo a You will begin to realize why, consectetur adipisicing elit. Commodi, doloribus, earum modi consectetur molestias asperiores sequi ipsam neque error itaque veniam culpa eligendi similique ducimus nulla, blanditiis, perspiciatis atque saepe! veritatis.

              <br /><br />
              Adipisicing consectetur elit. Dicta, amet quia ad debitis fugiat voluptatem neque dolores tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae? Culpa, illo a You will begin to realize why, consectetur adipisicing elit. Commodi, doloribus, earum modi consectetur molestias asperiores.

              <br /><br />
              Voluptatem adipisicing elit. Dicta, amet quia ad debitis fugiat neque dolores tempora iste saepe cupiditate, molestiae iure voluptatibus est beatae? Culpa, illo a You will begin to realize why, consectetur adipisicing elit. Commodi, You will begin to realize why, consectetur adipisicing elit. Laudantium nisi eaque maxime totam, iusto accusantium esse placeat rem at temporibus minus architecto ipsum eveniet. Delectus cum sunt, ea cumque quas! doloribus, earum modi consectetur molestias asperiores sequi ipsam neque error itaque veniam culpa eligendi similique ducimus nulla, blanditiis, perspiciatis atque saepe! veritatis.
              </p>
            </div>
          </div>
        </div>
          </div>
        <div className="blog-form">
          <div className="gray-form row">
            <div className="col-md-12">
             <div className="mb-3">
               <textarea className="form-control" rows="7" name='comment' placeholder="Comment"></textarea>
              </div>
            </div>
             <div className="col-md-12 d-grid ">
              <button className="button red btn-block" href="/" onClick={handleSubmit}>SUBMIT</button>
            </div>
          <div>
         </div>
        </div>
       </div>
     </div>
      <div className="col-md-4">
        <div className="blog-sidebar">
          <div className="sidebar-widget">
            <h6>Search here</h6>
            <div className="widget-search">
                <i className="fa fa-search"></i>
                <input type="search" className="form-control placeholder" placeholder="Search...."/>
              </div>
          </div>
          <div className="sidebar-widget">
            <h6>categories</h6>
            <div className="widget-link">
               <ul>
                 <li><a href="/"> <i className="fa fa-angle-right"></i> Test Drives </a></li>
                 <li><a href="/"> <i className="fa fa-angle-right"></i> Video Reviews </a></li>
                 <li><a href="/"> <i className="fa fa-angle-right"></i> Analysis & Features</a></li>
                 <li><a href="/"> <i className="fa fa-angle-right"></i> Pre-purchase Car Inspection </a></li>
                 <li><a href="/"> <i className="fa fa-angle-right"></i> Analysis & Features</a></li>
               </ul>
              </div>
          </div>
          <div className="sidebar-widget">
            <h6>Recent Posts</h6>
            <div className="recent-post">
             <div className="recent-post-image">
              <img src="/images/car/01.jpg" alt=""/>
             </div>
             <div className="recent-post-info">
               <a href="/">Time to change your </a>
              <span><i className="fa fa-calendar"></i> September 30, 2021</span>
             </div>
            </div>
            <div className="recent-post">
             <div className="recent-post-image">
              <img src="images/car/02.jpg" alt=""/>
             </div>
             <div className="recent-post-info">
              <a href="/">The best time to</a>
              <span><i className="fa fa-calendar"></i> September 30, 2021</span>
             </div>
            </div>
            <div className="recent-post">
             <div className="recent-post-image">
              <img src="images/car/03.jpg" alt=""/>
             </div>
             <div className="recent-post-info">
              <a href="/">Replacing a timing</a>
              <span><i className="fa fa-calendar"></i> September 30, 2021</span>
             </div>
            </div>
         </div>
         <div className="sidebar-widget">
           <h6>Tags</h6>
            <div className="tags">
             <ul>
              <li><a href="/">Bootstrap</a></li>
              <li><a href="/">HTML5</a></li>
              <li><a href="/">Wordpress</a></li>
              <li><a href="/">CSS3</a></li>
              <li><a href="/">Creative</a></li>
              <li><a href="/">Multipurpose</a></li>
              <li><a href="/">Bootstrap</a></li>
              <li><a href="/">HTML5</a></li>
              <li><a href="/">Wordpress</a></li>
            </ul>
           </div>
         </div>
         <div className="sidebar-widget">
            <h6>archives</h6>
            <div className="widget-link">
               <ul>
                 <li><a href="/"> <i className="fa fa-angle-right"></i> June <span className="float-end">12</span></a></li>
                 <li><a href="/"> <i className="fa fa-angle-right"></i> January  <span className="float-end">28</span></a></li>
                 <li><a href="/"> <i className="fa fa-angle-right"></i> March <span className="float-end">08</span></a></li>
                 <li><a href="/"> <i className="fa fa-angle-right"></i> November  <span className="float-end">04</span></a></li>
                 <li><a href="/"> <i className="fa fa-angle-right"></i> December <span className="float-end">13</span></a></li>
               </ul>
              </div>
          </div>
        </div>
      </div>
     </div>
   </div>
</section>
    </React.Fragment>
  )
}

export default SinglePost