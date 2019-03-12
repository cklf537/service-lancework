import React from 'react';

class Contact extends React.Component {
    render() {
      return (
         <React.Fragment>
          <div className="ContactUs">
            <div className="container-fluid">
            <div className="row">
               <img src={require('../assets/contact.jpg')} alt="contactus banner" className="img-responsive img"/>
            </div>
            </div>
            <div className="container">
                  <div className="row">
                  <div className="col-md-12">
                     <h2 className="text-center">Get in touch</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla suctus</p>
                     <div className="row address">
                        <div className="col-md-4 text-center">
                           <span><i className="fa fa-phone" aria-hidden="true"></i> +91 99999 99999</span>
                        </div>
                        <div className="col-md-4 text-center">
                       <span> <i className="fa fa-envelope" aria-hidden="true"></i> support@csb.com</span>
                        </div>
                        <div className="col-md-4 text-center">
                        <span><i className="fa fa-address-card" aria-hidden="true"></i>Bangalore</span>
                        </div>
                     </div>
                  </div>
                  </div>
                  
                     <div className="col-md-12 ContactForm">
                     
                     <form action="">
                     <div className="row">
                           <div className="col-md-6 ">
                              <div className="form-group">
                                 <label htmlFor="name">First Name:</label>
                                 <input type="text" className="form-control" id="name"/>
                              </div>
                              <div className="form-group">
                                 <label htmlFor="email">Email Address:</label>
                                 <input type="email" className="form-control" id="email"/>
                              </div>
                           </div>
                           <div className="col-md-6 ">
                           <div className="form-group">
                                 <label htmlFor="lastname">Last Name:</label>
                                 <input type="text" className="form-control" id="lastname"/>
                              </div>
                           <div className="form-group">
                                 <label htmlFor="mobile">Mobile:</label>
                                 <input type="text" className="form-control" id="mobile"/>
                              </div>
                              
                           </div>
                           <div className="col-md-12">
                              <div className="form-group">
                              <label htmlFor="exampleFormControlTextarea1">Message</label>
                              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                           </div>
                           </div>
                           <div className="col-md-12">
                           <div className="form-group pull-right">
                              <button className="form-control btn btn-primary" type="button">Submit</button>
                           </div>
                           </div>
                                                      
                     </div>
                     </form>
               </div>
            </div>
          </div>
         </React.Fragment>
      )
    }
 }
 export default Contact;