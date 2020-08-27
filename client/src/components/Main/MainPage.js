import React, { useState } from "react";
import AllCustomers from "./Customers/AllCustomers";
import AllAccounts from "./Accounts/AllAccounts";

const MainPage = () => {

    const [accountsClicked, setAccountsClicked] = useState(false);

    return (
        <div className="container">
          <div>
            <button onClick={()=>{setAccountsClicked(false)}}>View All Customers</button>
            <button onClick={()=>{setAccountsClicked(true)}}>View All Accounts</button>
          </div>
          {(!accountsClicked && <div className="customerContainer"><AllCustomers /></div>)}
          {(accountsClicked && <div className="accountContainer"><AllAccounts /></div>)}
        </div>
    )
}

export default MainPage;