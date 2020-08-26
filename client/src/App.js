import React, { useState } from 'react';
import AllCustomers from './components/Main/AllCustomers';
import AllAccounts from "./components/Main/AllAccounts";
import { CustomerContext } from "../../utils/CustomerContext";
// import Customer from "../src/components/Main/Customers/Customer"

function App() {

  const [accountsClicked, setAccountsClicked] = useState(false);
  // const [customersClicked, setCustomersClicked] = useState(false);

  return (
    <>
    <CustomerContext.Provider value={{globalCustomer, setGlobalCustomer}}>
      <div className="container">
        <div>
          <button onClick={()=>{setAccountsClicked(false)}}>View All Customers</button>
          <button onClick={()=>{setAccountsClicked(true)}}>View All Accounts</button>
        </div>
        {(!accountsClicked && <div className="customerContainer"><AllCustomers /></div>)}
        {(accountsClicked && <div className="accountContainer"><AllAccounts /></div>)}
      </div>
      </CustomerContext.Provider>
    </>
  );
}

export default App;

