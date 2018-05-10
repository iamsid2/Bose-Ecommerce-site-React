import React, { Component } from "react";
import { Link } from "react-router-dom";

class Button extends React.Component {

  render() {
    return (
      <div className="container">
      <Link className="btn btn-info nav-link" to="/Calculator">
         Net Cost Calculator</Link>
       <Link to="/" className="nav-link btn btn-dark">Buy</Link>
       </div>
    );
  }
}

export default Button;
