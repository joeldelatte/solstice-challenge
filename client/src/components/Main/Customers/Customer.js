import React from "react";
import "../../Main/main.css"

const Customer = (props) => {
  return (
    <>
      <tr>
        <td>{props.first_name}</td>
        <td>{props.last_name}</td>
      </tr>
    </>
  );
};

export default Customer;
