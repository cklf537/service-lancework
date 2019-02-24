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
                  
                     <div className="col-md-12">
                     <div className="row">
                           <div className="col-md-6 text-center">
                              <span><i className="fa fa-phone" aria-hidden="true"></i> +91 99999 99999</span>
                           </div>
                           <div className="col-md-6 text-center">
                        <span> <i className="fa fa-envelope" aria-hidden="true"></i> support@csb.com</span>
                           </div>
                     </div>
               </div>
            </div>
          </div>
         </React.Fragment>
      )
    }
 }
 export default Contact;