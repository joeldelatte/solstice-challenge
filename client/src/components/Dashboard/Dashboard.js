import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CustomerProfile from "./Profile/CustomerProfile";



const Dashboard = () => {

    return (
        <div className="container">
          <div>
            <button><Link to="/" role="button">Return to Main</Link></button>
          </div>
          <CustomerProfile />
        </div>
    )
}

export default Dashboard;