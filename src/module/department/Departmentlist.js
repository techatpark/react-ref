import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";

export const Departmentlist = () => {
    const { departments, removeDepartment, editDepartment } = useContext(GlobalContext);
    return (
        <Fragment>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <Link to="/department/add">Create</Link>
                </li>
            </ul>
            {departments.length > 0 ? (
                <Fragment>
                    <ul class="list-group list-group-flush">
                        {departments.map((department) => (
                            <div className="list-group-item" key={department.id}>
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">{department.name}</h5>
                                    <small>
                                        <div
                                            class="btn-group"
                                            role="group"
                                            aria-label="Basic example"
                                        >
                                            <Link to={`/department/edit/${department.id}`}>
                                                <button type="button" class="btn btn-outline-secondary">
                                                    <i
                                                        class="far fa-edit"
                                                        onClick={() => editDepartment(department.id)}
                                                    ></i>
                                                </button>
                                            </Link>
                                            <button type="button" class="btn btn-outline-secondary">
                                                <i
                                                    class="far fa-trash-alt"
                                                    onClick={() => removeDepartment(department.id)}
                                                ></i>
                                            </button>
                                        </div>
                                    </small>
                                </div>
                                <small>{department.designation}</small>
                            </div>
                        ))}
                    </ul>
                </Fragment>
            ) : (
                    <p className="text-center">No data</p>
                )}
        </Fragment>
    );
};
