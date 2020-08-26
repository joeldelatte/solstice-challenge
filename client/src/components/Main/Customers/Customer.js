import React from "react";
import "../../Main/main.css"

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

//add on click to the <tr> and pass props as parameter so that you can pass the data from an api call function in parent component and then render new dashboard component from there
//possibly will need global state to save which customer was clicked and then pass it into functions within new component. will have to set up react-router-dom or do more conditional rendering
