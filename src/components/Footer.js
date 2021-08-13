import React from "react";

import "../assets/css/temporary.css";
import "font-awesome/css/font-awesome.css";
import { Logo } from "./Logo";

export const Footer = () => {
	return (
		<div className="dFlex footerDiv">
			<Logo></Logo>

			<ul className="ulNets width30">
				<li>
					<i className="fa fa-envelope li-footer"></i>
				</li>
				<li>
					<i className="fa fa-facebook liFooter"></i>
				</li>
				<li>
					<i className="fa fa-instagram liFooter"></i>
				</li>
				<li>
					<i className="fa fa-youtube liFooter"></i>
				</li>
			</ul>
		</div>
	);
};
