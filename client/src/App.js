import React from 'react';
import AllCustomers from './components/Main/AllCustomers';
import AllAccounts from "./components/Main/AllAccounts";
// import Customer from "../src/components/Main/Customers/Customer"

function App() {
  return (
    <>
      <div className="container">
        <div className="customerContainer">
          <AllCustomers />
        </div>
        <div className="accountContainer">
          <AllAccounts />
        </div>
      </div>
    </>
  );
}

export default App;

//add button to conditionally render customers or accounts on main view
