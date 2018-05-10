import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Imagepage extends Component{

    render()
    {
      return (
        <div className="container">

        <ul className="navbar-nav mr-auto">

        <li className="nav-item active">
        <h1> BOSE Wave Soundtouch System IV</h1>
        </li>
        <li className="nav-item active">
                  <img
                    src="../img/Black Wave.png"

                    alt="Blackwave"
                    height="100"
                    width="90"
                  />
                </li>
                <li className="nav-item active">
                    <img
                      src="../img/SilverWave.png"
                      alt="SilverWave"
                      height="100"
                      width="90"
                    />
                  </li>
                  <li className="nav-item active">
                      <img
                        src="../img/Web 1920.png"
                        alt="Amazon Offer Speakers"
                        height="200"
                        width="100"
                      />
                    </li>
                    <li className="nav-item active">
                    <h5>Shop With Confidence</h5>
                      30-day Risk Free Trail
                      Free expedited shipping
                      <h3>$1000.00</h3>
                      IN STOCK

                      </li>
                      


                    </ul>
                </div>
      );
 }
}
export default Imagepage;
