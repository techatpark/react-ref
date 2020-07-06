import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddEditEmployee, Employeelist } from "./module/employee"
import { Departmentlist, AddEdit } from "./module/department"

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/employee" component={Employeelist} exact />
        <Route path="/employee/add" component={AddEditEmployee} exact />
        <Route path="/employee/edit/:id" component={AddEditEmployee} exact />
        <Route path="/department" component={Departmentlist} exact />
        <Route path="/department/add" component={AddEdit} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;