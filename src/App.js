import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddEditEmployee, Employeelist } from "./module/employee";
import { Departmentlist, AddEdit } from "./module/department";

import { GlobalProvider } from "./context/GlobalState";
import { Wrapper } from "./components/Wrapper";
import { NotFoundPage } from './components/NotFoundPage'
function App() {
  return (
    <GlobalProvider>
      <Wrapper>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/employee" component={Employeelist} exact />
          <Route path="/employee/add" component={AddEditEmployee} exact />
          <Route path="/employee/edit/:id" component={AddEditEmployee} exact />
          <Route path="/department" component={Departmentlist} exact />
          <Route path="/department/add" component={AddEdit} exact />
          <Route path="/department/edit/:id" component={AddEdit} exact />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Wrapper>
    </GlobalProvider>
  );
}

export default App;
