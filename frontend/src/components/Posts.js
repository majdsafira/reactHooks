import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Posts() {
    const [page, setPage] = useState(1)
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([{count:0},{count:0},{count:0},{count:0},{count:0}])
    const [count, setCount] = useState(0)

    const handleClick = (event) => {
        setPage(event.target.innerHTML)
    }

    useEffect(() => {
        async function getPosts(page){
            const res = await fetch('http://127.0.0.1:8000/api/post?page=' + page)
            const posts = await res.json()
            setPosts(posts.data)
        }
        getPosts(page)
    },[page])
    
    useEffect(() => {
        async function getComments(page){
            const res = await fetch('http://localhost:8000/api/commentsCount?page=' + page)
            const comments = await res.json()
            setComments(comments.data)
        }
        getComments(page)
    },[page])
    console.log(comments)
    

    useEffect(() => {
        async function getPosts(){
            const res = await fetch('http://127.0.0.1:8000/api/Allposts')
            const count = await res.json()
            setCount(count)
        }
        getPosts()
    },[])
    console.log(count)


    const postsArr = posts.map((post,index) => {
        return (
            <div key={post.id}>
            <hr className="gray"/>
            <div className="blog-entry">
              {/* <div className="blog-entry-image  clearfix">
                <div className="portfolio-item">
                  <img className="img-fluid" src="images/blog/04.jpg" alt=""/>
                </div>
              </div> */}
              <div className="entry-title">
                <Link to={`/single_post/${post.id}`}>{post.title}</Link>
              </div>
              <div className="entry-meta">
                <ul>
                  <li><a href="/"><i className="fa fa-user"></i> By Cardealer </a> /</li>
                  <li><a href="/"><i className="fa fa-comments-o"></i> {comments[index].count ? comments[index].count: 0} Comments</a> /</li>
                  <li><a href="/"><i className="fa fa-folder-open"></i> News 2016</a> /</li>
                  <li><a href="/"><i className="fa fa-heart-o"></i>10</a></li>
                </ul>
              </div>
              <div className="entry-content">
                <p>{post.description}</p>
              </div>
              <div className="entry-share clearfix">
                <Link className="button red float-start" to={`/single_post/${post.id}`}> View Post </Link>
                <div className="share float-end"><a href="/"> <i className="fa fa-share-alt"></i> </a>
                  <div className="blog-social">
                    <ul className="list-style-none">
                      <li> <a href="/"><i className="fa fa-facebook"></i></a> </li>
                      <li> <a href="/"><i className="fa fa-twitter"></i></a> </li>
                      <li> <a href="/"><i className="fa fa-instagram"></i></a> </li>
                      <li> <a href="/"><i className="fa fa-pinterest-p"></i></a> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
        )
    }
    )

    const pagination = []

    for (let i = 1; i <= Math.ceil(count/5); i++) {
      pagination.push(<li key={i}><a href="javascript:void(0)" key={i} onClick={handleClick}>{i}</a></li>)
    }

  return (
    <React.Fragment>
  <section className="inner-intro bg-1 bg-overlay-black-70">
  <div className="container">
     <div className="row text-center intro-title">
           <div className="col-md-6 text-md-start d-inline-block">
             <h1 className="text-white">Posts </h1>
           </div>
           <div className="col-md-6 text-md-end float-end">
             <ul className="page-breadcrumb">
                <li><a href="/"><i className="fa fa-home"></i> Home</a> <i className="fa fa-angle-double-right"></i></li>
                <li><span>Posts</span> </li>
             </ul>
           </div>
     </div>
  </div>
</section>

<section className="blog page-section-ptb">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
         <div className="section-title">
           <h2>Explore posts </h2>
           <div className="separator"></div>
         </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        

        {postsArr}


        <hr className="gray"/>
        <div className="pagination-nav  d-flex justify-content-center">
          <ul className="pagination">
            {pagination}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
</React.Fragment>
  )
}

export default Posts