import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

function SinglePost() {

    const [post, setPost] = useState([{title:'', description:'',}])

    let postId = useParams()
    // console.log(postId.id)
    useEffect(() => {
        async function getPost(){
            const res = await fetch(`http://127.0.0.1:8000/api/post/${postId.id}`)
            const data = await res.json()
            setPost(data)
            console.log(data)
        }
        getPost()
    },[postId.id])
  return (
    <React.Fragment>
        <section class="inner-intro bg-1 bg-overlay-black-70">
  <div class="container">
     <div class="row text-center intro-title">
           <div class="col-md-6 text-md-start d-inline-block">
             <h1 class="text-white">Single post </h1>
           </div>
           <div class="col-md-6 text-md-end float-end">
             <ul class="page-breadcrumb">
                <li><Link to="/"><i class="fa fa-home"></i> Home</Link> <i class="fa fa-angle-double-right"></i></li>
                <li><Link to="/posts">posts</Link> <i class="fa fa-angle-double-right"></i></li>
                <li><span>Single post</span> </li>
             </ul>
           </div>
     </div>
  </div>
</section>


<section class="blog blog-single page-section-ptb">
  <div class="container">
    <div class="row">
     <div class="col-md-8">
        <div class="blog-entry">
          <div class="blog-entry-image  clearfix">
             <div class="portfolio-item">
               <img class="img-fluid" src="images/blog/02.jpg" alt=""/>
              </div>
            </div>
          <div class="entry-title">
             <a href="/">{post[0].title}</a>
          </div>
          <div class="entry-meta">
            <ul>
              <li><a href="/"><i class="fa fa-user"></i> By Cardealer </a> /</li>
              <li><a href="/"><i class="fa fa-comments-o"></i> 5 Comments</a> /</li>
              <li><a href="/"><i class="fa fa-folder-open"></i> News 2021</a> /</li>
              <li><a href="/"><i class="fa fa-heart-o"></i>10</a></li>
            </ul>
          </div>
          <div id="tabs">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item icon-diamond" role="presentation">
              <button class="nav-link active" id="general-information-tab" data-bs-toggle="tab" data-bs-target="#general-information" type="button" role="tab" aria-controls="general-information" aria-selected="true">General Information</button>
            </li>
            <li class="nav-item icon-list" role="presentation">
              <button class="nav-link" id="features-options-tab" data-bs-toggle="tab" data-bs-target="#features-options" type="button" role="tab" aria-controls="features-options" aria-selected="false">Features & Options</button>
            </li>
            <li class="nav-item icon-equalizer" role="presentation">
              <button class="nav-link " id="vehicle-overview-tab" data-bs-toggle="tab" data-bs-target="#vehicle-overview" type="button" role="tab" aria-controls="vehicle-overview" aria-selected="false">Vehicle Overview</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="general-information" role="tabpanel" aria-labelledby="general-information-tab">
              <h6>{post[0].title}</h6>
              <p>{post[0].description}</p>
            </div>
            <div class="tab-pane fade" id="features-options" role="tabpanel" aria-labelledby="features-options-tab">
              <h6>consectetur adipisicing elit</h6>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th scope="row"> Air conditioning</th>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row"> Alloy Wheels</th>
                    <td>Jacob</td>
                  </tr>
                  <tr>
                    <th scope="row"> Anti-Lock Brakes (ABS)</th>
                    <td>Larry</td>
                  </tr>
                  <tr>
                    <th scope="row"> Anti-Theft</th>
                    <td>Larry</td>
                  </tr>
                  <tr>
                    <th scope="row">Anti-Starter</th>
                    <td>Larry</td>
                  </tr>
                  <tr>
                    <th scope="row">Alloy Wheels</th>
                    <td>Larry</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade" id="vehicle-overview" role="tabpanel" aria-labelledby="vehicle-overview-tab">
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
        <div class="blog-form">
          <div class="gray-form row">
            <div class="col-md-12">
             <div class="mb-3">
               <textarea class="form-control" rows="7" placeholder="Comment"></textarea>
              </div>
            </div>
             <div class="col-md-12 d-grid ">
              <a class="button red btn-block" href="/">SUBMIT</a>
            </div>
          <div>
         </div>
        </div>
       </div>
     </div>
      <div class="col-md-4">
        <div class="blog-sidebar">
          <div class="sidebar-widget">
            <h6>Search here</h6>
            <div class="widget-search">
                <i class="fa fa-search"></i>
                <input type="search" class="form-control placeholder" placeholder="Search...."/>
              </div>
          </div>
          <div class="sidebar-widget">
            <h6>categories</h6>
            <div class="widget-link">
               <ul>
                 <li><a href="/"> <i class="fa fa-angle-right"></i> Test Drives </a></li>
                 <li><a href="/"> <i class="fa fa-angle-right"></i> Video Reviews </a></li>
                 <li><a href="/"> <i class="fa fa-angle-right"></i> Analysis & Features</a></li>
                 <li><a href="/"> <i class="fa fa-angle-right"></i> Pre-purchase Car Inspection </a></li>
                 <li><a href="/"> <i class="fa fa-angle-right"></i> Analysis & Features</a></li>
               </ul>
              </div>
          </div>
          <div class="sidebar-widget">
            <h6>Recent Posts</h6>
            <div class="recent-post">
             <div class="recent-post-image">
              <img src="/images/car/01.jpg" alt=""/>
             </div>
             <div class="recent-post-info">
               <a href="/">Time to change your </a>
              <span><i class="fa fa-calendar"></i> September 30, 2021</span>
             </div>
            </div>
            <div class="recent-post">
             <div class="recent-post-image">
              <img src="images/car/02.jpg" alt=""/>
             </div>
             <div class="recent-post-info">
              <a href="/">The best time to</a>
              <span><i class="fa fa-calendar"></i> September 30, 2021</span>
             </div>
            </div>
            <div class="recent-post">
             <div class="recent-post-image">
              <img src="images/car/03.jpg" alt=""/>
             </div>
             <div class="recent-post-info">
              <a href="/">Replacing a timing</a>
              <span><i class="fa fa-calendar"></i> September 30, 2021</span>
             </div>
            </div>
         </div>
         <div class="sidebar-widget">
           <h6>Tags</h6>
            <div class="tags">
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
         <div class="sidebar-widget">
            <h6>archives</h6>
            <div class="widget-link">
               <ul>
                 <li><a href="/"> <i class="fa fa-angle-right"></i> June <span class="float-end">12</span></a></li>
                 <li><a href="/"> <i class="fa fa-angle-right"></i> January  <span class="float-end">28</span></a></li>
                 <li><a href="/"> <i class="fa fa-angle-right"></i> March <span class="float-end">08</span></a></li>
                 <li><a href="/"> <i class="fa fa-angle-right"></i> November  <span class="float-end">04</span></a></li>
                 <li><a href="/"> <i class="fa fa-angle-right"></i> December <span class="float-end">13</span></a></li>
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