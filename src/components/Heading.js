import React from "react";
import { Link } from "react-router-dom";

export const Heading = () => {
  return (
    <div className="container">
      <h3>Employee Listing</h3>
      <Link to="/add">
        <button type="button" class="btn btn-primary">
          Add Employee
        </button>
      </Link>
    </div>
  );
};
