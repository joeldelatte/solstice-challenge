import React from "react";
// import YourRSVP from "./YourRSVP/YourRSVP";

const AllAccounts = (props) => {
  return props.rsvps.map((rsvp, index) => {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <Customer
          click={() => props.clicked(index)}
          name={rsvp.Event.event_name}
        />
      </Table>
    );
  });
};

export default AllAccounts;
