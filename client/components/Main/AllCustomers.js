import React from "react";
import Table from "react-bootstrap/Table";
import Customer from "./Customers/Customer"
import Customers from "../../../../data/customers.json";

// import YourRSVP from "./YourRSVP/YourRSVP";

const AllCustomers = (props) => {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        {Customers.map((customer, index) => {
          <Customer
            // click={() => props.clicked(index)}
            first_name={customer.first_name}
            last_name={customer.last_name}
          />
        })}
      </Table>
    )
}

export default AllCustomers;
