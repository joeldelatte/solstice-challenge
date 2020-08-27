import React, { useContext, useState, useEffect } from "react";
import http from "../../../utils/http-common";
import { CustomerContext } from "../../../utils/CustomerContext";

const CustomerProfile = () => {

    const { globalCustomer } = useContext(CustomerContext);

    useEffect(() => {
      console.log(globalCustomer);
    }, [globalCustomer]);

    return (
      <>
        <div className="container">
          <table className="customerTable">
            <thead>
              <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Active</th>
                <th>Account Manager ID</th>
                <th>Reason for Joining</th>
                <th>Created on</th>
              </tr>
            </thead>
            <tbody>
              {globalCustomer && (
                <tr>
                  <td>{globalCustomer.id}</td>
                  <td>{globalCustomer.first_name}</td>
                  <td>{globalCustomer.last_name}</td>
                  <td>{globalCustomer.email}</td>
                  <td>{globalCustomer.active}</td>
                  <td>{globalCustomer.account_manager_id}</td>
                  <td>{globalCustomer.reason_for_joining}</td>
                  <td>{globalCustomer.created_date}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default CustomerProfile;