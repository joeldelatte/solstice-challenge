import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/Main/MainPage"
import Dashboard from "./components/Dashboard/Dashboard";
import { CustomerContext } from "./utils/CustomerContext";

function App() {

  const [globalCustomer, setGlobalCustomer] = useState(null);

  return (
    <>
      <Router>
        <CustomerContext.Provider value={{ globalCustomer, setGlobalCustomer }}>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/profile">
              <Dashboard />
            </Route>
          </Switch>
        </CustomerContext.Provider>
      </Router>
    </>
  );
}

export default App;

