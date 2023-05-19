import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
// import "./navbar.css";
// import GridViewIcon from "@mui/icons-material/GridView";
// import PersonIcon from "@mui/icons-material/Person";
// import PersonPinIcon from "@mui/icons-material/PersonPin";
// import VpnKeyIcon from "@mui/icons-material/VpnKey";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid pt-3 position-fixed">
        <div className="row">
          <div
            className="col-8 mx-auto border border-info rounded"
            style={{ backgroundColor: "rgb(46,101,128)", color: "white" }}
          >
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <button
                  className="navbar-toggler ms-auto"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse "
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        <span>
                          <GridViewIcon />
                        </span>
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link active" to="/profile">
                        <span>
                          <PersonIcon />
                        </span>
                        Profile
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link active" to="/signup">
                        <span>
                          <PersonPinIcon />
                        </span>
                        SignUp
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link active" to="/signin">
                        <span>
                          <VpnKeyIcon />
                        </span>
                        SignIn
                      </NavLink>
                    </li>
                  </ul>
                  <form class="d-flex" role="search">
                    <button class="btn btn-primary " type="submit">
                      BUYNOW
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


// some important commands to install in project
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
// npm install bootstrap 
// npm i react-router-dom
