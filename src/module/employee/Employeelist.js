import React, { Fragment, useContext, useEffect, useState, normalizeResponseErrors } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";

export const Employeelist = () => {
  const {
    employees,
    removeEmployee,
    editEmployee,
    fetchEmployees,
  } = useContext(GlobalContext);
  const [emps, setEmp] = useState([]);
  const getEmployees = (pageNumber) => {
    setEmp(fetchEmployees(pageNumber));
  };
  useEffect(() => {
    const getEmployees = () => {
      return fetch("theURL", { method: "GET" }
      )
        .then(res => normalizeResponseErrors(res))
        .then(res => {
          return res.json();
        })
        .then(rcvdBusinesses => {
          // some stuff
        })
        .catch(err => {
          // some error handling
        });
    };
    getEmployees();
  }, []);

  let Items = [];
  for (let i = 0, j = 1; i < employees.length; i = i + 4, j++) {
    Items.push(
      <Pagination.Item onClick={() => getEmployees(j)}>{j}</Pagination.Item>
    );
  }

  return (
    <Fragment>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/employee/add">Create</Link>
        </li>
      </ul>
      {employees.length > 0 ? (
        <Fragment>
          <ul className="list-group list-group-flush">
            {emps.map((employee) => (
              <div className="list-group-item" key={employee.id}>
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{employee.name}</h5>
                  <small>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Link to={`/employee/edit/${employee.id}`}>
                        <button type="button" className="btn btn-outline-secondary">
                          <i
                            className="far fa-edit"
                            onClick={() => editEmployee(employee.id)}
                          ></i>
                        </button>
                      </Link>
                      <button type="button" className="btn btn-outline-secondary">
                        <i
                          className="far fa-trash-alt"
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
          <p className="text-center">No data</p>
        )}
      <div className="container-fluid">
        <Pagination>{Items}</Pagination>
      </div>
    </Fragment>
  );
};
