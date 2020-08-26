import React from "react";
import Table from "react-bootstrap/Table";
import Customers from "../../../../data/customers.json";
// import "./style.css";

const Customer = (props) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{props.first_name}</td>
          <td>{props.last_name}</td>
        </tr>
      </tbody>
    </>
  );
};

export default Customer;
