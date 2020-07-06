import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GlobalContext } from "../../context/GlobalState";

export function AddEditEmployee({ history, match }) {
  const { id } = match.params;
  const isAddMode = !id;
  const { addEmployee, employees, editEmployee } = useContext(GlobalContext);
  const [employee, setEmployee] = useState({});
  const [isLoaded, updateLoader] = useState(false);
  const initialValues = {
    name: "",
    location: "",
    designation: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    location: Yup.string().required("Location is required"),
    designation: Yup.string().required("Designation is required"),
  });

  function onSubmit(fields, { setStatus, setSubmitting }) {
    setStatus();
    if (isAddMode) {
      createEmployee(fields, setSubmitting);
    } else {
      updateEmployee(fields, setSubmitting);
    }
  }

  function createEmployee(fields, setSubmitting) {
    addEmployee({ ...fields, id: employees.length + 1 });
    setSubmitting(true);
    history.push(".");
  }

  function updateEmployee(fields, setSubmitting) {
    editEmployee(fields);
    setSubmitting(true);
    history.push("..");
  }

  useEffect(() => {
    if (!isAddMode) {
      const selectedEmp = employees.find((emp) => emp.id === parseInt(id));
      setEmployee(selectedEmp);
    }
    updateLoader(true);
  },[isLoaded,employees,id,isAddMode]);

  return (
    isLoaded && (
      <Formik
        initialValues={isAddMode ? initialValues : employee}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form className="p-4">
              <h1>{isAddMode ? "Add employee" : "Edit employee"}</h1>
              <div className="form-row pb-3">
                <div className="form-group col-7">
                  <label>Name</label>
                  <Field
                    name="name"
                    type="text"
                    className={
                      "form-control" +
                      (errors.name && touched.name ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </div>
              <div className="form-row pb-3">
                <div className="form-group col-7">
                  <label>Location</label>
                  <Field
                    name="location"
                    type="text"
                    className={
                      "form-control" +
                      (errors.location && touched.location ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </div>
              <div className="form-row pb-3">
                <div className="form-group col-7">
                  <label>Designation</label>
                  <Field
                    name="designation"
                    type="text"
                    className={
                      "form-control" +
                      (errors.designation && touched.designation
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="designation"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                  Save
                </button>
                <Link to="/" className="btn btn-link">
                  Cancel
                </Link>
              </div>
            </Form>
          );
        }}
      </Formik>
    )
  );
}
