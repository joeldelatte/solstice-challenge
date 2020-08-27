import React from "react";
import "../main.css"

const Customer = (props) => {
  return (
    <>
      <tr onClick={() => props.click()}>
        <td>{props.first_name}</td>
        <td>{props.last_name}</td>
      </tr>
    </>
  );
};

export default Customer;

