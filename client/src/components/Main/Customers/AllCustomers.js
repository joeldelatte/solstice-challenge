import React, { useContext, useState, useEffect } from "react";
import Customer from "./Customer"
import http from "../../../utils/http-common";
import { CustomerContext } from "../../../utils/CustomerContext";
import "../main.css";

const AllCustomers = () => {

  const { setGlobalCustomer } = useContext(CustomerContext);
  const [customers, setCustomers] = useState([]);

  function click(index) {
    http.get("/customers")
      .then(function (response) {
        setGlobalCustomer(response.data.customers[index]);
      })
      .catch(function (err) {
        console.log(err);
      })
  }

  function getCustomers() {
    http.get("/customers")
      .then(function (response) {
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
