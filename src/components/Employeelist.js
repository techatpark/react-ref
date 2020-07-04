import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

export const Employeelist = () => {
  const { employees, removeEmployee, editEmployee } = useContext(GlobalContext);
  return (
    <Fragment>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <Link to="/add">
            <a class="nav-link active">Create</a>
          </Link>
        </li>
      </ul>
      {employees.length > 0 ? (
        <Fragment>
          <ul class="list-group list-group-flush">
            {employees.map((employee) => (
              <div className="list-group-item" key={employee.id}>
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{employee.name}</h5>
                  <small>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Link to={`/edit/${employee.id}`}>
                        <button type="button" class="btn btn-outline-secondary">
                          <i
                            class="far fa-edit"
                            onClick={() => editEmployee(employee.id)}
                          ></i>
                        </button>
                      </Link>
                      <button type="button" class="btn btn-outline-secondary">
                        <i
                          class="far fa-trash-alt"
                          onClick={() => removeEmployee(employee.id)}
                        ></i>
                      </button>
                    </div>
                  </small>
                </div>
                <small>{employee.designation}</small>
              </div>
            ))}
          </ul>
        </Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>
      )}
    </Fragment>
  );
};
