import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  employees: [
    { id: 1, name: "Sathish", location: "Madurai", designation: "API Dev" },
    { id: 2, name: "Saro", location: "Coimbatore", designation: "UI Dev" },
    { id: 3, name: "Thiru", location: "Ramnad", designation: "DevOps" },
    { id: 4, name: "laksh", location: "srivilliputhur", designation: "Dev" },
    { id: 5, name: "pachi", location: "krishnakri", designation: "Officer" },
    { id: 6, name: "Abbas", location: "Ervadi", designation: "HR" },
    { id: 7, name: "Sathish1", location: "Madurai", designation: "API Dev" },
    { id: 8, name: "Saro1", location: "Coimbatore", designation: "UI Dev" },
    { id: 9, name: "Thiru1", location: "Ramnad", designation: "DevOps" },
    { id: 10, name: "laks1h", location: "srivilliputhur", designation: "Dev" },
    { id: 11, name: "pachi1", location: "krishnakri", designation: "Officer" },
    { id: 12, name: "Abbas1", location: "Ervadi", designation: "HR" },
  ],
  departments: [
    { id: 1, name: "Sai", branch: "Designer" },
    { id: 2, name: "Sairam", branch: "Developer" },
    { id: 3, name: "Hari", branch: "Designer" },
    { id: 4, name: "Priya", branch: "Developer" },
    { id: 5, name: "Ramya", branch: "Designer" },
    { id: 6, name: "Thiru", branch: "Developer" },
    { id: 7, name: "Sathish", branch: "Designer" },
    { id: 8, name: "Raja", branch: "Developer" },
    { id: 9, name: "Ramya1", branch: "Designer" },
    { id: 10, name: "Thiru1", branch: "Developer" },
    { id: 11, name: "Sathish1", branch: "Designer" },
    { id: 12, name: "Raja1", branch: "Developer" },
  ],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id,
    });
  }

  function addEmployee(employees) {
    dispatch({
      type: "ADD_EMPLOYEES",
      payload: employees,
    });
  }

  function editEmployee(employees) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employees,
    });
  }

  function addDepartment(department) {
    dispatch({
      type: "ADD_DEPARTMENT",
      payload: department,
    });
  }

  function editDepartment(department) {
    dispatch({
      type: "EDIT_DEPARTMENT",
      payload: department,
    });
  }
  function removeDepartment(id) {
    dispatch({
      type: "REMOVE_DEPARTMENT",
      payload: id,
    });
  }

  //here the logic for pagination
  function fetchEmployees(page) {
    const start = page === 1 ? page - 1 : (page - 1) * 4;
    const end =
      page * 4 >= state.employees.length
        ? page * 4
        : page * 4 - state.employees.length;
    const paginatedEmployess = state.employees.slice(start, end);
    return paginatedEmployess;
  }

    //here the logic for pagination
    function fetchDepartments(page) {
      const start = page === 1 ? page - 1 : (page - 1) * 4;
      const end =
        page * 4 >= state.departments.length
          ? page * 4
          : page * 4 - state.departments.length;
      const paginatedDepartmentss = state.departments.slice(start, end);
      return paginatedDepartmentss;
    }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        departments: state.departments,
        addDepartment,
        editDepartment,
        removeDepartment,
        removeEmployee,
        addEmployee,
        editEmployee,
        fetchEmployees,
        fetchDepartments,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
