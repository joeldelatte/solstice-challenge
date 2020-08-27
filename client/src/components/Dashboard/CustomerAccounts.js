import React, { useContext, useState, useEffect, useLayoutEffect} from "react";
import http from "../../utils/http-common";
import Account from "../Main/Accounts/Account";
import { CustomerContext } from "../../utils/CustomerContext";
import "../Main/main.css";

const CustomerAccounts = () => {

    const { globalCustomer } = useContext(CustomerContext);
    const [accounts, setAccounts] = useState([{
      id: 0,
      customer_id: 0,
      address: "",
      city: "",
      state: "",
      zip_code: "",
      solar_farm_id: 0,
      capacity_share: 0,
      created_date: ""
    }]);
    const [customerID, setCustomerID] = useState();


    function getAllAccounts() {
      http
        .get("/accounts")
        .then(function (response) {
          let data = response.data.accounts.filter((element)=>{
            if(element.customer_id == customerID) {
               return element;
            }
          }
          );
          console.log(data);
          setAccounts(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    }


    useEffect(() => {
        (globalCustomer && setCustomerID(globalCustomer.id))
        console.log(customerID);        
    }, [globalCustomer, customerID])
    

    useLayoutEffect(() => {
        setTimeout(() => {
          getAllAccounts();
        }, 550);
    }, [globalCustomer, customerID]);

    

    return (
      <>
        <div className="container">
          <h2>Customer's Accounts:</h2>
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
              {accounts.customer_id !== customerID && (
                <Account
                  customer_id={"0"}
                  address={"address"}
                  city={"city"}
                  state={"state"}
                  zip_code={"zip code"}
                  solar_farm_id={"solar farm id"}
                  capacity_share={"capacity share"}
                  created_date={"created date"}
                />
              )}
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
        </div>
      </>
    );

}

export default CustomerAccounts;