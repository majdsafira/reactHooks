import React, { useEffect, useState } from 'react'

function Posts() {
    const [page, setPage] = useState(1)
    const [posts, setPosts] = useState([])
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
    // console.log(page)
    

    useEffect(() => {
        async function getPosts(){
            const res = await fetch('http://127.0.0.1:8000/api/Allposts')
            const count = await res.json()
            setCount(count)
        }
        getPosts()
    },[])
    console.log(count)


    const postsArr = posts.map(post => {
        return (
            <>
            <hr class="gray"/>
            <div class="blog-entry">
              <div class="blog-entry-image  clearfix">
                <div class="portfolio-item">
                  <img class="img-fluid" src="images/blog/04.jpg" alt=""/>
                </div>
              </div>
              <div class="entry-title">
                <a href="/">Replacing a timing</a>
              </div>
              <div class="entry-meta">
                <ul>
                  <li><a href="/"><i class="fa fa-user"></i> By Cardealer </a> /</li>
                  <li><a href="/"><i class="fa fa-comments-o"></i> 5 Comments</a> /</li>
                  <li><a href="/"><i class="fa fa-folder-open"></i> News 2016</a> /</li>
                  <li><a href="/"><i class="fa fa-heart-o"></i>10</a></li>
                </ul>
              </div>
              <div class="entry-content">
                <p>{post.description}</p>
              </div>
              <div class="entry-share clearfix">
                <a class="button red float-start" href="/"> Read More </a>
                <div class="share float-end"><a href="/"> <i class="fa fa-share-alt"></i> </a>
                  <div class="blog-social">
                    <ul class="list-style-none">
                      <li> <a href="/"><i class="fa fa-facebook"></i></a> </li>
                      <li> <a href="/"><i class="fa fa-twitter"></i></a> </li>
                      <li> <a href="/"><i class="fa fa-instagram"></i></a> </li>
                      <li> <a href="/"><i class="fa fa-pinterest-p"></i></a> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </>
        )
    }
    )

    const items = []

    for (let i = 1; i <= Math.ceil(count/5); i++) {
      items.push(<li ><a href="javascript:void(0)" key={i} onClick={handleClick}>{i}</a></li>)
    }

  return (
    <React.Fragment>
  <section class="inner-intro bg-1 bg-overlay-black-70">
  <div class="container">
     <div class="row text-center intro-title">
           <div class="col-md-6 text-md-start d-inline-block">
             <h1 class="text-white">Posts </h1>
           </div>
           <div class="col-md-6 text-md-end float-end">
             <ul class="page-breadcrumb">
                <li><a href="/"><i class="fa fa-home"></i> Home</a> <i class="fa fa-angle-double-right"></i></li>
                <li><span>Posts</span> </li>
             </ul>
           </div>
     </div>
  </div>
</section>

<section class="blog page-section-ptb">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
         <div class="section-title">
           <h2>Explore posts </h2>
           <div class="separator"></div>
         </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        

        {postsArr}


        <hr class="gray"/>
        <div class="pagination-nav  d-flex justify-content-center">
          <ul class="pagination">
            {/* <li ><a href="javascript:void(0)" onClick={handleClick}>1</a></li>
            <li><a href="javascript:void(0)" onClick={handleClick}>2</a></li>
            <li><a href="javascript:void(0)" onClick={handleClick}>3</a></li> */}
            {items}
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