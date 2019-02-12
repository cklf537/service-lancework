import React, { Component } from 'react';
import './App.css';


class App extends Component {
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
                <label for="search" className="sr-only">Search</label>
                <input type="search" className="form-control " id="search" placeholder="Search" />
              </div>
              <i class="fa fa-search fa-3" aria-hidden="true"></i>
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
          <header class="navbar navbar-expand flex-column flex-md-row bd-navbar " >
            <div className="col-md-4 logo">
              <a className="navbar-brand mr-0 mr-md-2" href="/" aria-label="Bootstrap">CSB <span className="logo-text">Learn, Create, Succeed.</span>
              </a>
            </div>
            <div className="navbar-nav-scroll col-md-8 ">
              <div className="text-right">
                <ul className="navbar-nav bd-navbar-nav flex-row">
                  <li className="nav-item"><a href="" className="nav-link">Schedule</a></li>
                  <li className="nav-item"><a href="" className="nav-link">FAQ's</a></li>
                  <li className="nav-item"><a href="" className="nav-link">Discussion Board</a></li>
                  <li className="nav-item"><a href="" className="nav-link">Contact</a></li>
                </ul>
              </div>
            </div>
          </header>
        </div>
      </React.Fragment >
    );
  }
}

export default App;
