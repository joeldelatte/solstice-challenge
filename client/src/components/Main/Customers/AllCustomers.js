import React, { useContext, useState, useEffect } from "react";
import Customer from "./Customer"
import http from "../../../utils/http-common";
import { CustomerContext } from "../../../utils/CustomerContext";
import "../main.css";

const AllCustomers = () => {

  const { globalCustomer, setGlobalCustomer } = useContext(CustomerContext);
  const [customers, setCustomers] = useState([]);

  //I need the customer data of the customer clicked on
  function click(index) {
    http.get("/customers")
      .then(function (response) {
        // console.log(response.data.customers[index]);
        setGlobalCustomer(response.data.customers[index]);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function getCustomers() {
    http.get("/customers")
      .then(function (response) {
        // console.log(response.data.customers);
        setCustomers(response.data.customers);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  useEffect(()=>{
    getCustomers()
    console.log(globalCustomer);
  }, [globalCustomer]);

    return (
      <>
      <h2>Customers</h2>
      <table className="customerTable">
        <thead>
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
                click={() => click(index)}
                first_name={customer.first_name}
                last_name={customer.last_name}
              />
            );
          })}
        </tbody>
      </table>
      </>
    );
}

export default AllCustomers;
