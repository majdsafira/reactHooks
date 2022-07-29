import React from "react";

function PostForm() {
  return (
    <section class="contact-2 page-section-ptb white-bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12 justify-content-center">
            <div class="section-title">
              <span>We’d Love to Hear From You</span>
              <h2>LET'S GET IN TOUCH!</h2>
              <div class="separator"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 col-sm-12 mb-lg-0 mb-1">
            <div class="gray-form row">
              <div class="col-md-12">
                <form
                  class="form-horizontal"
                  id="contactform"
                  method="post"
                  action="http://themes.potenzaglobalsolutions.com/html/cardealer/php/contact-form.php"
                >
                  <h5>
                    We have completed over a 1000+ projects for five hundred
                    clients. Give us your next project.
                  </h5>
                  <p>
                    It would be great to hear from you! If you got any
                    questions, please do not hesitate to send us a message. We
                    are looking forward to hearing from you! We reply within 24
                    hours !
                  </p>
                  <div
                    id="formmessage"
                    class="form-notice"
                    style={{display:"none;"}}
                  >
                    Success/Error Message Goes Here
                  </div>
                  <div class="contact-form">
                    <div class="mb-3">
                      <input
                        id="contactform_name"
                        type="text"
                        placeholder="Name*"
                        class="form-control"
                        name="name"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        id="contactform_email"
                        type="email"
                        placeholder="Email*"
                        class="form-control"
                        name="email"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        id="contactform_phone"
                        type="text"
                        placeholder="Phone*"
                        class="form-control"
                        name="phone"
                      />
                    </div>
                    <div class="mb-3">
                      <textarea
                        id="contactform_message"
                        class="form-control input-message"
                        placeholder="Comment*"
                        rows="7"
                        name="message"
                      ></textarea>
                    </div>
                    <div class="d-grid">
                      <input type="hidden" name="action" value="sendEmail" />
                      <button
                        id="submit"
                        name="submit"
                        type="submit"
                        value="Send"
                        class="button red btn-block"
                      >
                        {" "}
                        Send your message{" "}
                        <i
                          class="fa fa-spinner fa-spin fa-fw btn-loader"
                          style={{display:"none;"}}
                        ></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="feature-box-3 grey-border">
              <div class="icon">
                <i class="fa fa-map-marker"></i>
              </div>
              <div class="content">
                <h5>Address </h5>
                <p>220E Front St. Burlington NC 215 </p>
              </div>
            </div>
            <div class="feature-box-3 grey-border">
              <div class="icon">
                <i class="fa fa-phone"></i>
              </div>
              <div class="content">
                <h5>Phone </h5>
                <p>(007) 123 456 7890 </p>
              </div>
            </div>
            <div class="feature-box-3 grey-border mb-0">
              <div class="icon">
                <i class="fa fa-envelope-o"></i>
              </div>
              <div class="content">
                <h5>Email </h5>
                <p> support@website.com </p>
              </div>
            </div>
            <div class="opening-hours gray-bg">
              <h6>opening hours</h6>
              <ul class="list-style-none">
                <li>
                  <strong>Sunday</strong> <span class="text-red"> closed</span>
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
  );
}

export default PostForm;
