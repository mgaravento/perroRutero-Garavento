import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/temporary.css";

export const Logo = () => {
	return (
		<div className="dFlex width30 justifyCenter">
			<img src={logo} alt="logo perro rutero" className="logo dFlex"></img>
		</div>
	);
};
