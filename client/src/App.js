import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomerProfile from "../src/components/Dashboard/Profile/CustomerProfile"
import MainPage from "./components/Main/MainPage"
import { CustomerContext } from "./utils/CustomerContext";

function App() {

  const [globalCustomer, setGlobalCustomer] = useState(null);

  // useEffect(() => {
  //   console.log(globalCustomer)
  // }, [globalCustomer])

  return (
    <>
      <Router>
        <CustomerContext.Provider value={{ globalCustomer, setGlobalCustomer }}>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/profile">
              <CustomerProfile />
            </Route>
          </Switch>
        </CustomerContext.Provider>
      </Router>
    </>
  );
}

export default App;

