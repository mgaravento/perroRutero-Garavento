import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/temporary.css";
import { Link } from "react-router-dom";

export const Logo = () => {
	return (
		<div className="dFlex width30 justifyCenter">
			<Link to="/">
				<img src={logo} alt="logo perro rutero" className="logo dFlex"></img>
			</Link>
		</div>
	);
};
