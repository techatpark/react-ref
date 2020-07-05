import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import {AddEditEmployee} from "./components/AddEditEmployee"

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddEditEmployee} exact />
        <Route path="/edit/:id" component={AddEditEmployee} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
