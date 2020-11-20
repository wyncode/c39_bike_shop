import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const navigation = () => {
  return (
    <>
      <navbar class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          The Bike Shop
        </a>
        {/* <a class="navbar-brand" href="#">Log In</a>  */}
        {/* <button
        // class="navbar-toggler"
        // type="button"
        // data-toggle="collapse"
        // data-target="#navbarNavDropdown"
        // aria-controls="navbarNavDropdown"
        // aria-expanded="false"
        // aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> */}
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Bike Shops <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Community
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Events
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Trails & Routes
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Log In
              </a>
            </li>
          </ul>
        </div>
      </navbar>
    </>
  );
};

export default navigation;

{
  /* <div>
      <nav class="navbar navbar-light bg-light">
        <a href="#" class="navbar-brand">
          The Bike Shop
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link">
              Cyclist
            </a>
            
          </li>
          
        </ul>
      </nav>
    </div> */
}
