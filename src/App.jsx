import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import ReactDOM from 'react-dom';
import Navbar from './Components/navbar';
import contact from'./Components/Contact';
import Schedule from './Components/Schedule';
import Faq from './Components/Faq';
import Discussions from './Components/Discussions';
import About from './Components/About';
import Footer from './Components/footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hideshow: { display: 'none' }
    }
  }
 
  onClick(e){
    e.preventDefault()
    this.setState({hideshow: { display: 'none' }})
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        hideshow: {
        display: 'block' ,
        background: '#00000059',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
        }
      })
    }, 5000)  
  }



  render() {
    return (
      <React.Fragment>
        <div className="pos-f-t simpleBakground container-fluid pt-1 pb-1  " >
          <nav className="navbar justify-content-between ">
            <div className="pos-f-t">
              <nav className="navbar navbar-dark">
                <button className="navbar-toggler sm-toggle-btn" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </nav>
            </div>
            <form className="form-inline ">
              <div className="form-group p-1 ml-6 inner-addon right-addon">
                <label htmlFor="search" className="sr-only">Search</label>
                <input type="search" className="form-control " id="search" placeholder="Search" />
              </div>
              <i className="fa fa-search fa-3" aria-hidden="true"></i>
            </form>
            <div className="collapse col-md-12" id="navbarToggleExternalContent">
              <div className=" clearfix">
                <h4 className="text-white">Collapsed content</h4>
                <span className="text-muted">Toggleable via the navbar brand.</span>
              </div>
            </div>
          </nav>

        </div>
        
        <div className="container-fluid ">
        <div className="row">
        <div className="col-md-12 border-bottom">
          <header className="navbar navbar-expand flex-column flex-md-row bd-navbar " >
            <div className="col-md-4 logo">
              <a className="navbar-brand mr-0 mr-md-2" href="/" aria-label="Bootstrap">CSB <span className="logo-text">Learn, Create, Succeed.</span>
              </a>
            </div>
            <div className="navbar-nav-scroll col-md-8 ">
           <Navbar />
            </div>
          </header>
          </div>
          </div>
       </div>
          <section>

          <Switch>
                  <Route path="/Schedule" component={Schedule} />
                  <Route path="/About" component={About} />
                  <Route path="/Faqs" component={Faq} />
                  <Route path="/Discussions" component={Discussions} />
                  <Route path="/contact" component={contact} />
                  <Route path="/" exact component={Discussions} />
        </Switch>
          </section>
          <footer>
          <Footer />
          </footer>
        
        <div style={this.state.hideshow} tabIndex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">How It Works</h5>
        <button type="button" className="close" data-dismiss="modal" onClick={this.onClick.bind(this)} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="container">
          
            <div className="col-md-12">
            <div className="row">
            <div className="container-fluid">
              <br /><br />
              <ul className="list-unstyled multi-steps">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
              <div className="col-md-4">
                <div className="text-center">
                <i className="fa fa-server" style={{fontSize:'48px', color:'#007ea7'}}></i>
                <p>This HTML file is a template.
                If you open it directly in the browser, you will see an empty page.
                If you open it directly in the browser, you will see an empty page.</p>
                </div>
                </div>
                <div className="col-md-4">
                <div className="text-center">
                <i className="fa fa-sign-out" style={{fontSize:'48px', color:'#007ea7'}}></i>
                <p>This HTML file is a template.
                If you open it directly in the browser, you will see an empty page.
                If you open it directly in the browser, you will see an empty page.</p>
                </div>
                </div>
                <div className="col-md-4">
                <div className="text-center">
                <i className="fa  fa-video-camera" style={{fontSize:'48px', color:'#007ea7'}}></i>
                <p>This HTML file is a template.
                If you open it directly in the browser, you will see an empty page.
                If you open it directly in the browser, you will see an empty page.</p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

      </React.Fragment >
    );
  }
}

export default App;
