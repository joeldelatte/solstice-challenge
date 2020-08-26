import React, { useState, useEffect } from "react";
import Customer from "./Customers/Customer"
import http from "../../http-common";
import "./main.css";

const AllCustomers = (props) => {

  const [customers, setCustomers] = useState([]);

  function getCustomers() {
    http.get("/customers")
      .then(function (response) {
        console.log(response.data.customers);
        setCustomers(response.data.customers);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  useEffect(()=>{
    getCustomers()
  }, []);

    return (
      <table className="customerTable">
        <thead>
          <caption>
            <h2>Customers</h2>
          </caption>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => {
            return (
              <Customer
                key={index}
                // click={() => props.clicked(index)}
                first_name={customer.first_name}
                last_name={customer.last_name}
              />
            );
          })}
        </tbody>
      </table>
    );
}

export default AllCustomers;
