import React, { Fragment } from "react";
import { Heading } from "./Heading";
import { Employeelist } from "./Employeelist";

export const Home = () => {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a href="#" class="navbar-brand d-flex align-items-center">
            React CRUD
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link active">Employees</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active">Departments</a>
              </li>
            </ul>
          </div>
        </div>
        <ul class="navbar-nav ml-sm-auto">
          <li class="nav-item active">
            <a
              class="nav-link active"
              href="https://github.com/twbs"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <i class="fas fa-power-off"></i>
            </a>
          </li>
        </ul>
      </nav>

      <div class="container-fluid mt-3 vh-100 pb-5">
        <section class="row mt-5 p-2 min-vh-100">
          <div class="col">
            Welcome to CRUD
            <Employeelist />
          </div>
        </section>
      </div>
    </Fragment>
  );
};
