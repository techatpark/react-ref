import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GlobalContext } from "../../context/GlobalState";

export function AddEdit({ history, match }) {
    const { id } = match.params;
    const isAddMode = !id;
    const { addDepartment, departments, editDepartment } = useContext(GlobalContext);
    const [department, setDepartment] = useState({});
    const [isLoaded, updateLoader] = useState(false);
    const initialValues = {
        name: "",
        branch: "",

    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        branch: Yup.string().required("branch is required"),

    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        console.log("success", fields)
        if (isAddMode) {
            createDepartment(fields, setSubmitting);
        } else {
            updateDepartment(fields, setSubmitting);
        }
    }

    function createDepartment(fields, setSubmitting) {
        addDepartment({ ...fields, id: departments.length + 1 });
        setSubmitting(true);
        history.push(".");
    }

    function updateDepartment(fields, setSubmitting) {
        editDepartment(fields);
        setSubmitting(true);
        history.push("..");
    }

    useEffect(() => {
        if (!isAddMode) {
            const selectedEmp = departments.find((emp) => emp.id === parseInt(id));
            setDepartment(selectedEmp);
        }
        updateLoader(true);
    }, [isLoaded, departments, id, isAddMode]);

    return (
        isLoaded && (
            <Formik
                initialValues={isAddMode ? initialValues : department}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched, isSubmitting }) => {
                    return (
                        <Form className="p-4">
                            <h1>{isAddMode ? "Add Department" : "Edit Department"}</h1>
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
                                    <label>Branch</label>
                                    <Field
                                        name="branch"
                                        type="text"
                                        className={
                                            "form-control" +
                                            (errors.branch && touched.branch ? " is-invalid" : "")
                                        }
                                    />
                                    <ErrorMessage
                                        name="branch"
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
                                <Link to="/department" className="btn btn-link">
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
