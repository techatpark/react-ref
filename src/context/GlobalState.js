import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  employees: [
    { id: 1, name: "Sathish", location: "Madurai", designation: "API Dev" },
    { id: 2, name: "Saro", location: "Coimbatore", designation: "UI Dev" },
    { id: 3, name: "Thiru", location: "Ramnad", designation: "DevOps" },
  ],
  departments: [
    { id: 1, name: "Sai", branch: "Designer" },
    { id: 2, name: "Sairam", branch: "Developer" }
  ]

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
