import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/header.css";

class Header extends Component {
	render() {
		return (
			<div className="d-flex flex-column">
				<div className=" d-flex div-header">
					<div className="d-flex width-30 justify-center search-div">
						<p>Buscar</p>
						<input type="search" className="search-input"></input>
					</div>
					<div className="d-flex width-30 justify-center">
						<img
							src={logo}
							alt="logo perro rutero"
							className="logo d-flex"
						></img>
					</div>
					<div className="d-flex width-30">
						<ul className="d-flex ">
							<li>Contacto</li>
							<li>Login</li>
							<li>Favs</li>
							<li>Cart</li>
						</ul>
					</div>
				</div>
				<div className="categories-bar d-flex">
					<ul className="d-flex">
						<li className="ligth">CATEGORY 1</li>
						<li className="ligth">CATEGORY 2</li>
						<li className="ligth">CATEGORY 3</li>
						<li className="ligth">CATEGORY 4</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Header;
