import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Addemployee = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");
  const { addEmployee, employees } = useContext(GlobalContext);
  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: employees.length + 1,
      name,
      location,
      designation,
    };
    addEmployee(newEmployee);
    history.push("/");
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div class="mb-3">
          <label class="form-label">Name of employee</label>
          <input
            class="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Location</label>
          <input
            class="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Enter Location"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Designation</label>
          <input
            class="form-control"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            type="text"
            placeholder="Enter Designation"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Add Employee
        </button>
        <Link to="/" className="btn btn-secondary">
          Cancel
        </Link>
      </form>
    </Fragment>
  );
};
