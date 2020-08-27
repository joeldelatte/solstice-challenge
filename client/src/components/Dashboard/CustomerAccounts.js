import React, { useContext, useState, useEffect } from "react";
import http from "../../../utils/http-common";
// import { CustomerContext } from "../../../utils/CustomerContext";

const CustomerAccounts = (props) => {

    // const { globalCustomer } = useContext(CustomerContext);


    return (
      <>
        <div>
          <h2>Accounts</h2>
          <table>
            <thead>
              <tr>
                <th>{props.customerName}</th>
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
        </div>
      </>
    );

}

export default CustomerAccounts;