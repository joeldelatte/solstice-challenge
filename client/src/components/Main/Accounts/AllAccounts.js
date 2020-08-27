import React, { useState, useEffect } from "react";
import Account from "./Account";
import http from "../../../utils/http-common";
import "../main.css";

const AllAccounts = (props) => {
  const [accounts, setAccounts] = useState([]);

  function getAccounts() {
    http
      .get("/accounts")
      .then(function (response) {
        console.log(response.data.accounts);
        setAccounts(response.data.accounts);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <>
      <h2>Accounts</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
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
          {accounts.map((account, index) => {
            return (
              <Account
                key={index}
                // click={() => props.clicked(index)}
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
  );
};

export default AllAccounts;
