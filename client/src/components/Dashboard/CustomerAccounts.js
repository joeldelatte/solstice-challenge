import React, { useContext, useState, useEffect, useLayoutEffect} from "react";
import http from "../../utils/http-common";
import Account from "../Main/Accounts/Account";
import { CustomerContext } from "../../utils/CustomerContext";
import "../Main/main.css";

const CustomerAccounts = () => {

    const { globalCustomer } = useContext(CustomerContext);
    const [accounts, setAccounts] = useState([]);
    const [customerID, setCustomerID] = useState();

    function getAllAccounts() {
      http
        .get("/accounts")
        .then(function (response) {
          let data = response.data.accounts.filter((element)=>{
            if(element.customer_id === customerID) {
              return element;
            } 
          });
          setAccounts(data);
        })
        .catch(function (err) {
          console.log(err);
        });
        
    }

    const renderAccounts = () => {
      if(!accounts.length) {
        return <h4>...no accounts, yet!</h4>
      } else {
        return (
          <>
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Solar Farm ID</th>
                <th>Capacity Share</th>
                <th>Created On</th>
              </tr>
            </thead>
            <tbody>
              {accounts &&
                accounts.map((account, index) => {
                  return (
                      <Account
                        key={index}
                        customer_id={account.customer_id}
                        address={account.address}
                        city={account.city}
                        state={account.state}
                        zip_code={account.zip_code}
                        solar_farm_id={account.solar_farm_id}
                        capacity_share={account.capacity_share}
                        created_date={account.created_date}
                      />
                    
                  );
                })}
            </tbody>
          </table>
          </>
        )
        
      }
    }

    useEffect(() => {
        (globalCustomer && setCustomerID(globalCustomer.id))        
    }, [globalCustomer, setCustomerID])
    

    useLayoutEffect(() => {
        setTimeout(() => {
          getAllAccounts();
        }, 550);
    }, [customerID]);

    

    return (
      <>
        <div className="container">
          <h2>Customer's Accounts:</h2>
          {renderAccounts()}
        </div>
      </>
    );

}

export default CustomerAccounts;