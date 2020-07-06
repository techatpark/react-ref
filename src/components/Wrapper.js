import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Wrapper = ({ children }) => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            React CRUD
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/employee" className="nav-link active">
                  Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/department" className="nav-link active">
                  Departments
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ul className="navbar-nav ml-sm-auto">
          <li className="nav-item active">
            <a
              className="nav-link active"
              href="https://github.com/twbs"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="GitHub"
            >
              <i className="fas fa-power-off"></i>
            </a>
          </li>
        </ul>
      </nav>

      <div className="container-fluid mt-3 vh-100 pb-5">
        <section className="row mt-5 p-2">{children}</section>
      </div>
    </Fragment>
  );
};
