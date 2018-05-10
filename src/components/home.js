import React, { Component } from "react";
import Button from "./buttons";
import Imagepage from "./images";

class Home extends Component {
	render() {
		return (
			<div className="row home">
				<Imagepage/>
				<Button/>
			</div>
		);
	}
}

export default Home;
