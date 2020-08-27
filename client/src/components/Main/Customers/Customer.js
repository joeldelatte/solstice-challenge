import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../main.css"

const Customer = (props) => {
  return (
    <>
      <tr onClick={() => props.click()}>
        <td>
          <Link to="/profile">{props.first_name}</Link>
        </td>
        <td>{props.last_name}</td>
      </tr>
    </>
  );
};

export default Customer;

