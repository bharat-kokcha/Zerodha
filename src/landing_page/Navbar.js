import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFF"}}> 
        <div class="container p-3">
          <Link class="navbar-brand" to="/">
            <img src="/media/images/logo.svg" alt="logo" style={{width:"30%"}}></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-lg-0" style={{marginLeft:"auto"}}>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup" style={{fontSize:"18px"}}>
                  SignUp
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about" style={{fontSize:"18px"}}>
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/product" style={{fontSize:"18px"}}>
                  Product
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/pricing" style={{fontSize:"18px"}}>
                  Pricing
                </Link>
              </li>


              <li class="nav-item ">
                <Link class="nav-link active" to="/support" style={{fontSize:"18px"}}>
                  Support
                </Link>
              </li>

            
            </ul>
            <form class="d-flex" role="search">
              
            </form>
          </div>
        </div>
      </nav>

  );
}

export default Navbar;
