import React from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_ya5im95",
      "template_mx39asn",
      e.target,
      "fqBe2jdaTOI5WzEp6"
    )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        });
    e.target.reset()
  };
  return (
    <>
      <section class="inner-intro bg-1 bg-overlay-black-70">
        <div class="container">
          <div class="row text-center intro-title">
            <div class="col-md-6 text-md-start d-inline-block">
              <h1 class="text-white">Contact us </h1>
            </div>
            <div class="col-md-6 text-md-end float-end">
              <ul class="page-breadcrumb">
                <li><a href="/"><i class="fa fa-home"></i> Home</a> <i class="fa fa-angle-double-right"></i></li>
                <li><a href="#">Contact </a> <i class="fa fa-angle-double-right"></i></li>

              </ul>
            </div>
          </div>
        </div>
      </section>
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
                  <form onSubmit={sendEmail}>

                    <div id="formmessage" class="form-notice" style={{ display: 'none' }}>Success/Error Message Goes Here</div>
                    <div class="contact-form">
                      <div class="mb-3">
                        <input id="contactform_name" type="text" placeholder="Name*" class="form-control" name="name" />
                      </div>
                      <div class="mb-3">
                        <input id="contactform_email" type="email" placeholder="Email*" class="form-control" name="email" />
                      </div>
                      <div class="mb-3">
                        <input id="contactform_phone" type="text" placeholder="Phone*" class="form-control" name="phone" />
                      </div>
                      <div class="mb-3">
                        <textarea id="contactform_message" class="form-control input-message" placeholder="Comment*" rows="7" name="message"></textarea>
                      </div>
                      <div class="d-grid">
                        <input type="hidden" name="action" value="sendEmail" />
                        <button id="submit" name="submit" type="submit" value="Send" class="button red btn-block"> Send your message </button>
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
                  <p>Irbid-Jordan </p>
                </div>
              </div>
              <div class="feature-box-3 grey-border">
                <div class="icon">
                  <i class="fa fa-phone"></i>
                </div>
                <div class="content">
                  <h5>Phone </h5>
                  <p>(007) 7809 1928 </p>
                </div>
              </div>
              <div class="feature-box-3 grey-border mb-0">
                <div class="icon">
                  <i class="fa fa-envelope-o"></i>
                </div>
                <div class="content">
                  <h5>Email  </h5>
                  <p> majdsafira@gmail.com </p>
                </div>
              </div>
              <div class="opening-hours gray-bg">
                <h6>opening hours</h6>
                <ul class="list-style-none">
                  <li><strong>Sunday</strong> <span class="text-red"> closed</span></li>
                  <li><strong>Monday</strong> <span> 9:00 AM to 9:00 PM</span></li>
                  <li><strong>Wednesday </strong> <span> 9:00 AM to 9:00 PM</span></li>
                  <li><strong>Thursday </strong> <span> 9:00 AM to 9:00 PM</span></li>
                  <li><strong>Friday </strong> <span> 9:00 AM to 9:00 PM</span></li>
                  <li><strong>Saturday </strong> <span> 9:00 AM to 9:00 PM</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="contact-map">
        <div class="container-fluid">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53808.191993442735!2d35.81239013695196!3d32.55252499617903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c76916dac0453%3A0x5416e113d81f7d82!2sIrbid!5e0!3m2!1sen!2sjo!4v1659199284132!5m2!1sen!2sjo" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  </div>
      </section>


    </>
  )
}

export default Contact
