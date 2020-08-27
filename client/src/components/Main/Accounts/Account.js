import React from "react";
import "../main.css";

const Account = (props) => {
  return (
    <>
      <tr>
        <td>{props.customer_id}</td>
        <td>{props.address}</td>
        <td>{props.city}</td>
        <td>{props.state}</td>
        <td>{props.zip_code}</td>
        <td>{props.solar_farm_id}</td>
        <td>{props.capacity_share}</td>
        <td>{props.created_date}</td>
      </tr>
    </>
  );
};

export default Account;
