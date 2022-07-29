import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostForm() {

    let user_id = 1
    // if (localStorage.getItem('isloggedIn')) {
    //     user_id = localStorage.getItem('isloggedIn')
    // }

    useEffect(() => {
        async function getUser(id){
            const res = await fetch(`http://127.0.0.1:8000/api/getuser/${id}`)
            const user = await res.json()
            setFormData((oldData => {
                return {
                    ...oldData,
                    user_id: user.id
                }
            }))
        }
        getUser(user_id)
    },[])

    const [formData, setFormData] = useState({
        user_id : '',
        description: '', 
    })
    const [postConformation, setPostConformation] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((oldData) => {
            return {
                ...oldData,
                [name]: value,
            }
        })
    }

    const handleClick = (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...formData})
        };
        async function addPost(){
            const res  = await fetch('http://127.0.0.1:8000/api/post', requestOptions)
            const data = await res
            data && setPostConformation(true)
        }
        
        addPost()
            
        }
console.log(postConformation)


  return (
    <React.Fragment>

<section className="inner-intro bg-1 bg-overlay-black-70">
  <div className="container">
     <div className="row text-center intro-title">
           <div className="col-md-6 text-md-start d-inline-block">
             <h1 className="text-white">Create a post </h1>
           </div>
           <div className="col-md-6 text-md-end float-end">
             <ul className="page-breadcrumb">
                <li><Link to="/"><i className="fa fa-home"></i> Home</Link> <i className="fa fa-angle-double-right"></i></li>
                <li><span>Create a post</span> </li>
             </ul>
           </div>
     </div>
  </div>
</section>
    
    <section className="contact-2 page-section-ptb white-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 justify-content-center">
            <div className="section-title">
              <span>We’d Love to Hear From You</span>
              <div className="separator"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-sm-12 mb-lg-0 mb-1">
            <div className="gray-form row">
              <div className="col-md-12">
                <form
                  className="form-horizontal"
                  id="contactform"
                  method="post"
                  action="http://themes.potenzaglobalsolutions.com/html/cardealer/php/contact-form.php"
                >
                  <h5>
                    Have any questions?
                  </h5>
                  <p>
                    Please share it with our comunity!
                  </p>
                  <div
                    id="formmessage"
                    className="form-notice"
                    style={{display:"none"}}
                  >
                    Success/Error Message Goes Here
                  </div>
                  <div className="contact-form">
                    
                    <div className="mb-3">
                      <textarea
                        id="contactform_message"
                        className="form-control input-message"
                        placeholder="Post description*"
                        rows="7"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d-grid">
                      <input type="hidden" name="action" value="sendEmail" />
                      <button
                        id="submit"
                        name="submit"
                        type="submit"
                        value="Send"
                        className="button red btn-block"
                        onClick={handleClick}
                      >
                        {" "}
                        submit{" "}
                        {/* <i
                          className="fa fa-spinner fa-spin fa-fw btn-loader"
                          style={{display:"none;"}}
                        ></i> */}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="feature-box-3 grey-border">
              <div className="icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="content">
                <h5>Address </h5>
                <p>220E Front St. Burlington NC 215 </p>
              </div>
            </div>
            <div className="feature-box-3 grey-border">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <div className="content">
                <h5>Phone </h5>
                <p>(007) 123 456 7890 </p>
              </div>
            </div>
            <div className="feature-box-3 grey-border mb-0">
              <div className="icon">
                <i className="fa fa-envelope-o"></i>
              </div>
              <div className="content">
                <h5>Email </h5>
                <p> support@website.com </p>
              </div>
            </div>
            <div className="opening-hours gray-bg">
              <h6>opening hours</h6>
              <ul className="list-style-none">
                <li>
                  <strong>Sunday</strong> <span className="text-red"> closed</span>
                </li>
                <li>
                  <strong>Monday</strong> <span> 9:00 AM to 9:00 PM</span>
                </li>
                <li>
                  <strong>Tuesday </strong> <span> 9:00 AM to 9:00 PM</span>
                </li>
                <li>
                  <strong>Wednesday </strong> <span> 9:00 AM to 9:00 PM</span>
                </li>
                <li>
                  <strong>Thursday </strong> <span> 9:00 AM to 9:00 PM</span>
                </li>
                <li>
                  <strong>Friday </strong> <span> 9:00 AM to 9:00 PM</span>
                </li>
                <li>
                  <strong>Saturday </strong> <span> 9:00 AM to 9:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  );
}

export default PostForm;
