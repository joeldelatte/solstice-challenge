import React, { useState } from 'react';
import AllCustomers from './components/Main/AllCustomers';
import AllAccounts from "./components/Main/AllAccounts";
// import Customer from "../src/components/Main/Customers/Customer"

function App() {

  const [accountsClicked, setAccountsClicked] = useState(false);
  // const [customersClicked, setCustomersClicked] = useState(false);

  return (
    <>
      <div className="container">
        <div>
          <button onClick={()=>{setAccountsClicked(false)}}>View All Customers</button>
          <button onClick={()=>{setAccountsClicked(true)}}>View All Accounts</button>
        </div>
        {(!accountsClicked && <div className="customerContainer"><AllCustomers /></div>)}
        {(accountsClicked && <div className="accountContainer"><AllAccounts /></div>)}
      </div>
    </>
  );
}

export default App;

